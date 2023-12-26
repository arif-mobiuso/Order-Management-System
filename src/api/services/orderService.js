import db from "../../config/databaseConfig.js" ; 
import { transformOrderHeaderDetails , transformOrderItemsDetails} from "../helpers/utilities.js";

// to add  header details to place order in order_header table  

export const  NewHeader = (orderDetails) =>{
    try{
        const addHeaderQuery = `insert into order_header (CUSTOMER_ID , ORDER_DATE , ORDER_STATUS , PAYMENT_MODE , PAYMENT_DATE , ORDER_SHIPMENT_DATE , SHIPPER_ID) values (${orderDetails.CUSTOMER_ID} ,"${orderDetails.ORDER_DATE} ","${orderDetails.ORDER_STATUS}" ,"${orderDetails.PAYMENT_MODE}" ,"${orderDetails.PAYMENT_DATE} ","${orderDetails.ORDER_SHIPMENT_DATE}" ,${orderDetails.SHIPPER_ID}) ;  ` ; 
        db.query(addHeaderQuery , function(err , result){
            if(err){
                console.log("Error in creating addHeaderQuery");
            }
            else{
                console.log(result);
            }
        });
        return {
            statusCode: 201, 
            status: { message: "Sucessfully created new  Order Header!"  },
          };
    }
    catch(err){
        console.error("Error in Crating New Order Header : " , err);
    }
};


// to add  orderitem details to place order in order_items table  

export const  NewItems = (orderDetails , orderId) =>{
    return new Promise(async (resolve , reject)=>{
        try{
            const addOrderItemsQuery = `insert into order_items (ORDER_ID , PRODUCT_ID , PRODUCT_QUANTITY ) values (${orderId} ,${orderDetails.productId} ,${orderDetails.productQuantity} ) ;  ` ; 
            db.query(addOrderItemsQuery , function(error, result){
                if(error){
                console.log("Error in creating addOrderItemsQuery" ,error);
                reject(error);
            }
            else{
                console.log(result);
                resolve({
                    statusCode: 201, 
                    status: { message: "Sucessfully added Order Items!"  }
                });
            }
        });
        }
        catch(error){
        console.error("Error in Crating New Order Items : " , error);
        reject(error);
    }
});
};


export const placeOrder = (orderDetails , customerId) =>{
    return new Promise(async (resolve , reject)=>{
        try{
            const currentDate = new Date() ; 
            const orderDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}` ;   
            const addHeaderQuery = `insert into order_header (CUSTOMER_ID , ORDER_DATE , PAYMENT_MODE ) values (${customerId} ,"${orderDate} ", "${orderDetails.paymentMode}") ;  ` ; 
            db.query(addHeaderQuery , function(error , result){
                if(error){
                    console.log("Error in addHeaderQuery !");
                    reject(error);
                }
                else{
                    console.log(result);
                    resolve({
                        statusCode : 201 , 
                        status : {
                            message : "New Order Created !" ,
                            orderId :  result.insertId
                        }
                    });
                }
            });
        }
        catch(error){
            console.log("Error in placing order : " , error);
            reject(error);
        }
    });
};


export const orderHeaderById = (customerId) =>{
    return new Promise(async(resolve , reject)=>{
        try{
            const orderHeaderByIdQuery = `select * from order_header where order_id = ${customerId}` ;
            db.query(orderHeaderByIdQuery , function(error ,result){
                if(error){
                    console.log("Error in orderHeaderById : " , error);
                    reject(error);
                }
                else{
                    console.log(result);
                    if (result.length == 0) {
                        resolve ({statusCode : 404 , status:{message : "Header not found !"}});
                    }
                    else {
                        resolve({
                            statusCode : 200 , 
                            status : { message : "Sucessfully fetched Order Header details !" , 
                            result : result.map(transformOrderHeaderDetails)}
                        });
                    }
                }
            });
        }
        catch(error){
            console.log("Error in orderHeaderById : " , error);
            reject(error);
        }
    });
};



export const orderItemsById = (customerId) =>{
    return new Promise(async(resolve , reject)=>{
        try{
            const orderItemsByIdQuery = `select * from order_items where order_id = ${customerId}` ;
            db.query(orderItemsByIdQuery , function(error ,result){
                if(error){
                    console.log("Error in orderItemsById : " , error);
                    reject(error);
                }
                else{
                    console.log(result);
                    if (result.length == 0) {
                        resolve ({statusCode : 404 , status:{message : "Order Items not found !"}});
                    }
                    else {
                        resolve({
                            statusCode : 200 , 
                            status : { message : "Sucessfully fetched Order Items details !" , result : result.map(transformOrderItemsDetails)}
                        });
                    }
                }
            });
        }
        catch(error){
            console.log("Error in orderItemsById : " , error);
            reject(error);
        }
    });
};


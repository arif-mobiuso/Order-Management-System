import { error } from "console";
import db from "../../config/databaseConfig.js" ; 
import { resolve } from "path";


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
            data: { message: "Sucessfully created new  Order Header!"  },
          };
    }
    catch(err){
        console.error("Error in Crating New Order Header : " , err);
    }
};


// to add  orderitem details to place order in order_items table  

export const  NewItems = (orderDetails , order_id) =>{
    return new Promise(async (resolve , reject)=>{
        try{
            const addOrderItemsQuery = `insert into order_items (ORDER_ID , PRODUCT_ID , PRODUCT_QUANTITY ) values (${order_id} ,${orderDetails.PRODUCT_ID} ,${orderDetails.PRODUCT_QUANTITY} ) ;  ` ; 
            db.query(addOrderItemsQuery , function(error, result){
                if(error){
                console.log("Error in creating addOrderItemsQuery" ,error);
                reject(error);
            }
            else{
                console.log(result);
                resolve({
                    statusCode: 201, 
                    data: { message: "Sucessfully added Order Items!" ,
                            result : result },
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


export const placeOrder = (orderDetails , customer_id) =>{
    return new Promise(async (resolve , reject)=>{
        try{
            const addHeaderQuery = `insert into order_header (CUSTOMER_ID , ORDER_DATE , ORDER_STATUS , PAYMENT_MODE , PAYMENT_DATE , ORDER_SHIPMENT_DATE , SHIPPER_ID) values (${customer_id} ,"${orderDetails.ORDER_DATE} ","${orderDetails.ORDER_STATUS}" ,"${orderDetails.PAYMENT_MODE}" ,"${orderDetails.PAYMENT_DATE} ","${orderDetails.ORDER_SHIPMENT_DATE}" ,${orderDetails.SHIPPER_ID}) ;  ` ; 

            db.query(addHeaderQuery , function(error , result){
                if(error){
                    console.log("Error in addHeaderQuery !");
                    reject(error);
                }
                else{
                    console.log(result);
                    resolve({
                        statusCode : 201 , 
                        data : {
                            message : "New Order Created !" ,
                            result : result ,
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


export const orderHeaderById = (order_id) =>{
    return new Promise(async(resolve , reject)=>{
        try{
            const orderHeaderByIdQuery = `select * from order_header where order_id = ${order_id}` ;
            db.query(orderHeaderByIdQuery , function(error ,result){
                if(error){
                    console.log("Error in orderHeaderById : " , error);
                    reject(error);
                }
                else{
                    console.log(result);
                    resolve({
                        statusCode : 200 , 
                        data : { message : "Sucessfully fetched Order Header details !" , 
                                result : result}
                    });
                }
            });
        }
        catch(error){
            console.log("Error in orderHeaderById : " , error);
            reject(error);
        }
    });
};
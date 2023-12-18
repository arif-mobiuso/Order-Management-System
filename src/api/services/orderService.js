import db from "../../config/databaseConfig.js" ; 


// to add  header details to place order in order_header table  

export const  NewHeader = (orderDetails) =>{
    try{
        const addHeaderQuery = `insert into order_header (CUSTOMER_ID , ORDER_DATE , ORDER_STATUS , PAYMENT_MODE , PAYMENT_DATE , ORDER_SHIPMENT_DATE , SHIPPER_ID) values (${orderDetails.CUSTOMER_ID} ,${orderDetails.ORDER_DATE} ,"${orderDetails.ORDER_STATUS}" ,"${orderDetails.PAYMENT_MODE}" ,${orderDetails.PAYMENT_DATE} ,${orderDetails.ORDER_SHIPMENT_DATE} ,${orderDetails.SHIPPER_ID}) ;  ` ; 
        db.query(addHeaderQuery , function(err , result){
            if(err){
                console.log("Error in creating addHeaderQuery");
            }
            else{
                console.log(result);
            }
        })
    }
    catch(err){
        console.log("Error in Crating New Order Header!");
    }
    return "Sucessfully created new  Order Header!"  ;
};


// to add  orderitem details to place order in order_items table  

export const  NewItems = (orderDetails , order_id) =>{
    try{
        const addOrderItemsQuery = `insert into order_items (ORDER_ID , PRODUCT_ID , PRODUCT_QUANTITY ) values (${order_id} ,${orderDetails.PRODUCT_ID} ,${orderDetails.PRODUCT_QUANTITY} ) ;  ` ; 
        db.query(addOrderItemsQuery , function(err , result){
            if(err){
                console.log("Error in creating addOrderItemsQuery");
            }
            else{
                console.log(result);
            }
        })
    }
    catch(err){
        console.log("Error in Crating New Order Items!");
    }
    return "Sucessfully created new  Order Items!"  ;
};




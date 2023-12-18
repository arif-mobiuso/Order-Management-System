import db from "../../config/databaseConfig.js" ; 


// to add new customer to online_customer table

export const  NewCustomer = (cutomerDetails) =>{
    try{
        const currentDate = new Date() ; 
        const customerCreationDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}` ; 
        const addCustomerQuery = `insert into online_customer  (customer_fname ,customer_lname  , customer_email , customer_phone , address_id , customer_creation_date , customer_username , customer_gender ) values ("${cutomerDetails.CUSTOMER_FNAME}" ,"${cutomerDetails.CUSTOMER_LNAME}" ,"${cutomerDetails.CUSTOMER_EMAIL}" ,${cutomerDetails.CUSTOMER_PHONE} ,${cutomerDetails.ADDRESS_ID} ,'${customerCreationDate}' ,"${cutomerDetails.CUSTOMER_USERNAME} ","${cutomerDetails.CUSTOMER_GENDER}" ) ; ` ; 
        db.query(addCustomerQuery , function(err , result){
            if(err){
                console.log("Error in creating addCustomerQuery ");
                console.log(err);
            }
            else{
                console.log(result);
            }
        });
        return {
            statusCode: 201, 
            data: { message: "Sucessfully created new Customer!"  },
          };
    }
    catch(err){
        console.error("Error in Crating New Cutomer : " ,err);
    }
};



// To fetch all customer details from online_customer table 

export const getCustomerDetails = () =>{

    try{
        const getAllCustomersQuery = `select * from online_customer` ; 
        db.query(getAllCustomersQuery , function(err , result){
            if(err){
                console.log("Error in getAllCustomersQuery");
            }
            else{
                console.log(result);  ; 
            }
        });
        return {
            statusCode: 200, 
            data: { message: "Sucessfully completed fecthing Customer Details! " },
          };
    }
    catch(err){
        console.error("Error in getCustomerDetails : " , err);
    }

};


export const getCustomerById =(customer_id) =>{
    try{
        const fetchCustomerByIdQuery = `select * from online_customer where customer_id = ${customer_id}`; 
        db.query(fetchCustomerByIdQuery , function(err , result){
            if(err){
                console.log("Error in fetchCustomerByIdQuery !");
            }
            else{
                 console.log(result); ; 
            }
        });
        return {
            statusCode: 200, 
            data: { message:  `Sucessfully fetched customer Details with customer_id ${customer_id} ! `},
          };
    }
    catch(err){
        console.error("Error in getCustomerById : " , err);
    }
};


export const orderHeaderById = (orderDetails , customer_id)=>{
    try{
        const addHeaderByIdQuery = `insert into order_header (CUSTOMER_ID , ORDER_DATE , ORDER_STATUS , PAYMENT_MODE , PAYMENT_DATE , ORDER_SHIPMENT_DATE , SHIPPER_ID) values (${customer_id} ,${orderDetails.ORDER_DATE} ,"${orderDetails.ORDER_STATUS}" ,"${orderDetails.PAYMENT_MODE}" ,${orderDetails.PAYMENT_DATE} ,${orderDetails.ORDER_SHIPMENT_DATE} ,${orderDetails.SHIPPER_ID}) ;  ` ; 
        db.query(addHeaderByIdQuery , function(err , result){
            if(err){
                console.log("Error in creating addHeaderByIdQuery");
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
        console.error("Error in Crating New Order Header in orderHeaderById : " , err);
    }
};

import db from "../../config/databaseConfig.js" ; 


// to add new customer to online_customer table

export const  NewCustomer = (cutomerDetails) =>{

    try{
        const addCustomerQuery = `insert into online_customer  (customer_fname ,customer_lname  , customer_email , customer_phone , address_id , customer_creation_date , customer_username , customer_gender ) values ("${cutomerDetails.CUSTOMER_FNAME}" ,"${cutomerDetails.CUSTOMER_LNAME}" ,"${cutomerDetails.CUSTOMER_EMAIL}" ,${cutomerDetails.CUSTOMER_PHONE} ,${cutomerDetails.ADDRESS_ID} ,${cutomerDetails.CUSTOMER_CREATION_DATE} ,"${cutomerDetails.CUSTOMER_USERNAME} ","${cutomerDetails.CUSTOMER_GENDER}" ) ; ` ; 
        db.query(addCustomerQuery , function(err , result){
            if(err){
                console.log("Error in creating addCustomerQuery");
            }
            else{
                console.log(result);
            }
        })

    }
    catch(err){
        console.log("Error in Crating New Cutomer!");
    }

    return "Sucessfully created new Customer!"  ;


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
    }
    catch(err){
        console.log("Error in getCustomerDetails ");
    }

    return "Sucessfully completed fecthing Customer Details! "
};


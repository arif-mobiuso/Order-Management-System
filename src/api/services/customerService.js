import { error } from "console";
import db from "../../config/databaseConfig.js" ; 
import * as addressService  from "./addressService.js";


// to add new customer to online_customer table
export const  NewCustomer = async (cutomerDetails) =>{
    return new Promise(async (resolve , reject)=>{
        try{
            const currentDate = new Date() ; 
            const customerCreationDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}` ;            
            const addAddressIdResult =  await addressService.addCustomerAddress(cutomerDetails); 
            const addCustomerQuery = `insert into online_customer  (customer_fname ,customer_lname  , customer_email , customer_phone , address_id , customer_creation_date , customer_username , customer_gender ) values ("${cutomerDetails.firstName}" ,"${cutomerDetails.lastName}" ,"${cutomerDetails.email}" ,${cutomerDetails.phone} ,${addAddressIdResult.addressId} ,'${customerCreationDate}' ,"${cutomerDetails.userName} ","${cutomerDetails.gender}" ) ; ` ; 
            db.query(addCustomerQuery , function(error, result){
                if(error){
                    console.log("Error in creating addCustomerQuery" , error);
                    reject(error) ;
            }
            else{
                console.log(result);
                resolve({
                    statusCode: 201, 
                    data: { message: "Sucessfully created new Customer!" ,
                            customerId : result.insertId} 
                });
            }
        });
        }
    catch(error){
        console.error("Error in Creating New Cutomer : " ,error);
    }
}) ;
};

// To fetch all customer details from online_customer table 
export const getCustomerDetails = () =>{
    return new Promise(async(resolve , reject) =>{
        try{ 
            const getAllCustomersQuery = `select * from online_customer` ; 
            db.query(getAllCustomersQuery , function(error , result){
                if(error){
                    console.log("Error in getAllCustomersQuery" , error); 
                    reject(error);  
                }
                else{
                    console.log(result); 
                    resolve({
                        statusCode:200 , 
                        data : {
                            message:"Sucessfully  fecthed Customer Details! " ,
                            result:result , 
                        }
                    });
                }
            });
        }
    catch(error){
        console.error("Error in getCustomerDetails : " , error);
        reject(error);
    }
});
};


export const getCustomerById =(customer_id) =>{
    return new Promise(async(resolve , reject)=>{
        try{
            const fetchCustomerByIdQuery = `select * from online_customer where customer_id = ${customer_id}`; 
            db.query(fetchCustomerByIdQuery , function(error , result){
                if(error){
                    console.log("Error in fetchCustomerByIdQuery !" , error);
                    reject(error);
                }
                else{
                    console.log(result);
                    if(result.length == 0){
                        resolve ({statusCode : 404 , data:{message : "Customer not found !"}});
                    } else{
                        resolve({
                            statusCode: 200, 
                            data: { message:  `Sucessfully fetched customer Details with customer_id ${customer_id} ! ` , 
                            result : result}
                        }); 
                    }
            }
        });
    }
    catch(error){
        console.error("Error in getCustomerById : " , error);
        reject(error);
    }
});
};




// export const orderHeaderById = (orderDetails , customer_id)=>{
//     try{
//         const addHeaderByIdQuery = `insert into order_header (CUSTOMER_ID , ORDER_DATE , ORDER_STATUS , PAYMENT_MODE , PAYMENT_DATE , ORDER_SHIPMENT_DATE , SHIPPER_ID) values (${customer_id} ,${orderDetails.ORDER_DATE} ,"${orderDetails.ORDER_STATUS}" ,"${orderDetails.PAYMENT_MODE}" ,${orderDetails.PAYMENT_DATE} ,${orderDetails.ORDER_SHIPMENT_DATE} ,${orderDetails.SHIPPER_ID}) ;  ` ; 
//         db.query(addHeaderByIdQuery , function(err , result){
//             if(err){
//                 console.log("Error in creating addHeaderByIdQuery");
//             }
//             else{
//                 console.log(result);
//             }
//         });
//         return {
//             statusCode: 201, 
//             data: { message: "Sucessfully created new  Order Header!"  },
//           };
//     }
//     catch(err){
//         console.error("Error in Crating New Order Header in orderHeaderById : " , err);
//     }
// };

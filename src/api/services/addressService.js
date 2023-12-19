import db from "../../config/databaseConfig.js" ;


export const addCustomerAddress  = async (addressDetails) =>{
    return new Promise((resolve , reject)=>{
        try{
           const  addAddressQuery = `insert into address (address_line1 , address_line2 , city , state , pincode ,country) values ("${addressDetails.addressLine1}" , "${addressDetails.addressLine2}" , "${addressDetails.city}" ,"${addressDetails.state}" , ${addressDetails.pincode} , "${addressDetails.country}" )` ; 

            db.query(addAddressQuery , function(error , result){
                if(error){
                    console.log("Error in addAddressQuery : " , error);
                    reject(error);
                }
                else{
                    console.log(result);
                    resolve({
                        addressId : result.insertId
                        // addressId : 100
                    });
                }
            });
        }
        catch(error){
            console.log("Error in adding new customerAddress ! " , error);
            reject({message : error.error});
        }
      });
};
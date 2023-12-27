import db from "../../../config/databaseConfig.js";
import * as addressService from "../../address/services/addressService.js";
import * as userServices from "../../users/services/userServices.js"
import { transformCustomerDetails } from "../../helpers/utilities.js";

// to add new customer to online_customer table
export const NewCustomer = async (cutomerDetails) => {
    return new Promise(async (resolve, reject) => {
        try {
            const currentDate = new Date();
            const customerCreationDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
            const addAddressIdResult = await addressService.addCustomerAddress(cutomerDetails);
            const addUser = await userServices.newUser(cutomerDetails);
            const addCustomerQuery = `insert into online_customer  (customer_fname ,customer_lname  , customer_email , customer_phone , address_id , customer_creation_date , customer_username , customer_gender ) values ("${cutomerDetails.firstName}" ,"${cutomerDetails.lastName}" ,"${cutomerDetails.email}" ,${cutomerDetails.phone} ,${addAddressIdResult.addressId} ,'${customerCreationDate}' ,"${cutomerDetails.userName} ","${cutomerDetails.gender}" ) ; `;
            db.query(addCustomerQuery, function (error, result) {
                if (error) {
                    console.log("Error in creating addCustomerQuery", error);
                    reject(error);
                }
                else {
                    console.log(result);
                    resolve({
                        message: "Sucessfully created new Customer!",
                        customerId: result.insertId
                    });
                }
            });
        }
        catch (error) {
            console.error("Error in Creating New Cutomer : ", error);
        }
    });
};

// To fetch all customer details from online_customer table 
export const getCustomerDetails = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const getAllCustomersQuery = `select * from online_customer`;
            db.query(getAllCustomersQuery, function (error, result) {
                if (error) {
                    console.log("Error in getAllCustomersQuery", error);
                    reject(error);
                }
                else {
                    resolve({
                        message: "Sucessfully  fecthed Customer Details! ",
                        result: result.map(transformCustomerDetails),
                    });
                }
            });
        }
        catch (error) {
            console.error("Error in getCustomerDetails : ", error);
            reject(error);
        }
    });
};



export const getCustomerById = (customerId) => {
    return new Promise((resolve, reject) => {
        try {
            const fetchCustomerByIdQuery = `select * from online_customer where customer_id = ${customerId}`;
            db.query(fetchCustomerByIdQuery, function (error, result) {
                if (error) {
                    console.log("Error in fetchCustomerByIdQuery !", error);
                    reject({message : error.message});
                }
                resolve({
                    message: `Sucessfully fetched customer Details with customerId ${customerId} ! `,
                    result: result.map(transformCustomerDetails)
                });
            });
        }
        catch (error) {
            console.error("Error in getCustomerById : ", error);
            reject({message : error.message});
        }
    });
};


export const deleteCustomerById = (customerId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const deleteCustomerByIdQuery = `delete from online_customer where customer_id = ${customerId}`;
            db.query(deleteCustomerByIdQuery, async function (err, result) {
                if (err) {
                    console.log("Error in deleteCustomerByIdQuery", err);
                    reject(err);
                }
                else {
                    if (result.affectedRows == 0) {
                        resolve({
                            statusCode: 404,
                            status: { message: "Customer not found - cannot delete !" }
                        });
                    }
                    else {
                        resolve({
                            message: `Sucessfully deleted  Customer  with customerId ${customerId} ! `,
                            result: result
                        });
                    }
                }
            });
        }
        catch (err) {
            console.error("Error in deleteCustomerById :", err);
            reject(err);
        }
    });
};



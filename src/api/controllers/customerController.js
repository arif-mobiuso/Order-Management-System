

import * as customerService from "../services/customerService.js" ;


export const addNewCustomer =  async (req, res)  => {
    try{
    const cutomerDetails = req.body ; 
    const newCustomerStatus  =  customerService.NewCustomer(cutomerDetails) ;
    return res.status(newCustomerStatus.statusCode).send(newCustomerStatus.data);
     }
     catch(err){
          console.error("Error in addNewCustomer:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};

export const getAllCustomers = async (req , res) =>{
    try{
       const getCustomersStatus =customerService.getCustomerDetails() ; 
    return res.status(getCustomersStatus.statusCode).send(getCustomersStatus.data);
     }
     catch(err){
          console.error("Error in getAllCustomers:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
       
};

export const getCustomerDetailsById = async(req , res)=>{
    try{
    const customer_id =  req.params.customer_id ; 
    const getCustomerByIdStatus = customerService.getCustomerById(customer_id ) ; 
    return res.status(getCustomerByIdStatus.statusCode).send(getCustomerByIdStatus.data);
     }
     catch(err){
          console.error("Error in getCustomerDetailsById:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
    
};


export const addOrderHeaderById = async (req, res) =>{
    try{
    const customer_id =  req.params.customer_id ; 
    const orderDetails = req.body ; 
    const addOrderHeaderByIdStatus = customerService.orderHeaderById(orderDetails ,customer_id) ;
    return res.status(addOrderHeaderByIdStatus.statusCode).send(addOrderHeaderByIdStatus.data);
     }
     catch(err){
          console.error("Error in addOrderHeaderById:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};
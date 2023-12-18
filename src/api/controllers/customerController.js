

import * as customerService from "../services/customerService.js" ;


export const addNewCustomer =  async (req, res)  => {
    const cutomerDetails = req.body ; 
    const newCustomerStatus  =  customerService.NewCustomer(cutomerDetails) ;
    return res.status(newCustomerStatus.statusCode).send(newCustomerStatus.data);

};

export const getAllCustomers = async (req , res) =>{
       const getCustomersStatus =customerService.getCustomerDetails() ; 
    return res.status(getCustomersStatus.statusCode).send(getCustomersStatus.data);

       
};

export const getCustomerDetailsById = async(req , res)=>{
    const customer_id =  req.params.customer_id ; 
    const getCustomerByIdStatus = customerService.getCustomerById(customer_id ) ; 
    return res.status(getCustomerByIdStatus.statusCode).send(getCustomerByIdStatus.data);

    
};


export const addOrderHeaderById = async (req, res) =>{
    const customer_id =  req.params.customer_id ; 
    const orderDetails = req.body ; 
    const addOrderHeaderByIdStatus = customerService.orderHeaderById(orderDetails ,customer_id) ;
    return res.status(addOrderHeaderByIdStatus.statusCode).send(addOrderHeaderByIdStatus.data);

    
}


import {NewCustomer , getCustomerDetails} from "../services/customerService.js" ;


export const addNewCustomer =  async (req, res)  => {
    const cutomerDetails = req.body ; 
    const newCustomerStatus  =  NewCustomer(cutomerDetails) ;
    return res.send(newCustomerStatus) ;
}

export const getAllCustomers = async (req , res) =>{
       const getCustomersStatus =getCustomerDetails() ; 
       return res.send(getCustomersStatus) ; 
}


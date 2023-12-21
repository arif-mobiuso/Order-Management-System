

import * as customerService from "../services/customerService.js" ;
import * as orderService from "../services/orderService.js" ;


export const addNewCustomer =  async (req, res)  => {
    try{
    const cutomerDetails = req.body ; 
    const newCustomerStatus  = await customerService.NewCustomer(cutomerDetails) ;
    return res.status(newCustomerStatus.statusCode).send(newCustomerStatus.data);
     }
     catch(error){
          console.error("Error in addNewCustomer:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};

export const getAllCustomers = async (req , res) =>{
    try{
       const getCustomersStatus =await customerService.getCustomerDetails() ; 
       return res.status(getCustomersStatus.statusCode).send(getCustomersStatus.data);
     }
     catch(error){
          console.error("Error in getAllCustomers:", error);
          return res.status(500).send({ message: "Internal  Server Error " + error.message });
     }
       
};

export const getCustomerDetailsById = async(req , res)=>{
    try{
    const customerId =  req.params.id ; 
    const getCustomerByIdStatus = await customerService.getCustomerById(customerId ) ; 
    return res.status(getCustomerByIdStatus.statusCode).send(getCustomerByIdStatus.data);
     }
     catch(error){
          console.error("Error in getCustomerDetailsById:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};

export const placeOrderById = async (req, res) =>{
     try{

          const customerId =  req.params.id ; 
          const orderDetails = req.body ; 
          const placeOrderStatus = await orderService.placeOrder(orderDetails , customerId) ;
          const orderId = await placeOrderStatus.data.orderId;
          const addItems = await orderService.NewItems(orderDetails , orderId);
          return res.status(placeOrderStatus.statusCode).send({ addOrderItemsStatus : addItems.data , orderStatus: placeOrderStatus.data }) ; 
     }
     catch(error){
          console.log("Error in placeOrderById : " , error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};

export const removeCustomerById = async (req, res) => {
     try {
          const customerId = req.params.id;
          const removeCustomerByIdStatus = await customerService.deleteCustomerById(customerId);
          return res.status(removeCustomerByIdStatus.statusCode).send(removeCustomerByIdStatus.data);
     }
     catch (error) {
          console.error("Error in removeCustomerById:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
}


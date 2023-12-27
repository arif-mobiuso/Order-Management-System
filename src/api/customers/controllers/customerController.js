

import * as customerService from "../services/customerService.js" ;
import * as orderService from "../../orders/services/orderService.js" ;


export const addNewCustomer =  async (req, res)  => {
    try{
    const cutomerDetails = req.body ; 
    const customer  = await customerService.NewCustomer(cutomerDetails) ;
    return res.status(201).send({message : customer.message , customerId : customer.customerId });
     }
     catch(error){
          console.error("Error in addNewCustomer:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};

export const getAllCustomers = async (req , res) =>{
    try{
       const customer =await customerService.getCustomerDetails() ; 
       return res.status(200).send({message : customer.message , result : customer.result});
     }
     catch(error){
          console.error("Error in getAllCustomers:", error);
          return res.status(500).send({ message: "Internal  Server Error " + error.message });
     }
       
};

export const getCustomerDetailsById = async(req , res)=>{
    try{
    const customerId =  req.params.id ; 
    const customer = await customerService.getCustomerById(customerId ) ; 
    console.log(customer.result);
    if(customer.result.length == 0){
     return res.status(200).send({message : "Customer not found !"});
    }
    return res.status(200).send({message : customer.message , result : customer.result});
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
          const customer = await orderService.placeOrder(orderDetails , customerId) ;
          const orderId = await customer.status.orderId;
          const addItems = await orderService.NewItems(orderDetails , orderId);
          return res.status(201).send({ addOrderItemsStatus : addItems.status , orderStatus: {messsage : customer.message , orderId : placeOrderStatus.orderId} }) ; 
     }
     catch(error){
          console.log("Error in placeOrderById : " , error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};

export const removeCustomerById = async (req, res) => {
     try {
          const customerId = req.params.id;
          const customer = await customerService.deleteCustomerById(customerId);
         if(customer.result.affectedRows == 0){
          return removeCustomerById.status(404).send({message : "Customer not found - cannot delete !"})
         }
          return res.status(200).send({message : customer.message  });
     }
     catch (error) {
          console.error("Error in removeCustomerById:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
}


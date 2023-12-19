

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
    const customer_id =  req.params.customer_id ; 
    const getCustomerByIdStatus = await customerService.getCustomerById(customer_id ) ; 
    return res.status(getCustomerByIdStatus.statusCode).send(getCustomerByIdStatus.data);
     }
     catch(error){
          console.error("Error in getCustomerDetailsById:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
    
};

export const placeOrderById = async (req, res) =>{
     try{

          const customer_id =  req.params.customer_id ; 
          const orderDetails = req.body ; 
          const placeOrderStatus = await orderService.placeOrder(orderDetails , customer_id) ;
          const orderId = await placeOrderStatus.data.orderId;
          const addItems = await orderService.NewItems(orderDetails , orderId);
          return res.status(placeOrderStatus.statusCode).send({ addOrderItemsStatus : addItems.data , orderStatus: placeOrderStatus.data }) ; 
     }
     catch(error){
          console.log("Error in placeOrderById : " , error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};



// export const addOrderHeaderById = async (req, res) =>{
//     try{
//     const customer_id =  req.params.customer_id ; 
//     const orderDetails = req.body ; 
//     const addOrderHeaderByIdStatus =await  customerService.orderHeaderById(orderDetails ,customer_id) ;
//     return res.status(addOrderHeaderByIdStatus.statusCode).send(addOrderHeaderByIdStatus.data);
//      }
//      catch(error){
//           console.error("Error in addOrderHeaderById:", error);
//           return res.status(500).send({ message: "Internal Server Error" });
//      }
// };

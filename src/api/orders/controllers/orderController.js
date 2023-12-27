

import *  as orderService from "../services/orderService.js" ;





export const addNewItemsById =  async (req, res)  => {
    try{
    const orderId = req.params.id ; 
    const orderDetails = req.body ; 
    const order  = await orderService.NewItems(orderDetails , orderId ) ;
    return res.status(201).send({message : order.message}) ; 
    }
    catch(error){
         console.error("Error in addNewItemsById:", error);
         return res.status(500).send({ message: "Internal Server Error" });
    }
};



export const getOrderHeaderById = async(req, res) =>{
    try{
        const orderId = req.params.id ;
        const order = await orderService.orderHeaderById(orderId);
        if(order.result.length == 0){
            return res.status(200).send({message : "Header Details not found !"})
        }
        return res.status(200).send({message : order.message , result : order.result});
    }
    catch(error){
        console.log("Error in getOrderHeaderById : " , error );
        return res.status(500).send({ message: "Internal Server Error" });
    }
}


export const getOrderItemsById = async(req, res) =>{
    try{
        const orderId = req.params.id ;
        const order = await orderService.orderItemsById(orderId);
        if(order.result.length == 0){
            return res.status(404).send({message : "Order Items Details not found !"})
        }
        return res.status(200).send({message : order.message , result : order.result});
    }
    catch(error){
        console.log("Error in getOrderItemsById : " , error );
        return res.status(500).send({ message: "Internal Server Error" });
    }
}



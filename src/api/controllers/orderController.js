

import *  as orderService from "../services/orderService.js" ;


export const addNewHeader =  async (req, res)  => {
    try{
    const orderDetails = req.body ; 
    const headerStatus  =  orderService.NewHeader(orderDetails ) ;
    return res.status(headerStatus.statusCode).send(headerStatus.data) ; 
    }
    catch(error){
         console.error("Error in addNewHeader:", error);
         return res.status(500).send({ message: "Internal Server Error" });
    }
};



export const addNewItemsById =  async (req, res)  => {
    try{
    const orderId = req.params.id ; 
    const orderDetails = req.body ; 
    const addItemsStatus  = await orderService.NewItems(orderDetails , orderId ) ;
    return res.status(addItemsStatus.statusCode).send(addItemsStatus.data) ; 
    }
    catch(error){
         console.error("Error in addNewItemsById:", error);
         return res.status(500).send({ message: "Internal Server Error" });
    }
};



export const getOrderHeaderById = async(req, res) =>{
    try{
        const orderId = req.params.id ;
        const getOrderHeaderByIdStatus = await orderService.orderHeaderById(orderId);
        return res.status(getOrderHeaderByIdStatus.statusCode).send(getOrderHeaderByIdStatus.data);
    }
    catch(error){
        console.log("Error in getOrderHeaderById : " , error );
        return res.status(500).send({ message: "Internal Server Error" });
    }
}


export const getOrderItemsById = async(req, res) =>{
    try{
        const orderId = req.params.id ;
        const getOrderItemsByIdStatus = await orderService.orderItemsById(orderId);
        return res.status(getOrderItemsByIdStatus.statusCode).send(getOrderItemsByIdStatus.data);
    }
    catch(error){
        console.log("Error in getOrderItemsById : " , error );
        return res.status(500).send({ message: "Internal Server Error" });
    }
}



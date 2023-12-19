

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
}


export const addNewItemsById =  async (req, res)  => {
    try{
    const order_id = req.params.order_id ; 
    const orderDetails = req.body ; 
    const addItemsStatus  = orderService.NewItems(orderDetails , order_id ) ;
    return res.status(addItemsStatus.statusCode).send(addItemsStatus.data) ; 
    }
    catch(error){
         console.error("Error in addNewItemsById:", error);
         return res.status(500).send({ message: "Internal Server Error" });
    }
}


export const getOrderHeaderById = async(req, res) =>{
    try{
        const order_id = req.params.order_id ;
        const getOrderHeaderByIdStatus = await orderService.orderHeaderById(order_id);
        return res.status(getOrderHeaderByIdStatus.statusCode).send(getOrderHeaderByIdStatus.data);
    }
    catch(error){
        console.log("Error in getOrderHeaderById : " , error );
        return res.status(500).send({ message: "Internal Server Error" });
    }
}

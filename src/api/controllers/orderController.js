

import *  as orderService from "../services/orderService.js" ;


export const addNewHeader =  async (req, res)  => {
    try{
    const orderDetails = req.body ; 
    const headerStatus  =  orderService.NewHeader(orderDetails ) ;
    return res.status(headerStatus.statusCode).send(headerStatus.data) ; 
    }
    catch(err){
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
    catch(err){
         console.error("Error in addNewItemsById:", error);
         return res.status(500).send({ message: "Internal Server Error" });
    }
}


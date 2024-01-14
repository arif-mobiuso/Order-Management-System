

import *  as orderService from "../services/orderService.js" ;


export const addNewHeader =  async (req, res)  => {
    try{
    const orderDetails = req.body ; 
    const headerStatus  =  orderService.NewHeader(orderDetails ) ;
    return res.status(headerStatus.statusCode).send(headerStatus.status) ; 
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
    return res.status(201).send({message : addItemsStatus.message}) ; 
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
        if(getOrderHeaderByIdStatus.result.length == 0){
            return res.status(404).send({message : "Header Details not found !"})
        }
        return res.status(200).send({message : getOrderHeaderByIdStatus.message , result : getOrderHeaderByIdStatus.result});
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
        if(getOrderItemsByIdStatus.result.length == 0){
            return res.status(404).send({message : "Order Items Details not found !"})
        }
        return res.status(200).send({message : getOrderItemsByIdStatus.message , result : getOrderItemsByIdStatus.result});
    }
    catch(error){
        console.log("Error in getOrderItemsById : " , error );
        return res.status(500).send({ message: "Internal Server Error" });
    }
}



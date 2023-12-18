

import *  as orderService from "../services/orderService.js" ;


export const addNewHeader =  async (req, res)  => {
    const orderDetails = req.body ; 
    const headerStatus  =  orderService.NewHeader(orderDetails ) ;
    return res.send(headerStatus) ;
}


export const addNewItems =  async (req, res)  => {
    const order_id = req.params.order_id ; 
    const orderDetails = req.body ; 
    const addItemsStatus  = orderService.NewItems(orderDetails , order_id ) ;
    return res.send(addItemsStatus) ;
}


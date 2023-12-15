

import {NewHeader , NewItems} from "../services/orderService.js" ;


export const addNewHeader =  async (req, res)  => {
    const orderDetails = req.body ; 
    const headerStatus  =  NewHeader(orderDetails) ;
    return res.send(headerStatus) ;
}


export const addNewItems =  async (req, res)  => {
    const orderDetails = req.body ; 
    const addItemsStatus  =  NewItems(orderDetails) ;
    return res.send(addItemsStatus) ;
}


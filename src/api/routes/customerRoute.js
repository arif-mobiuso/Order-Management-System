import express from "express" ;

// import {addNewCustomer , getAllCustomers , getCustomerDetailsById , addOrderHeaderById } from "../controllers/customerController.js" ;
import * as customerController from "../controllers/customerController.js" ;

const router = express.Router() ; 

router.post('/' , customerController.addNewCustomer) ; 
router.get('/' , customerController.getAllCustomers) ; 
router.get('/:customer_id' , customerController.getCustomerDetailsById) ; 
router.post('/:customer_id/orders/headers' ,customerController.addOrderHeaderById ) ;

export default router ; 


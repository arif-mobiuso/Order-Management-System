import express from "express" ;
const router = express.Router() ; 

import * as customerController from "../controllers/customerController.js" ;

// validation imports
import { validation } from "../middlewares/validationMiddleware.js";
import customerSchema from "../validations/customerValidation.js";

// get 
router.get('/' , customerController.getAllCustomers) ; 
router.get('/:customer_id' , customerController.getCustomerDetailsById) ; 

// post
router.post('/'  ,   customerController.addNewCustomer) ; 
router.post('/:customer_id/orders' ,customerController.placeOrderById ) ;
// router.post('/:customer_id/orders/headers' ,customerController.addOrderHeaderById ) ;

export default router ; 


import express from "express" ;
const router = express.Router() ; 

import * as customerController from "../controllers/customerController.js" ;

// validation imports
import { validation } from "../middlewares/validationMiddleware.js";
import customerSchema from "../validations/customerValidation.js";

router.post('/'  ,  validation(customerSchema),  customerController.addNewCustomer) ; 
router.get('/' , customerController.getAllCustomers) ; 
router.get('/:customer_id' , customerController.getCustomerDetailsById) ; 
// router.post('/:customer_id/orders/headers' ,customerController.addOrderHeaderById ) ;
router.post('/:customer_id/orders' ,customerController.placeOrderById ) ;

export default router ; 


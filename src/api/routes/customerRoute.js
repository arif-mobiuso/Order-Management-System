import express from "express" ;
const router = express.Router() ; 

import * as customerController from "../controllers/customerController.js" ;

// validation imports
import { validation } from "../middlewares/validationMiddleware.js";
import customerSchema from "../validations/customerValidation.js";

router.post('/'  ,  customerController.addNewCustomer) ; 
router.get('/' , customerController.getAllCustomers) ; 
router.get('/:customer_id' , customerController.getCustomerDetailsById) ; 
router.post('/:customer_id/orders/headers' ,customerController.addOrderHeaderById ) ;

export default router ; 


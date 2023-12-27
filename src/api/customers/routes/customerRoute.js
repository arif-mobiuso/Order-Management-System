import express from "express" ;
const router = express.Router() ; 

import * as customerController from "../controllers/customerController.js" ;

// validation imports
import { validation } from "../../middlewares/validationMiddleware.js";
import customerSchema from "../../validations/customerValidation.js";
import placeOrderSchema from "../../validations/placeOrderValidation.js";

// get 
router.get('/' , customerController.getAllCustomers) ; 
router.get('/:id' , customerController.getCustomerDetailsById) ; 

// post
router.post('/'  , validation(customerSchema)  ,  customerController.addNewCustomer) ; 
router.post('/:id/orders',validation(placeOrderSchema) ,customerController.placeOrderById ) ;


// delete
router.delete('/:id' ,customerController.removeCustomerById);


export default router ; 


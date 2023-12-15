import express from "express" ;

import {addNewCustomer , getAllCustomers} from "../controllers/customerController.js" ;

const router = express.Router() ; 

router.post('/customers' , addNewCustomer) ; 
router.get('/customers' , getAllCustomers) ; 
export default router ; 


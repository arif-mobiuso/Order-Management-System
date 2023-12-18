import express from "express" ;
import * as orderController  from "../controllers/orderController.js" ;

const router = express.Router() ; 

// creating an order header
import { validation } from "../middlewares/validationMiddleware.js";
import orderHeaderSchema from "../validations/orderHeaderValidation.js"
router.post('/headers', validation(orderHeaderSchema),  orderController.addNewHeader) ; 

// add order_items in a particular order
router.post('/:order_id/items'  , orderController.addNewItemsById) ; 



export default router ; 


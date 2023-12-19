import express from "express" ;
import * as orderController  from "../controllers/orderController.js" ;

const router = express.Router() ; 

// Validation imports
import { validation } from "../middlewares/validationMiddleware.js";
import orderHeaderSchema from "../validations/orderHeaderValidation.js"
import orderItemsSchema from "../validations/orderItemsValidation.js";


// creating an order header
router.post('/headers', validation(orderHeaderSchema),  orderController.addNewHeader) ; 

// add order_items in a particular order
router.post('/:order_id/items' , validation(orderItemsSchema)  , orderController.addNewItemsById) ; 



export default router ; 


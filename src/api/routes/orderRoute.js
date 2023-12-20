import express from "express" ;
import * as orderController  from "../controllers/orderController.js" ;

const router = express.Router() ; 

// Validation imports
import { validation } from "../middlewares/validationMiddleware.js";
// import orderHeaderSchema from "../validations/placeOrderValidation.js"
import orderItemsSchema from "../validations/orderItemsValidation.js";


// creating an order header
router.post('/headers',   orderController.addNewHeader) ; 
// add order_items in a particular order



router.get('/:order_id/headers', orderController.getOrderHeaderById) ;
router.get('/:order_id/items', orderController.getOrderItemsById) ;
router.post('/:order_id/items' , validation(orderItemsSchema) , orderController.addNewItemsById) ; 



export default router ; 


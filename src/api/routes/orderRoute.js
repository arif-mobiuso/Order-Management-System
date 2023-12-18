import express from "express" ;
import * as orderController  from "../controllers/orderController.js" ;

const router = express.Router() ; 

router.post('/headers', orderController.addNewHeader) ; 
// router.post('/items'  , addNewItems) ; 
router.post('/:order_id/items'  , orderController.addNewItemsById) ; 



export default router ; 


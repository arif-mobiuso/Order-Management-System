import express from "express" ;
import {addNewHeader , addNewItems} from "../controllers/orderController.js" ;

const router = express.Router() ; 

// router.post('/headers' ,  abc , addNewHeader) ; 
router.post('/headers', addNewHeader) ; 
router.post('/items'  , addNewItems) ; 
router.post('/:order_id/items'  , addNewItems) ; 



export default router ; 


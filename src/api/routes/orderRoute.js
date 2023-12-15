import express from "express" ;

import {addNewHeader , addNewItems} from "../controllers/orderController.js" ;

const router = express.Router() ; 

router.post('/orders/headers' , addNewHeader) ; 
router.post('/orders/items' , addNewItems) ; 
export default router ; 


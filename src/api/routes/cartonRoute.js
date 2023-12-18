import express  from "express";
import * as cartonController from "../controllers/cartonController.js" ; 


const router = express.Router() ; 

router.get('/' , cartonController.getAllCartons) ; 
router.get('/:carton_id' , cartonController.getCartonDetailsByID) ; 

export default router ; 

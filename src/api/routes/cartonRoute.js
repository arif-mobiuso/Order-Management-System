import express  from "express";
import {getAllCartons, getCartonDetailsByID} from "../controllers/cartonController.js" ; 


const router = express.Router() ; 

router.get('/cartons' , getAllCartons) ; 
router.get('/cartons/:carton_id' , getCartonDetailsByID) ; 

export default router ; 

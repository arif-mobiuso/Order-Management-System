import express  from "express";
import {getAllCartons} from "../controllers/cartonController.js" ; 


const router = express.Router() ; 

router.get('/cartons' , getAllCartons) ; 

export default router ; 

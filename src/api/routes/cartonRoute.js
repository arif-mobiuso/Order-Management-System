import express  from "express";
import * as cartonController from "../controllers/cartonController.js" ; 


const router = express.Router() ; 

router.get('/' , cartonController.getAllCartons) ; 
router.get('/:carton_id' , cartonController.getCartonDetailsByID) ; 
router.post('/' , cartonController.addNewCarton);
router.delete('/:carton_id' , cartonController.removeCartonByID)

export default router ; 

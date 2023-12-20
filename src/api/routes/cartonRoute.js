import express  from "express";
import * as cartonController from "../controllers/cartonController.js" ; 
const router = express.Router() ; 


// importing validations
import { validation } from "../middlewares/validationMiddleware.js";
import cartonSchema from "../validations/cartonValidation.js";

router.get('/' , cartonController.getAllCartons) ; 
router.get('/:carton_id' , cartonController.getCartonDetailsByID) ; 
router.post('/' , validation(cartonSchema) , cartonController.addNewCarton);
router.delete('/:carton_id' , cartonController.removeCartonByID)

export default router ; 

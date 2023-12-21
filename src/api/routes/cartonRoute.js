import express  from "express";
import * as cartonController from "../controllers/cartonController.js" ; 
const router = express.Router() ; 


// importing validations
import { validation } from "../middlewares/validationMiddleware.js";
import cartonSchema from "../validations/cartonValidation.js";

router.get('/' , cartonController.getAllCartons) ; 
router.get('/:id' , cartonController.getCartonDetailsById) ; 
router.post('/' , validation(cartonSchema) , cartonController.addNewCarton);
router.delete('/:id' , cartonController.removeCartonById)

export default router ; 

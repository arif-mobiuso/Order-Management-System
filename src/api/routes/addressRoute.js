import express  from "express";

import * as addressController from "../controllers/addressController.js"

const router = express.Router() ; 

router.get('/' , addressController.getAllAddresses)
router.get('/:address_id' , addressController.getAddressById)



export default router ; 

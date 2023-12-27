import express from "express" ;

const router = express.Router() ; 

import * as userController from "../controllers/userController.js"

import { checkToken } from "../../middlewares/auth/tokenValidation.js";

router.get('/' ,  checkToken , userController.getAllUsers );
router.post('/login' ,    userController.login );


export default router ; 


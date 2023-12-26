import * as userServices from "../services/userServices.js";

import { genSaltSync , hashSync  , compareSync} from "bcrypt";

import jwt from 'jsonwebtoken';




export  const getAllUsers  = async (req, res) => {
    try{
        const getAllUsersStatus  = await userServices.getUsers() ;
        return res.status(getAllUsersStatus.statusCode).send(getAllUsersStatus.status);
    }
    catch(error){
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
} ;



export  const login  = async (req, res) => {
    try{
        const userDetails = req.body;
        const loginStatus = await userServices.getUserByEmail(userDetails.email) ;
        const results = loginStatus.status.result[0] ;
        if(!results){
            return res.json({message : "Invalid email or password"});
        }
        const result = compareSync(userDetails.password , results.password) ;
        if(result){
            results.password = undefined ; 
            const jsontoken =   jwt.sign({result : results} , process.env.SECRET_KEY );
            return res.json({message : "Login successfully " , 
            token : jsontoken});
        }
        
        return res.json({message : "Invalid email or password !"});
        
    }
    catch(error){
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
} ;

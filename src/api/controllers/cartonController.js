import {getCartonDetails} from "../services/cartonService.js";



export const getAllCartons = async (req, res) =>{
     const getCartonsStatus = getCartonDetails();
     return res.send(getCartonsStatus) ; 
};


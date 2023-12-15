import {getCartonDetails , getCartonByID} from "../services/cartonService.js";



export const getAllCartons = async (req, res) =>{
     const getCartonsStatus = getCartonDetails();
     return res.send(getCartonsStatus) ; 
};

export const getCartonDetailsByID = async (req, res) =>{
     const carton_id = req.params.carton_id ; 
     const getCartonStatusByID = getCartonByID(carton_id) ; 
     return res.send(getCartonStatusByID);
}
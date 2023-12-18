import * as cartonService from "../services/cartonService.js";



export const getAllCartons = async (req, res) =>{
     const getCartonsStatus = cartonService.getCartonDetails();
     return res.status(getCartonsStatus.statusCode).send(getCartonsStatus.data);
};

export const getCartonDetailsByID = async (req, res) =>{
     const carton_id = req.params.carton_id ; 
     const getCartonStatusByID = cartonService.getCartonByID(carton_id) ; 
     return res.status(getCartonStatusByID.statusCode).send(getCartonStatusByID.data) ;
}


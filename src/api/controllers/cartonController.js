import * as cartonService from "../services/cartonService.js";



export const getAllCartons = async (req, res) => {
     try {
          const getCartonsStatus = await cartonService.getCartonDetails()
          return res.status(getCartonsStatus.statusCode).send(getCartonsStatus.data);
     }
     catch (error) {
          console.error("Error in getAllCartons:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};

export const getCartonDetailsByID = async (req, res) => {
     try {
          const carton_id = req.params.carton_id;
          const getCartonStatusByID = await cartonService.getCartonByID(carton_id);
          return res.status(getCartonStatusByID.statusCode).send(getCartonStatusByID.data);
     }
     catch (error) {
          console.error("Error in getCartonDetailsByID:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
}


export const removeCartonByID = async (req, res) => {
     try {
          const carton_id = req.params.carton_id;
          const removeCartonByIDStatus = await cartonService.deleteCartonByID(carton_id);
          return res.status(removeCartonByIDStatus.statusCode).send(removeCartonByIDStatus.data);
     }
     catch (error) {
          console.error("Error in removeCartonByID:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
}

export const addNewCarton = async (req, res) => {
     try {
          const cartonDetails = req.body;
          const addNewCartonStatus = await cartonService.newCarton(cartonDetails);
          return res.status(addNewCartonStatus.statusCode).send(addNewCartonStatus.data);
     }
     catch (error) {
          console.error("Error in addNewCarton:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
}





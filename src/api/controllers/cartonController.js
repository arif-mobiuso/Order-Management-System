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

export const getCartonDetailsById = async (req, res) => {
     try {
          const cartonId = req.params.id;
          const getCartonStatusById = await cartonService.getCartonById(cartonId);
          return res.status(getCartonStatusById.statusCode).send(getCartonStatusById.data);
     }
     catch (error) {
          console.error("Error in getCartonDetailsByID:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
}


export const removeCartonById = async (req, res) => {
     try {
          const cartonId = req.params.id;
          const removeCartonByIdStatus = await cartonService.deleteCartonById(cartonId);
          return res.status(removeCartonByIdStatus.statusCode).send(removeCartonByIdStatus.data);
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





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




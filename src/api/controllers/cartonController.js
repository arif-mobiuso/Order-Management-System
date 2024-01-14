import * as cartonService from "../services/cartonService.js";



export const getAllCartons = async (req, res) => {
     try {
          const getCartonsStatus = await cartonService.getCartonDetails()
          return res.status(200).send({message : getCartonsStatus.message , result : getCartonsStatus.result});
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
          if(getCartonStatusById.result.length == 0){
              return res.status(404).send({message : "Carton not found !"}); 
          }
          return res.status(200).send({message : getCartonStatusById.message , result : getCartonStatusById.result} );
     }
     catch (error) {
          console.error("Error in getCartonDetailsByID:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};


export const removeCartonById = async (req, res) => {
     try {
          const cartonId = req.params.id;
          const removeCartonByIdStatus = await cartonService.deleteCartonById(cartonId);
          console.log(removeCartonByIdStatus);
          if(removeCartonByIdStatus.result.affectedRows == 0 ){
               return res.status(404).send({message : "Carton not found - cannot delete"});
          }
         
          return res.status(200).send({message : removeCartonByIdStatus.message });
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
          return res.status(201).send({message : addNewCartonStatus.message});
     }
     catch (error) {
          console.error("Error in addNewCarton:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
}





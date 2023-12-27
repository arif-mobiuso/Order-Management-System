import * as cartonService from "../services/cartonService.js";



export const getAllCartons = async (req, res) => {
     try {
          const carton = await cartonService.getCartonDetails()
          return res.status(200).send({message : carton.message , result : carton.result});
     }
     catch (error) {
          console.error("Error in getAllCartons:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};

export const getCartonDetailsById = async (req, res) => {
     try {
          const cartonId = req.params.id;
          const carton = await cartonService.getCartonById(cartonId);
          if(carton.result.length == 0){
              return res.status(200).send({message : "Carton not found !"}); 
          }
          return res.status(200).send({message : carton.message , result : carton.result} );
     }
     catch (error) {
          console.error("Error in getCartonDetailsByID:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
};


export const removeCartonById = async (req, res) => {
     try {
          const cartonId = req.params.id;
          const carton = await cartonService.deleteCartonById(cartonId);
          console.log(carton);
          if(carton.result.affectedRows == 0 ){
               return res.status(200).send({message : "Carton not found - cannot delete"});
          }
         
          return res.status(200).send({message : carton.message });
     }
     catch (error) {
          console.error("Error in removeCartonByID:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
}

export const addNewCarton = async (req, res) => {
     try {
          const cartonDetails = req.body;
          const carton = await cartonService.newCarton(cartonDetails);
          return res.status(201).send({message : carton.message});
     }
     catch (error) {
          console.error("Error in addNewCarton:", error);
          return res.status(500).send({ message: "Internal Server Error" });
     }
}





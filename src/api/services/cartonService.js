import db from "../../config/databaseConfig.js" ; 

export const getCartonDetails = () =>{
    try{
        const fetchCartonsQuery = `select * from carton` ; 
        db.query(fetchCartonsQuery , function(err , result){
            if(err){
                console.log("Error in fetchCartonsQuery !");
            }
            else{
                 console.log(result); 
            }
        });
        return {
            statusCode: 200, 
            data: { message: "Successfully fetched carton details"},
          };
    }
    catch(err){
        console.error("Error in getCartonDetails:", err);
    }
} ; 




export const getCartonByID = (carton_id) =>{
    try{
        const fetchCartonByIdQuery = `select * from carton where carton_id = ${carton_id}`; 
        db.query(fetchCartonByIdQuery , function(err , result){
            if(err){
                console.log("Error in fetchCartonByIdQuery");
            }
            else{
                 console.log(result); ; 
            }
        });
        return {
            statusCode: 200, 
            data: { message: `Sucessfully fetched carton Details with carton_id ${carton_id} ! ` },
          };
    }
    catch(err){
        console.error("Error in getCartonByID :" , err);
    }
};




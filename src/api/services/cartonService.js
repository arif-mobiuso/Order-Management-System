import db from "../../config/databaseConfig.js" ; 

export const getCartonDetails = () =>{
    try{
        const fetchCartonsQuery = `select * from carton` ; 
        db.query(fetchCartonsQuery , function(err , result){
            if(err){
                console.log("Error in fetchCartonsQuery !");
            }
            else{
                 console.log(result); ; 
            }
        });
    }
    catch(err){
        console.log("Error in QueryListOfCartons !");
    }
    return "Sucessfully fetched carton Details ! " ; 
} ; 


export const getCartonByID = (carton_id) =>{
    try{
        const fetchCartonByIdQuery = `select * from carton where carton_id = ${carton_id}`; 
        db.query(fetchCartonByIdQuery , function(err , result){
            if(err){
                console.log("Error in fetchCartonByIdQuery !");
            }
            else{
                 console.log(result); ; 
            }
        });
    }
    catch(err){
        console.log("Error in getCartonByID !");
    }
    return `Sucessfully fetched carton Details with carton_id ${carton_id} ! ` ; 
};




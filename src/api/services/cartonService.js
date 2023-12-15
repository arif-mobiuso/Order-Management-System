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




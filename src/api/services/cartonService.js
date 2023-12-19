import { resolve } from "path";
import db from "../../config/databaseConfig.js";
import { rejects } from "assert";

// export const getCartonDetails = () =>{
//     try{
//         const fetchCartonsQuery = `select * from carton` ; 
//         db.query(fetchCartonsQuery , function(err , result){
//             if(err){
//                 console.log("Error in fetchCartonsQuery !");
//             }
//             else{
//                  console.log(result); 
//             }
//         });
//         return {
//             statusCode: 200, 
//             data: { message: "Successfully fetched carton details"},
//           };
//     }
//     catch(err){
//         console.error("Error in getCartonDetails:", err);
//     }
// } ; 


export const getCartonDetails = () => {
    return new Promise((resolve, reject) => {
        try {
            const fetchCartonsQuery = `select * from carton`;
            db.query(fetchCartonsQuery, function (error, result) {
                if (error) {
                    console.log("Error in fetchCartonsQuery", error);
                    reject(error);
                } else {
                    const obj = result;
                    console.log(result);
                    resolve({
                        statusCode: 200,
                        data: {
                            message: "Successfully completed fetching carton Details!",
                            result: obj,
                        },
                    });
                }
            });
        } catch (error) {
            console.error("Error in getCartonDetails: ", error);
            reject(error);
        }
    });
};



export const getCartonByID = (carton_id) => {
    return new Promise((resolve, reject) => {
        try {
            const fetchCartonByIdQuery = `select * from carton where carton_id = ${carton_id}`;
            db.query(fetchCartonByIdQuery, function (err, result) {
                if (err) {
                    console.log("Error in fetchCartonByIdQuery", err);
                    reject(err);
                }
                else {
                    const obj = result;
                    console.log(result);
                    resolve({
                        statusCode: 200,
                        data: {
                            message: `Sucessfully fetched carton Details with carton_id ${carton_id} ! `,
                            result: obj,
                        },
                    });
                }
            });
        }
        catch (err) {
            console.error("Error in getCartonByID :", err);
            reject(err) ; 
        }
    });
};

// return new Promise((resolve, reject) => {

// });






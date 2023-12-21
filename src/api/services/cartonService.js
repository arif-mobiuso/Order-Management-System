import db from "../../config/databaseConfig.js";

import {transformCartonDetails} from "../helpers/utilities.js" 

export const getCartonDetails = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const fetchCartonsQuery = `select * from carton`;
            db.query(fetchCartonsQuery, function (error, result) {
                if (error) {
                    console.log("Error in fetchCartonsQuery", error);
                    reject(error);
                } else {
                    console.log(result);
                    resolve({
                        statusCode: 200,
                        status: {
                            message: "Successfully completed fetching carton Details!",
                            result: result.map(transformCartonDetails),
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



export const getCartonById = async(cartonId) => {
    return new Promise(async(resolve, reject) => {
        try {
            const fetchCartonByIdQuery = `select * from carton where carton_id = ${cartonId}`;
            db.query(fetchCartonByIdQuery, function (err, result) {
                if (err) {
                    console.log("Error in fetchCartonByIdQuery", err);
                    reject(err);
                }
                else {
                    console.log(result);
                    if (result.length == 0) {
                        resolve ({statusCode : 404 , status:{message : "Carton not found !"}});
                    }
                    else {
                        resolve({
                            statusCode: 200,
                            status: {
                                message: `Sucessfully fetched carton Details with cartonId ${cartonId} ! `,
                                result: result.map(transformCartonDetails),
                            },
                        });
                    }
                }
            });
        }
        catch (err) {
            console.error("Error in getCartonById :", err);
            reject(err);
        }
    });
};

export const deleteCartonById = (cartonId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const deleteCartonByIdQuery = `delete from carton where cartonId = ${cartonId}`;
            db.query(deleteCartonByIdQuery, async function (err, result) {
                if (err) {
                    console.log("Error in deleteCartonByIdQuery", err);
                    reject(err);
                }
                else {
                        if(result.affectedRows == 0){
                            resolve({
                                statusCode:404 , 
                                status : {message: "Carton not found - cannot delete !"}
                            });
                        }
                        else{
                            resolve({
                                statusCode: 200,
                                status: {
                                    message: `Sucessfully deleted  carton  with cartonId ${cartonId} ! `,
                                },
                            });
                        }
                }
            });
        }
        catch (err) {
            console.error("Error in deleteCartonByID :", err);
            reject(err);
        }
    });
};

export const newCarton = (cartonDetails) =>{
    return new Promise(async(resolve , reject) =>{
        try{
            const newCartonQuery = `insert into carton (cartonId , len , width , height) values (${cartonDetails.cartonId} , ${cartonDetails.length} , ${cartonDetails.width} , ${cartonDetails.height})`;
            db.query(newCartonQuery , async function(error , result){
                if(error){
                    console.log("Error in newCartonQuery : " ,error);
                    reject(error);
                }
                else{
                    console.log(result);
                    resolve({
                        statusCode : 201 , 
                        status : {message : "New carton created" }
                    });
                }
            });
        }   
        catch(error){
            console.log("Error in newCarton : " , error);
            reject(error);
        }
    });
};





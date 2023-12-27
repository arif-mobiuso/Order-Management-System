import db from "../../../config/databaseConfig.js";

import { transformCartonDetails } from "../../helpers/utilities.js"



export const getCartonDetails = () => {
    return new Promise((resolve, reject) => {
        try {
            const fetchCartonsQuery = `select * from carton`;
            db.query(fetchCartonsQuery, function (error, result) {
                if (error) {
                    console.log("Error in fetchCartonsQuery", error);
                    reject(error);
                } else {
                    console.log(result);
                    resolve({
                        message: "Successfully completed fetching carton Details!",
                        result: result.map(transformCartonDetails),
                    });
                }
            });
        } catch (error) {
            console.error("Error in getCartonDetails: ", error);
            reject(error);
        }
    });
};

export const getCartonById = async (cartonId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const fetchCartonByIdQuery = `select * from carton where carton_id = ${cartonId}`;
            db.query(fetchCartonByIdQuery, function (err, result) {
                if (err) {
                    console.log("Error in fetchCartonByIdQuery", err);
                    reject(err);
                }
                else {
                    console.log(result);
                    resolve({
                        message: `Sucessfully fetched carton Details with cartonId ${cartonId} ! `,
                        result: result.map(transformCartonDetails),
                    });
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
            const deleteCartonByIdQuery = `delete from carton where carton_id = ${cartonId}`;
            db.query(deleteCartonByIdQuery, async function (err, result) {
                if (err) {
                    console.log("Error in deleteCartonByIdQuery", err);
                    reject(err);
                }
                else {
                    resolve({
                        message: `Sucessfully deleted  carton  with cartonId ${cartonId} ,  ! `,
                        result : result 
                    });
                }
            });
        }
        catch (error) {
            console.error("Error in deleteCartonByID :", error);
            reject(error);
        }
    });
};

export const newCarton = (cartonDetails) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newCartonQuery = `insert into carton (carton_id , len , width , height) values (${cartonDetails.cartonId} , ${cartonDetails.length} , ${cartonDetails.width} , ${cartonDetails.height})`;
            db.query(newCartonQuery, async function (error, result) {
                if (error) {
                    console.log("Error in newCartonQuery : ", error);
                    reject(error);
                }
                else {
                    console.log(result);
                    resolve({
                        message: "New carton created" 
                    });
                }
            });
        }
        catch (error) {
            console.log("Error in creating newCarton : ", error);
            reject(error);
        }
    });
};





import db from "../../config/databaseConfig.js";


export const newUser = (userDetails) =>{
    return new Promise(async (resolve , reject)=>{
        try{
            const newUserQuery = `insert into users  (name , email , password) values ("${userDetails.name}" , "${userDetails.email}" , "${userDetails.password}")` ;
            db.query(newUserQuery , function(error , result){
                if(error){
                    reject(error); 
                }
                else{
                    resolve({
                        statusCode : 201 , 
                        status : {message : "sucessfully inserted 1 row into users !"}
                    });
                }
            });

        }
        catch(error){
            console.log(error);
            reject(error);
        }
    }) ;

} ;


export const getUsers = () =>{
    return new Promise(async (resolve , reject)=>{
        try{
            const getUsersQuery = `select id , name , email  from users ` ;
            db.query(getUsersQuery , function(error , result){
                if(error){
                    reject(error); 
                }
                else{
                    resolve({
                        statusCode : 200 , 
                        status : {message : "sucessfully  fetched user details !" , result : result}
                    });
                }
            });

        }
        catch(error){
            console.log(error);
            reject(error);
        }
    }) ;
} ;


export const getUserByEmail = (email) =>{
    return new Promise(async (resolve , reject)=>{
        try{
            const getUserByEmailQuery = `select *   from users where email = "${email}"` ;
            db.query(getUserByEmailQuery , function(error , result){
                if(error){
                    reject(error); 
                }
                else{
                    resolve({
                        statusCode : 200 , 
                        status : {message : `sucessfully  fetched user details with email : "${email}" !` , result : result}
                    });
                }
            });

        }
        catch(error){
            console.log(error);
            reject(error);
        }
    }) ;
} ;
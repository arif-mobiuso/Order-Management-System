import express  from "express";
import dotenv from 'dotenv';
dotenv.config();
// importing routes

import cartonRoute from "./api/routes/cartonRoute.js" ; 
import customerRoute from "./api/routes/customerRoute.js" ; 
import orderRoute from "./api/routes/orderRoute.js" ; 
import addressRoute from "./api/routes/addressRoute.js"
import userRoute from "./api/routes/userRoute.js" ;

//  creating express server 
const app = express() ; 
// const PORT = 4242 ;
app.use(express.json()) ; 



export const  baseURL ="/api/v1" ; 
// Routes
app.use(`${baseURL}/cartons`, cartonRoute) ; 
app.use(`${baseURL}/customers`, customerRoute) ; 
app.use(`${baseURL}/orders`, orderRoute) ; 
app.use(`${baseURL}/addresses`, addressRoute) ; 
app.use(`${baseURL}/users`, userRoute) ; 






app.listen(process.env.PORT , ()=>{
    console.log(`server running on port number ${process.env.PORT} .`);
}) ;


import express  from "express";
// importing routes
import cartonRoute from "./api/routes/cartonRoute.js" ; 
import customerRoute from "./api/routes/customerRoute.js" ; 
import orderRoute from "./api/routes/orderRoute.js" ; 

//  creating express server 
const app = express() ; 
const PORT = 4242 ;
export const  baseURL ="/" ; 

app.use(express.json()) ; 

// Routes
app.use(`${baseURL}`, cartonRoute) ; 
app.use(`${baseURL}`, customerRoute) ; 
app.use(`${baseURL}`, orderRoute) ; 



app.listen(PORT , ()=>{
    console.log(`server running on port number ${PORT} .`);
}) ;

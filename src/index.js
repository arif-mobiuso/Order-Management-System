import express  from "express";
// importing routes
import cartonRoute from "./api/routes/cartonRoute.js" ; 
import customerRoute from "./api/routes/customerRoute.js" ; 
import orderRoute from "./api/routes/orderRoute.js" ; 

//  creating express server 
const app = express() ; 
const PORT = 4242 ;

export const  baseURL ="/api/v1" ; 

app.use(express.json()) ; 

// Routes
app.use('/cartons', cartonRoute) ; 
app.use('/customers', customerRoute) ; 
// app.use('/orders', abc ,   orderRoute) ; 
app.use('/orders', orderRoute) ; 



app.listen(PORT , ()=>{
    console.log(`server running on port number ${PORT} .`);
}) ;


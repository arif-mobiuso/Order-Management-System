import yup from "yup" ; 

const placeOrderSchema = yup.object({

    paymentMode        : yup.string().required(),
    productId          : yup.number().required().positive().integer() , 
    productQuantity          : yup.number().required().positive().integer()  

});

export default placeOrderSchema ; 
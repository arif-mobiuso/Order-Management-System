import yup from "yup" ; 

const placeOrderSchema = yup.object({

    // CUSTOMER_ID         : yup.number().required().positive().integer() ,
    orderDate          : yup.date().default(() => new Date()),
    orderStatus        : yup.string().required(),
    paymentMode        : yup.string().required(),
    paymentDate        : yup.date().default(() => new Date()),
    shipmentDate       : yup.date().default(() => new Date()),
    shipperId          : yup.number().required().positive().integer() , 
    productId          : yup.number().required().positive().integer() , 
    productQuantity          : yup.number().required().positive().integer()  

});

export default placeOrderSchema ; 
import yup from "yup" ; 

const orderItemsSchema = yup.object({

    productId         : yup.number().required().positive().integer() ,
    productQuantity        : yup.number().required().positive().integer() 
});

export default orderItemsSchema ; 
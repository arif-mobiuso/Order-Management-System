import yup from "yup" ; 

const orderItemsSchema = yup.object({

    PRODUCT_ID         : yup.number().required().positive().integer() ,
    PRODUCT_QUANTITY        : yup.number().required().positive().integer() 
});

export default orderItemsSchema ; 
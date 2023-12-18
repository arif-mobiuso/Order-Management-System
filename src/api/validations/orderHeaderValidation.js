import yup from "yup" ; 

const orderHeaderSchema = yup.object({

    CUSTOMER_ID         : yup.number().required().positive().integer() ,
    ORDER_DATE          : yup.date().default(() => new Date()),
    ORDER_STATUS        : yup.string().required(),
    PAYMENT_MODE        : yup.string().required(),
    PAYMENT_DATE        : yup.date().default(() => new Date()),
    ORDER_SHIPMENT_DATE : yup.date().default(() => new Date()),
    SHIPPER_ID          : yup.number().required().positive().integer()
});

export default orderHeaderSchema ; 
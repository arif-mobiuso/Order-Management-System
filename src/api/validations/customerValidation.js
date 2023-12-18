import yup from "yup" ; 

const customerSchema = yup.object({

    CUSTOMER_FNAME    : yup.string().required(),
    CUSTOMER_LNAME    : yup.string().required(),
    CUSTOMER_EMAIL    : yup.string().email().required(),
    CUSTOMER_PHONE    : yup.string().matches(/^\d{10}$/, 'Invalid phone number').required(),
    ADDRESS_ID        : yup.number().required().positive().integer() ,
    CUSTOMER_USERNAME : yup.string().required(),
    CUSTOMER_GENDER   : yup.string().required()
});

export default customerSchema ; 
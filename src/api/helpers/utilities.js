
export const transformCartonDetails = (carton) => {
  return {
    id: carton.CARTON_ID,
    length: carton.LEN,
    width: carton.WIDTH,
    height: carton.HEIGHT,
  };
};

export const transformAddressDetails = (address) => {
  return {
    id: address.address_id,
    line1: address.ADDRESS_LINE1,
    line2: address.ADDRESS_LINE2,
    city: address.CITY,
    state: address.STATE,
    pincode: address.PINCODE,
    country: address.COUNTRY,

  };
};

export const transformOrderDetails = (order) => {
  return {

  };
};
export const transformCustomerDetails = (customer) => {
  return {
    customerId: customer.CUSTOMER_ID,
    firstName: customer.CUSTOMER_FNAME,
    lastName: customer.CUSTOMER_LNAME,
    email: customer.CUSTOMER_EMAIL,
    phone: customer.CUSTOMER_PHONE,
    addressId: customer.ADDRESS_ID,
    creationDate: customer.CUSTOMER_CREATION_DATE,
    username: customer.CUSTOMER_USERNAME,
    gender: customer.CUSTOMER_GENDER
  };
};
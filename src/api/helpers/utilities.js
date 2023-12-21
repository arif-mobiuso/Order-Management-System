
export const  transformCartonDetails = (carton) => {
    return {
      id: carton.CARTON_ID,
      length: carton.LEN,
      width: carton.WIDTH,
      height: carton.HEIGHT,
    };
  };

export const  transformAddressDetails =(address) =>{
  return{
      id : address.address_id , 
      line1 : address.ADDRESS_LINE1 , 
      line2 : address.ADDRESS_LINE2 , 
      city : address.CITY , 
      state : address.STATE , 
      pincode : address.PINCODE , 
      country : address.COUNTRY , 

  };
};

export const  transformOrderDetails =(order) =>{
  return{

  };
};
export const  transformCustomerDetails =(customer) =>{
  return{

  };
};
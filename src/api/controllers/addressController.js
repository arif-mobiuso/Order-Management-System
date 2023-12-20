import * as addressService from "../services/addressService.js";

export const getAllAddresses = async (req, res)=>{
    try{
        const getAllAddressesStatus = await addressService.getAddressDetails()
        return res.status(getAllAddressesStatus.statusCode).send(getAllAddressesStatus.data);
    }
    catch(error){
        if(error){
            console.error("Error in getAllAddresses:", error);
            return res.status(500).send({ message: "Internal Server Error" });
        }

    }
};

export const getAddressById = async (req, res)=>{
    try{
        const address_id = req.params.address_id ;
        const getAddressByIdStatus = await addressService.getAddressDetailsById(address_id);
        return res.status(getAddressByIdStatus.statusCode).send(getAddressByIdStatus.data);
    }
    catch(error){
        if(error){
            console.error("Error in getAddressById:", error);
            return res.status(500).send({ message: "Internal Server Error" });
        }

    }
};

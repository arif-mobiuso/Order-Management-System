import * as addressService from "../services/addressService.js";

export const getAllAddresses = async (req, res)=>{
    try{
        const getAllAddressesStatus = await addressService.getAddressDetails() ; 
        console.log(getAllAddressesStatus.message);
        return res.status(200).send({message :getAllAddressesStatus.message , result : getAllAddressesStatus.result });
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
        const addressId = req.params.id ;
        const getAddressByIdStatus = await addressService.getAddressDetailsById(addressId);
        return res.status(200).send({message : getAddressByIdStatus.message , result : getAddressByIdStatus.result});
    }
    catch(error){
        if(error){
            console.error("Error in getAddressById:", error);
            return res.status(500).send({ message: "Internal Server Error" });
        }

    }
};

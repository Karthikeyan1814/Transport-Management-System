import api from "./axiosInstance";

export const setSignIn= async(data)=>{
    try{
        const response = await api.post("",data)
        return response.data
    }catch(error){
        throw error;
    }
}

export const setSignUpData =async(data)=>{
    try{
        const response =await api.post("",data);
        return response.data
    }catch(error){
        throw error;
    }
}
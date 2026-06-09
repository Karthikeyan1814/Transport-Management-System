import api from "./axiosInstance";

export const setSignIn= async(data)=>{
    try{
        const {domain,email,password}=data;
        const response = await api.post(`http://localhost:8080/signinDetails?domain=${domain}&email=${email}&password=${password}`)
        return response.data;
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
import api from "./axiosInstance";
import axios from "axios";

export const setStudent = async(data)=>{
    try{
        const response = api.post("/SaveStudentDetails",data);
        return response.data
    }catch(error){
        console.log("Failed to save student Details",error)
        throw error;
    }
}
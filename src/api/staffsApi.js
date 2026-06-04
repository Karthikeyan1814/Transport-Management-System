import { EnvironmentModuleGraph } from "vite";
import api from "./axiosInstance";
import axios from "axios";

export const setStaffs = async(data)=>{
    try{
        const response= await api.post("/SaveStaffDetail",data);
        return response.data;
    }catch(error){
        throw error;
    }
}
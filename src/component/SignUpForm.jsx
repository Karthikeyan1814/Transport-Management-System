import { useState } from "react";
import "../styles//SignIn.css"
import Step1 from ".//Steps//Step1"
import Step2 from ".//Steps//Step2"
import Step3 from ".//Steps//Step3"
import Step4 from ".//Steps//Step4"
import Step5 from ".//Steps//Step5"
import { setSignUpData } from "../api/logApi";
export default function SignUpForm(handleSignUp){

     const [signup,setSignUp]=useState({
            domain:"student",
            firstname:"",
            lastname:"",
            email:"",
            phone:0,
            dob:"",
            date:"",
            dept:"",
            currentyear:0,
            parentname:"",
            parentmobile:0,
            address:"",
            pincode:"",
            password:"",
            bordingpoint:"",
            organization:""
        })

      
    
        const [step,setStep]=useState(1);
        
        const handleData = (e) => {
            const { name, value } = e.target;
            setSignUp({ ...signup, [name]: value });
        }

        const handleSubmit = async()=>{
            try{
                const result= await setSignUpData(signup);
                alert("Successfully Signed Up ✅")
            }catch(error){
                alert("Somthing Went Wrong , Unsuccessfull of SignUp ❌")
            }
        }


        const next=()=>{
            setStep((prev)=>prev+1)
        }
        const back=()=>{
            setStep((prev)=>prev-1)
        }
        
    return(
        <div>
               <form className="signin-form">
                  {step===1 && <Step1 next={next}
                                        data={signup}
                                        handleData={handleData}/>}
                {step===2 && <Step2 next={next}
                                    back={back}
                                        data={signup}
                                        handleData={handleData}/>}
                 {step===3 && <Step3 next={next}
                                    back={back}
                                        data={signup}
                                        handleData={handleData}/>}
                 {step===4 && <Step4 next={next}
                                    back={back}
                                        data={signup}
                                        handleData={handleData}/>}
                 {step===5 && <Step5 next={next}
                                    back={back}
                                        data={signup}
                                        handleData={handleData}/>}
         
         
                </form>
        </div>
    )
}
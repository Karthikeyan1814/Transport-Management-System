import { useState } from "react";
import "../styles//SignIn.css"
import Step1 from ".//Steps//Step1"
import Step2 from ".//Steps//Step2"
import Step3 from ".//Steps//Step3"
import Step4 from ".//Steps//Step4"
import Step5 from ".//Steps//Step5"
import Step6 from ".//Steps//Step6"
import Step7 from ".//Steps//Step7"
import Step8 from ".//Steps//Step8"
import Step9 from ".//Steps//Step9"
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
            pincode:0,
            password:"",
            bordingpoint:"",
            organization:""
        })

        const [staffdata,setStaffData]=useState({
            domain:"staff",
            firstname:"",
            lastname:"",
            email:"",
            phone:0,
            empid:"",
            orgid:"",
            role:"",
            dept:"",
            transportrole:"",
            password:""

        })

        const [orgdata,setOrgData]=useState({
            orgname:"",
            orgtype:"",
            founder:"",
            incharge:"",
            email:"",
            university:"",
            year:"",
            mobile:0
        })
      
    
        const [step,setStep]=useState(1);
        
        const handleData = (e) => {
            const { name, value } = e.target;
           if (signup.domain==="student"){
            setSignUp({ ...signup, [name]: value });
           }
           if(signup.domain==="staff"){
            setStaffData({...staffdata,[name]:value})
           }
           if(signup.domain ==="organization"){
            setOrgData({...orgdata,[name]:value});
           }
           }

        

        const handleSubmit = async()=>{
           if(signup.domain==="student"){
              try{
                const result= await setSignUpData(signup);
                alert("Successfully Signed Up ✅")
            }catch(error){
                alert("Somthing Went Wrong , Unsuccessfull of SignUp ❌")
            }
           }

           if(signup.domain==="staff"){
              try{
                const result= await setSignUpData(staffdata);
                alert("Successfully Signed Up ✅")
            }catch(error){
                alert("Somthing Went Wrong , Unsuccessfull of SignUp ❌")
            }
        }
            if(signup.domain==="organization"){
              try{
                const result= await setSignUpData(orgdata);
                alert("Successfully Signed Up ✅")
            }catch(error){
                alert("Somthing Went Wrong , Unsuccessfull of SignUp ❌")
            }
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

                {/* Role Selection */}
                  {step===1 && <Step1 next={next}
                                        data={signup}
                                        handleData={handleData}/>}

               {/* Steps for Students */}
                                        
                {(step===2 && signup.domain==="student") && <Step2 next={next}
                                    back={back}
                                        data={signup}
                                        handleData={handleData}/>}
                 {(step===3 && signup.domain==="student")  && <Step3 next={next}
                                    back={back}
                                        data={signup}
                                        handleData={handleData}/>}
                 {(step===4 && signup.domain==="student")  && <Step4 next={next}
                                    back={back}
                                        data={signup}
                                        handleData={handleData}/>}
                 {(step===5 && signup.domain==="student")  && <Step5 next={next}
                                    back={back}
                                        data={signup}
                                        handleData={handleData}
                                        isbording={true}/>}
                
                  {(step===6 && signup.domain==="student")  && <Step6 submit={handleSubmit}
                                    back={back}
                                        data={signup}
                                        handleData={handleData}/>}
         
                    {/* Steps for staffs */}

                    {(step===2 && signup.domain==="staff")  && <Step2 next={next}
                                    back={back}
                                        data={staffdata}
                                        handleData={handleData}/>}

                     {(step===3 && signup.domain==="staff")  && <Step7 next={next}
                                    back={back}
                                        data={staffdata}
                                        handleData={handleData}/>}
                    
                       {(step===4 && signup.domain==="staff")  && <Step5 submit={handleSubmit}
                                    back={back}
                                    next={next}
                                        data={staffdata}
                                        handleData={handleData}
                                        isbording={false}/>}
                    {/* Steps for Organization */}

                    
                     {(step===2 && signup.domain==="organization")  && <Step8 next={next}
                                    back={back}
                                        data={orgdata}
                                        handleData={handleData}/>}

                    {(step===3 && signup.domain==="organization")  && <Step9 next={next}
                                    back={back}
                                        data={orgdata}
                                        handleData={handleData}/>}
                    
                    
                       {(step===4 && signup.domain==="organization")  && <Step5 submit={handleSubmit}
                                    back={back}
                                    next={next}
                                        data={orgdata}
                                        handleData={handleData}
                                        isbording={false}/>}
                
                   
         
                </form>
        </div>
    )
}

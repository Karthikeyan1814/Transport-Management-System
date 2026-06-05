
import { useState } from "react"
export default function Step6({submit,back,data,handleData}){
    

      const[checkbox,setCheckBox]=useState(false);
    const handleCheckBox = (e) => {
  setCheckBox(e.target.checked);
};
    
    return(
        <>
        <label style={{color:"red"}}>Bording Point</label>
        <input type="text" value={data.bordingpoint} name="bordingpoint" onChange={handleData}/>
       <section className="terms">
        <input type="checkbox" id="checkbox" checked={checkbox} onClick={handleCheckBox} required />
        <h4>Read all Terms & condition before click the next </h4>
       </section>
         
      
        <section className="back-next-btn">
            <button onClick={back}>Back</button>
            {checkbox &&  <button onClick={submit} style={{backgroundColor:"red",color:"white"}}>Submit</button>
       }
            </section>
        </>
    )
}
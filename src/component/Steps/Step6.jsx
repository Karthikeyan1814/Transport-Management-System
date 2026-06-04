
export default function Step4({next,back,data,handleData}){
    return(
        <>
        <label>Bording Point</label>
        <input type="text" value={data.bordingpoint} name="bordingpoint" onChange={handleData}/>
       <section>
        <input type="checkbox" id="checkbox" />
        <h4>Read all Terms & condition before click the next </h4>
       </section>
         
      
        <section className="back-next-btn">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </section>
        </>
    )
}
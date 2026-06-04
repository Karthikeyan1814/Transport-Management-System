
export default function Step4({next,back,data,handleData}){
    return(
        <>
        <label>Parent Name</label>
        <input type="text" value={data.parentname} name="parentname" onChange={handleData}/>
           <label>Parent Mobile</label>
        <input type="number" value={data.parentmobile} name="parentmobile" onChange={handleData}/>
           <label>Address</label>
        <input type="text" value={data.address} name="address" onChange={handleData}/>
          <label>Pincode</label>
        <input type="number" value={data.pincode} name="pincode" onChange={handleData}/>
      
        <section className="back-next-btn">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </section>
        </>
    )
}
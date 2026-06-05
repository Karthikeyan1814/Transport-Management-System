
export default function Step8({next,back,data,handleData}){
    return(
        <>
        <label>Organization Name</label>
        <input type="text" value={data.orgname} name="orgname" onChange={handleData}/>
           <label>Organization Type</label>
        <input type="text" value={data.orgtype} name="orgtype" onChange={handleData}/>
           <label>Founder Name</label>
        <input type="email" value={data.founder} name="founder" onChange={handleData}/>
          <label>Incharge Name</label>
        <input type="number" value={data.incharge} name="incharge" onChange={handleData}/>
      
        <section className="back-next-btn">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </section>
        </>
    )
}
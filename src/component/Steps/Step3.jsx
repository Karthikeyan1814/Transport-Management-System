
export default function Step3({next,back,data,handleData}){
    return(
        <>
        <label>Date Of Birth</label>
        <input type="date" value={data.dob} name="dob" onChange={handleData}/>
           <label>Date of Joining</label>
        <input type="date" value={data.date} name="date" onChange={handleData}/>
           <label>Organization</label>
        <input type="email" value={data.organization} name="organization" onChange={handleData}/>
          <label>Current Year</label>
        <input type="number" value={data.currentyear} name="currentyear" onChange={handleData}/>
      
        <section className="back-next-btn">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </section>
        </>
    )
}
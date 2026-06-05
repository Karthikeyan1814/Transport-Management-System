
export default function Step9({next,back,data,handleData}){
    return(
        <>
        <label>Email</label>
        <input type="email" value={data.email} name="email" onChange={handleData}/>
           <label>University</label>
        <input type="text" value={data.university} name="orgtype" onChange={handleData}/>
           <label>Organization Founded On </label>
        <input type="date " value={data.year} name="founder" onChange={handleData}/>
          <label>Contact Numbers </label>
        <input type="number" value={data.mobile} name="mobile" onChange={handleData}/>
      
        <section className="back-next-btn">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </section>
        </>
    )
}
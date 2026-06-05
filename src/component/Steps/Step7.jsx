
export default function Step7({next,back,data,handleData}){
    return(
        <>
        <label>Employment Id</label>
        <input type="text" value={data.empid} name="empid" onChange={handleData}/>
           <label>Organization Id</label>
        <input type="text" value={data.orgid } name="orgid" onChange={handleData}/>
           <label>Department</label>
        <input type="text" value={data.dept} name="dept" onChange={handleData}/>
          <label>Role in Department</label>
        <input type="text" value={data.role} name="role" onChange={handleData}/>
        <label>Role in Transport</label>
        <input type="text" value={data.transportrole} name="transportrole" onChange={handleData}/>
      


        <section className="back-next-btn">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </section>
        </>
    )
}
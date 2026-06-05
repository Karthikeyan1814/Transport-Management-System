
export default function Step2({next,back,data,handleData}){
    return(
        <>
        <label>First Name</label>
        <input type="text" value={data.firstname} name="firstname" onChange={handleData}/>
           <label>Last Name</label>
        <input type="text" value={data.lastname} name="lastname" onChange={handleData}/>
           <label>Email</label>
        <input type="email" value={data.email} name="email" onChange={handleData}/>
          <label>Mobile</label>
        <input type="number" value={data.phone} name="phone" onChange={handleData}/>
      
        <section className="back-next-btn">
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </section>
        </>
    )
}
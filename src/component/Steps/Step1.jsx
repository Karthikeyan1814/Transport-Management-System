
export default function Step1({next,data,handleData}){
    return(
        <>
        <section className="role-selection">
            <h3>Select the Domain , To Register</h3>
            <button type="button" onClick={handleData} className={data.domain==="student"?"active-domain2":""} name="domain" value="student">Student</button>
            <button type="button" onClick={handleData} className={data.domain==="staff"?"active-domain2":""} name="domain" value="staff">Staff</button>
            <button type="button" onClick={handleData} className={data.domain==="organization"?"active-domain2":""} name="domain" value="organization">Organization</button>
        </section>
        <section>
        
            <button onClick={next}>Next</button>
        </section>
        </>
    )
}
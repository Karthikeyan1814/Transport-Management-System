import "../styles//SignIn.css"
export default function SignInLayout({handlePage,currentpage}){
    return(
                <section className="signin-section1">
                    <section>
                        <img src="./Transport-logo.png" alt="" />
                <h1>Route X</h1>
                <p>One Route. Infinite Possibilities.</p>
               {currentpage === "signin" &&  <p>New to this platform , <span onClick={()=>handlePage("signup")} style={{color:"#EAC23F",cursor:"pointer"}}>Sign Up </span> now .</p>}
               {currentpage === "signup" &&   <p>Already Signed Up , Go to <span onClick={()=>handlePage("signin")} style={{color:"#EAC23F",cursor:"pointer"}}>Sign In </span> now .</p> }
                
                    </section>
                    <section>
                        <h6 style={{color:"#EAC23F"}}>Every Ride, Perfectly Planned</h6>
                    </section>
                 </section>
         
    )
}
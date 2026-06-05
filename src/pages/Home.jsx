import Footer from "../component/Footer"
import Nav from "../component/Nav"
import "../styles/Home.css"
export default function Home(){
    return(
        <div className="home-container">
        <Nav type={"home"}/>
        <section className="home-hero">
           
             <div className="home-hero-left">
                <p style={{color:"var(--primary)"}}>Transport Management System</p>
               <h1>Manage. Access. <span style={{color:"var(--primary)"}}>Simplify</span></h1>
               <p>RouteX is complete solution for colleges and organization to manage staff , student ,
                 buses , routes and more all in one place</p>
               <button className="home-btn-layout">Get Started -&gt;</button>
               
             </div>
              <div className="home-hero-right">
                <img id="main-bus" src="./main-bus.png" alt="" />
            </div>
        </section>
        <section className="home-about-box">
            <div className="home-about-card"> 
                <img src="./LogoPack/settings.svg" alt="no image found" />
               <section> <h1>Student Management</h1>
                <p>Automate daily operation</p></section>
            </div>
            <div className="home-about-card"> 
                <img src="./LogoPack/school.svg" alt="no image found" />
               <section> <h1>Real Time Access</h1>
                <p>Get Instant Update</p></section>
            </div>
            <div className="home-about-card"> 
                <img src="./LogoPack/alarm.svg" alt="no image found" />
                <section><h1>Secure & Relible</h1>
                <p>Your data is always safe</p></section>
            </div>
            
            <div className="home-about-card"> 
                <img src="./LogoPack/shield.svg" alt="no image found" />
               <section> <h1>Easy to Use</h1>
                <p>Simple . Efficient . Powerfull</p></section>
            </div>

        </section>
        <section className="home-feature-container">
            <h2 className="feature-title">Everything You Need , All in One Place  </h2>
            <div className="features-box">
                <div className="feature-card">
                    <img src="./LogoPack/group.svg" alt="no image found" />
                    <h1>Staff Management</h1>
                    <p>Add , Management and track details</p>
                    <hr />
                </div>
                <div className="feature-card">
                    <img src="./LogoPack/school.svg" alt="no image found" />
                    <h1>Student Management</h1>
                    <p>Maintain Student records effortlessly</p>
                    <hr />
                </div>
                <div className="feature-card">
                    <img src="./LogoPack/bus.svg" alt="no image found" />
                    <h1>Bus Management</h1>
                    <p>Manage buses , routes and drivers</p>
                    <hr />
                </div>
                <div className="feature-card">
                    <img src="./LogoPack/route.svg" alt="no image found" />
                    <h1>Routes Management</h1>
                    <p>Create and organize efficient routes</p>
                    <hr />
                </div>
                <div className="feature-card">
                    <img src="./LogoPack/approval.svg" alt="no image found" />
                    <h1>Approvals</h1>
                    <p>Handle approvals with ease</p>
                    <hr />
                </div>
                <div className="feature-card">
                    <img src="./LogoPack/file-stack.svg" alt="no image found" />
                    <h1> Report & Insights</h1>
                    <p>Generate reports and make smart decisions</p>
                    <hr />
                </div>
            </div>
        </section> 
        <Footer />
        </div>
    )
}
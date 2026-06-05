import "../styles/Footer.css"
export default function Footer(){
    return(
        <div className="footer-container">
            <section className="footer-section1">
                <img src="./Transport-logo.png" alt="" />
                <h1>Route X</h1>
                <p style={{color:"red"}}>One Route. Infinite Possibilities.</p>
                <p>RouteX is dedicated to simplifying <br />college management with technology</p>
            </section>
            <section className="footer-section2">
                <h1>Quick Links</h1>
                <p>Home</p>
                <p>About Us</p>
                <p>Features</p>
                <p>Contact Us</p>
            </section>
            <section className="footer-section3">
                <h1>Contact Us</h1>
                <section className="footer-contacts"><img src="./LogoPack/phone.svg" alt="" /><p> +91 8825750992</p></section>
                <section className="footer-contacts"><img src="./LogoPack/mail.svg" alt="" /> <p>km3974808@gmail.com</p></section>
                <section className="footer-contacts"><img src="./LogoPack/locate-fixed.svg" alt="" /><p> Jalakandapuram , Salem .</p></section>
                <section className="footer-contacts"><img style={{filter:"invert(1)"}} src="./LogoPack/github.svg" alt="" /> <p>https://github.com/Karthikeyan1814</p></section>
                
                
                
            </section>
            <section className="footer-section4">
                <form action="" className="signin-form">
                    <h1>Stay Connect</h1>
                    <input type="email" name="email" id="" />
                    <button className="home-btn-layout" style={{margin:"0px"}}>Send</button>
                </form>
            </section>
        </div>
    )
}
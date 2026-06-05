import "../styles/Nav.css"
export default function Nav(){
    return(
       <nav className="nav-container">
        <section className="main-logo">
            <img src="./Transport-logo.png" alt="" />
            <h2>Route X</h2>
        </section>
     <ul className="nav-options">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact Us</li>
        </ul>
           <section className="sign-inup-btn">
            <button>SignIn</button>
            <button>SignUp</button>
        </section>
       </nav>
    )
}
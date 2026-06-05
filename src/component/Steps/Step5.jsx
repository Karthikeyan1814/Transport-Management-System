import { useState, useEffect } from "react";

export default function Step5({ next,isbording,submit, back, data, handleData }) {
  const [password, setPassword] = useState({
    password: data.password || "",
    confirmpassword: ""
  });

  const[checkbox,setCheckBox]=useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (password.confirmpassword !== "") {
      setPasswordMatch(
        password.password === password.confirmpassword
      );
    }
  }, [password]);

  const handlePassword = (e) => {
    const { name, value } = e.target;

    setPassword((prev) => ({
      ...prev,
      [name]: value
    }));

    // update parent data also
    if (name === "password") {
      handleData(e);
    }
  };

 const handleCheckBox = (e) => {
  setCheckBox(e.target.checked);
};
  return (
    <>
      {isbording && <> 
      <label>Department</label>
      <input
        type="text"
        value={data.dept}
        name="dept"
        onChange={handleData}
      />
      </>}

      <label>Password</label>
      <input
        type="password"
        value={password.password}
        name="password"
        onChange={handlePassword}
      />

      <label>Confirm Password</label>

      {passwordMatch && password.confirmpassword !== "" && (
        <span style={{ color: "green" }}>
          Password Matched
        </span>
      )}

      {!passwordMatch && password.confirmpassword !== "" && (
        <span style={{ color: "red" }}>
          Incorrect Password
        </span>
      )}

      <input
        type="password"
        value={password.confirmpassword}
        name="confirmpassword"
        onChange={handlePassword}
      />

     {isbording && <section className="back-next-btn">
        <button onClick={back}>Back</button>

        {passwordMatch &&
          password.confirmpassword !== "" && (
            <button onClick={next}>
              Next
            </button>
          )}
      </section>}

      {!isbording &&  <>
       <section className="terms">
        <input type="checkbox"  checked={checkbox} id="checkbox" onClick={handleCheckBox} required />
        <h4>Read all Terms & condition before click the next </h4>
       </section>
       <section className="back-next-btn">
        <button onClick={back}>Back</button>

        {passwordMatch &&
          password.confirmpassword !== "" && checkbox &&(
            <button onClick={submit} style={{backgroundColor:"red",color:"white"}}>
              Submit
            </button>
          )}
      </section>
      </>
       
       }
    </>
  );
}
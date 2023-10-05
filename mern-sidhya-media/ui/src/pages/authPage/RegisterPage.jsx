import "./Auth.scss";
import { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { 
  faCheck,
  faTimes,
  faInfoCircle
 } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterPage = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd, matchPwd]);

  /**Handle register submit */
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      pwd,
    });
  };

  return (
    <section>
      <p ref={errRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive" >{errMsg}</p>
      <form onSubmit={handleRegisterSubmit}>
        <div>
          <label htmlFor="email">Email :
          <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-describedby="uidnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            value={email}
          />

          <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />{" "}
            Invalid email format
        </p>
        </div>

        <div>
          <label htmlFor="password">Password :
          <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
          </label>
          <input
            type="password"
            name="password"
            id="password"
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            required
          />
          <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions":"offscreen"} >
          <FontAwesomeIcon icon={faInfoCircle}/>{" "}
          Must use special character
        </p>
        </div>

        <div>
          <label htmlFor="cpassword">Confirm password :
          <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            value={matchPwd}
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            required
          />
          <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />{" "}
              Must match the first password input field.
          </p>
        </div>

        <button
          disabled={!validEmail || !validPwd || !validMatch }>
          Sign Up
        </button>
        <p>
        Already registered?
        <br />
        <span className="line">
          {/*put router link here*/}
          <NavLink to="/login" className="navlink" >Sign In</NavLink>
        </span>
      </p>
      </form>

      
    </section>
  );
};

export default RegisterPage;

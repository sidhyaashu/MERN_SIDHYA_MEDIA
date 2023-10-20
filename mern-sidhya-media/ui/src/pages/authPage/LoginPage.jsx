import "./Auth.scss"
import { useState,useEffect,useRef} from "react"
import { NavLink,useNavigate,useLocation  } from "react-router-dom"


const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // const from = location.state?.from?.pathname || "/"


  const emailRef = useRef()
  const errRef = useRef()


  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");


  useEffect(()=>{
    if(emailRef.current){
      emailRef.current.focus()
    }
  },[])



  /** Login function */
  const handleLoginSubmit=(e)=>{
    e.preventDefault()
    console.log({
      email,
      pwd
    })

    navigate("/home")
  }


  useEffect(()=>{
    setErrMsg("")
  },[email,pwd])

  return (
    <section>
      <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive">
          {errMsg}
        </p>
        
      <form onSubmit={handleLoginSubmit} >
        <div>
          <label htmlFor="email">Email :</label>
        <input
        type="email"
        name="email"
        id="email" 
        ref={emailRef}
        value={email}
        required
        autoComplete="off"
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>





        <div>
          <label htmlFor="password">Password :</label>
        <input
        type="password"
        name="password"
        id="password" 
        onChange={(e)=>setPwd(e.target.value)}
        value={pwd}
        required
        />
        </div>


        <button  disabled={!email || !pwd} >Sign In</button>
        <p>
          Already registered?
          <br />
          <span className="line">
            {/*put router link here*/}
            <NavLink to="/" className="navlink">Sign In</NavLink>
          </span>
        </p>


      </form>
      
    </section>
  )
}

export default LoginPage

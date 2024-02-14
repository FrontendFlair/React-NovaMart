import "./CSS/Loginsignup.css"

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" placeholder='Your Name' id="" />
          <input type="email" name="" placeholder='Your Email' id="" />
          <input type="password" name="" placeholder='Password' id="" />
        </div>
        <button>Continue</button>
        <div className="loginsignup-login">
          Already have an account? <span>login here</span>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

import React from 'react'
import "./Log.css"
const Log = () => {
  return (
    <div>
<div class="center">
  <h1> Login</h1>
  <form method="post">
    <div class="txt_field">
      <input type="text" required/>
      <label>Username</label>
      <span></span>
    </div>
    <div class="txt_field">
      <input type="password" required/>
      <label>Password</label>
      <span></span>
    </div>

    <div class="pass">Forgot Password?</div>
    <input type="submit" value="Login"/>
    <div class="signup_link">Not a member? <a href="">Signup</a>
    </div>
      </form>
</div>
      
    </div>
  )
}

export default Log

import React from 'react'
import Link from 'next/link'
function Credentials() {
  return (
    <div>
      <div className="popup">
      <div className="close-btn"><Link href="/home">&times;</Link></div>
  <div className="form">
    <h2>Log in</h2>
    <div className="form-element">
      <label>Name</label>
      <input type="text"id="email"placeholder="Enter Name"></input>
    </div>
    <div className="form-element">
      <label >Phone No.</label>
      <input type="tel"id="tel" pattern='[0-9]{10}'></input>
    </div>I
  
    <div className="form-element">
    <button>Sign in</button>
</div>
<div className="form-element">
<a href="#"> Forgot password?</a>
</div>
</div>
      </div>
    </div>
 )
}

export default Credentials
import React from 'react'
import './Register.css'
function Register() {
  return (
    <div className='wrapper'>
        <div className="form-box login">
            <h2>Register</h2>
            <form action="#">
                <div className="input-box">
                    <input type="email" required/>
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input type="password" required/>
                    <label>Password</label>
                </div>

                <button type="submit" className='button reg-butt'>Register</button>

                
            </form>
        </div>
    </div>
  )
}

export default Register

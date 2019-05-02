import React from 'react'

const Login = props =>

<div className="container">
 
 

  <div className="section"></div>
  <div className="section"></div>

    <div className="section"></div>

    <h5 className="indigo-text">Please, login into your account</h5>
    <div className="section"></div>

    <div className="container">
      <div className="z-depth-1 grey lighten-4 row" >

        <form className="col s12" method="post">
          <div className='row'>
            <div className='col s12'>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12'>
              <input className='validate' type='email' name='email' id='email' />
              <label for='email'>Enter your email</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12'>
              <input className='validate' type='password' name='password' id='password' />
              <label for='password'>Enter your password</label>
            </div>
        
                              <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                         
          </div>

          <br />
          <center>
            <div className='row'>
              <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect indigo'>Login</button>
            </div>
          </center>
        </form>
      </div>
    </div>
    <a href="#!">Create account</a>


  <div className="section"></div>
  <div className="section"></div>

  </div>

  export default Login;
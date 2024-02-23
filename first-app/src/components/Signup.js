import React from 'react';
import bgimg from '../assets/Logo.jpg';
import bgVideo from '../assets/background.mp4';


export default function Signup() {

    return (
      <section>
          <video style={{ position: 'fixed', right: 0, bottom: 0, minWidth: '100%', minHeight: '100%', zIndex: 1 }} src={bgVideo} autoPlay loop muted />
          <div className="register">
              <div className="col-1">
                  <h2>
                      Sign Up
                  </h2>
                  <span>Register and join in!</span>
  
                  <form id='form' className='flex flex-col'>
                      <input type="text" placeholder='username'/>
                      <input type="text" placeholder='e-mail'/>
                      <input type='text' placeholder='password'/>
                      <input type='text' placeholder='confirm password'/>
                      <input type='text' placeholder='phone number'/>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.8em' }}>Already have an account?</span>
                        <a href="/" style={{ fontSize: '0.8em' }}>Log In</a>
                      </div>
  
                      <button className='btn'>Sign Up</button>
                  </form>
              </div>
              <div className="col-2">
                  <img src={bgimg}alt=''/>
              </div>
          </div>
      </section>
    )
  }
  

import React from 'react';
import bgimg from '../assets/Logo.jpg';
import bgVideo from '../assets/background.mp4';

export default function Login() {
  return (
    <section>
        <video style={{ position: 'fixed', right: 0, bottom: 0, minWidth: '100%', minHeight: '100%', zIndex: 1 }} src={bgVideo} autoPlay loop muted />
        <div className="register">
            <div className="col-2">
                <img src={bgimg} alt=''/>
            </div>
            <div className="col-1">
                <h2>
                    Log In
                </h2>
                <span>Welcome back!</span>

                <form id='form' className='flex flex-col'>
                    <input type="text" placeholder='username/email'/>
                    <input type='password' placeholder='password'/>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '0.8em' }}>Don't have an account?</span>
                        <a href="Signup/" style={{ fontSize: '0.8em' }}>Sign Up</a>
                    </div>


                    <button className='btn'>Log In</button>
                </form>
            </div>
        </div>
    </section>
  )
}

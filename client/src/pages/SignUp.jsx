import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';
import videoFile from '../assets/background.mp4'

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      setLoading(false);
      setError(data.message);
      return;
    }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  console.log(formData);
  return (
    <div className='bg-[#e9eece] p-3 max-w-lg mx-auto rounded-lg'>
      <video autoPlay loop muted style={{ position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
        <source src={videoFile} type="video/mp4" />
      </video>
      <h1 className='text-[#3C6255] text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='username'
        className='bg-[#EAE7B1] border p-3 rounded-lg' id='username' onChange = {handleChange} />
        <input type='email' placeholder='email'
        className=' bg-[#EAE7B1] border p-3 rounded-lg' id='email' onChange = {handleChange} />
        <input type='password' placeholder='password'
        className='bg-[#EAE7B1] border p-3 rounded-lg' id='password' onChange = {handleChange} />
        <button disabled = {loading} className='bg-[#3C6255] text-[#EAE7B1] rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...':'Sign up'}</button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-[#3C6255]'>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

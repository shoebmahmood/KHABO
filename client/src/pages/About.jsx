import React from 'react'
import videoFile from '../assets/background.mp4'

export default function About() {
  return (
    <div className='bg-[#e9eece] rounded-lg py-20 px-4 max-w-6xl mx-auto'>
      <video autoPlay loop muted style={{ position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
        <source src={videoFile} type="video/mp4" />
      </video>
      <h1 className='text-3xl font-bold mb-4 text-[#61876E]'>About KHABO</h1>
      <p className='mb-4 text-[#3C6255]'>KHABO is a one of its kind food per request service where people can request food and people who are interested in cooking and making money, they will accept and contact them via mail.</p>
      <p className='mb-4 text-[#3C6255]'>
      Our mission is to make bacholor life easier for all by creating a connection between busy people and people who cook
      </p>
      <p className='mb-4 text-[#3C6255]'>Our team has worked tierlessly to get this up and running, we do understand that it was not what was expected but we pivoted to something more managable than our limited expectations.</p>
    </div>
  )
}

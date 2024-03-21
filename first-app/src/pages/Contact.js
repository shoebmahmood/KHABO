import React from "react";
import Food1 from "../assets/Contact.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="App2">
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${Food1})` }}
        ></div>
        <div className="rightSide">
          <h1 style={{ color: '#294B29' }}> Contact Us</h1>

          <form id="contact-form" method="POST">
            <label style={{ color: '#294B29' }} htmlFor="name">Full Name</label>
            <input style={{ color: '#294B29' }} name="name" placeholder="Enter full name..." type="text" />
            <label style={{ color: '#294B29' }} htmlFor="email">Email</label>
            <input style={{ color: '#294B29' }} name="email" placeholder="Enter email..." type="email" />
            <label style={{ color: '#294B29' }} htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button style={{ color: '#DBE7C9' }} type="submit"> Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

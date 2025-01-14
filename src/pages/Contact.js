import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  //const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  //const [responseMessage, setResponseMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();


   

//     try {
//       const response = await fetch("https://script.google.com/macros/s/AKfycbwbpcJr2-v8bnKVJ85R8BpwqUIbQ1wLokmboh3gkWg8S0yJ8jczfanmWRrTJraFqVHk/exec", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (data.success) {
//         setResponseMessage("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setResponseMessage("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       setResponseMessage("Error connecting to the server.");
//     }
//   };

  return (
    <div id="contact" className="contact">
      <h1 className="contact-title">Contact Me</h1>
      {/* <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form> */}
      {/* {responseMessage && <p className="response-message">{responseMessage}</p>} */}
      <div className="contact-info">
      <p>Phone: <a href="tel:+19012181321">+1 901-218-1321</a></p>
        <p>Email: <a href="mailto:yerramallasindhuja902@gmail.com">yerramallasindhuja902@gmail.com</a></p>
        
        <p>LinkedIn: <a href="https://www.linkedin.com/in/sindhuja-yerramalla" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      </div>
    </div>
  );
}

export default Contact;

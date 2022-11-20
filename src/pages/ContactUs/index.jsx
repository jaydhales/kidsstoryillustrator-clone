import "./ContactUs.scss";

import React, { useState } from 'react';
import { Footer, Navbar } from "../../components/molecules";


const Contact = () => {

     const [name, SetName] = useState("")
     const [email, SetEmail] = useState("")
     const [message, SetMessage] = useState("")
     
     const handleSubmit = (e) => {
          e.preventDefault();
     }
     return (
          <div>
<Navbar/>
          <div className="ContactUs">
               <section className="Contact-frame_container">
                    <div className='input-container'>
                         <div className="contact_heading">
                              <p className="Contact-us">Contact Us</p>
                              <p className="contact-paragraph">Get in touch by just dropping a message</p>
                         </div>

                         <div className='form'>
                              <form onSubmit={handleSubmit}>
                                   <label>Full Name
                                        <input type="text" placeholder="Enter Full Name" value={name} onChange={(e) => { SetName(e.target.value) }} name="name" required />
                                   </label>
                                   <label>Email
                                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => { SetEmail(e.target.value) }} name="email" required />
                                   </label>
                                   <label>Drop a message
                                        <textarea type="text" placeholder="Enter your message" value={message} onChange={(e) => { SetMessage(e.target.value) }} name="message" required />
                                   </label>
                                   <button type='submit'>Submit</button>
                              </form>
                         </div>
                    </div>
                    <div className="chatbot_wrapper">
                         <img src="/assets/images/chatbot-2.png" id="chatbot1" alt="Metabnb_icon" />
                         <div className="flex-card">
                              <p>Contact Information</p>
                              <ul>
                                   <a href="mailto:story.ai@gmail.com"><img src="/assets/images/sms.svg" id="message_icon" alt="message" />story.ai@gmail.com</a>
                                   <a href="tel:0l-5478-9231"> <img src="/assets/images/call-calling.svg" id="phone_icon" alt="phone" />0l-5478-9231</a>
                                   <a href="/"><img src="./assets/images/global.svg" id="global_icon" alt="global" />www.story.ai</a>
                              </ul>

                              <p id="social-media-link_paragraph">Social media</p>

                              <div className="social-media-link">
                                   <a href="/" > <img src="/assets/images/instagram.svg" id="instagram_icon" alt="instagram" /></a>
                                   <a href="/" >  <img src="/assets/images/facebook.svg" id="facebook" alt="facebook_icon" /></a>
                                   <a href="/" >  <img src="/assets/images/twitter.svg" id="twitter_icon" alt="twitter" /></a>
                              </div>
                         </div>

                         <img src="/assets/images/chatbot-1.png" id="chatbot2_icon" alt="chatbot_icon" />


                    </div>
               </section>
          </div>
          <Footer/>
          </div>

     );
}

export default Contact;





import React from 'react'
import './Contact.css'
import pic1 from '../../assets/email.svg'
import pic2 from '../../assets/phone.svg'
import pic3 from '../../assets/loc.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5de20d66-7ac7-4fdd-a563-278785af5a9c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
  return (
    <div id="contact" className="main-contact">
        <h1 className='heading'>Get In Touch</h1>
        <div className='contact-content'>
        <div className="left-contact">
            <h1>Let's Talk</h1>
            <p>
            I'm currently avaliable to take on new projects,
             so feel free to send me a message about anything that you want me to work on. 
             You can contact anytime.
            </p>
            <span><img src={pic1}/>ankitmishra.akmishra@gmail.com</span>
            <span><img src={pic2}/>+91 8081765956</span>
            <span><img src={pic3}/>Lucknow, India</span>
        </div>
        <form className="right-contact" onSubmit={onSubmit}>
            
            <label>Your Name</label>
            <input placeholder="Enter Your Name" type="text" />
            <label>Your Email</label>
            <input placeholder="Enter Your Email" type="email" />
            <label>Write Your Message Here</label>
            <textarea name="message" rows="8"></textarea>
            <button type="submit" className="contact-submit">Submit Now</button>
        </form>

    
        </div>

    </div>
  )
}

export default Contact
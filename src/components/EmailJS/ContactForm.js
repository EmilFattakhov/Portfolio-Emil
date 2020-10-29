import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'

export default function ContactForm( ) {    
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', "template_4ulvz3q", e.target, 'user_5sVuwLLfUoMzy5dHxvvuj')
            .then((result) => {
                alert('Message Has Been Sent!')
            }, (error) => {
                console.log(error.text);
            })
    }

    return(
        <div>
            <div>
                <form className='contact-form-container' onSubmit={sendEmail}>
                    <div> <h1> Send me an email </h1> </div>
                    <div className='contact-form'> <input type='text' placeholder='Your Name' name='name' autoComplete='new-password'/> </div>
                    <div className='contact-form'> <input type='email' placeholder='Your email address' name='useremail' autoComplete='new-password'/>  </div>
                    <div className='contact-form'> <input type='text' placeholder='Your message' name='message' autoComplete='new-password'/> </div>
                    <div className='contact-form-sumbit'> <input type='submit' value='Send Message'/> </div>
                </form>
            </div>
        </div>
    )
}
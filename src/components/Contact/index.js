import { useRef } from "react";

import NavBar from "../NavBar";
import LandingPage2 from "../LandingPage2";
import Footer from "../Footer";

import emailjs from "@emailjs/browser";

import "./index.css";

const Contact = () => {
  const form = useRef();

  const onSubmitForm = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_dwpf75f",
        "template_1aqap6z",
        form.current,
        "05bCxCcaLu4vv2jaQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <div>
      <NavBar />
      <LandingPage2 heading="CONTACT" text="Lets have a chat" />
      <div className="contact-bg-container">
        <form className="contact-form" ref={form} onSubmit={onSubmitForm}>
          <label className="contact-form-label">Your Name</label>
          <input
            type="text"
            name="user_name"
            className="contact-form-input"
            required
          />
          <label className="contact-form-label">Email</label>
          <input
            type="email"
            name="user_email"
            className="contact-form-input"
            required
          />
          <label className="contact-form-label">Message</label>
          <textarea
            rows="6"
            placeholder="Type Your Message Here"
            name="message"
            className="contact-form-input"
            required
          />
          <button type="submit" className="contact-btn">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

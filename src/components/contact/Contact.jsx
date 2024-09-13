import React, { useRef, useState } from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2hzjpmc",
        "template_va7xmxs",
        form.current,
        "e58RbXN-MAKaDNMgT"
      )
      .then(
        (result) => {
          setMessage(result);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      {message && (
        <div className="sendMessageDiv">
          <p className="sendMessage" style={{ color: "green" }}>
            *Message Sent
          </p>
        </div>
      )}

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <TfiEmail className="contactOptionIcon" />
            <h4>Email</h4>
            <h5>rahul660singh@gmail.com</h5>
            <a href="mailto:rahul660singh@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contactOption">
            <BsWhatsapp className="contactOptionIcon" />
            <h4>Whatsapp</h4>
            <h5>+919546364555</h5>
            <a href="https://wa.me/+919546364555" target="_blank">
              Send a Message
            </a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

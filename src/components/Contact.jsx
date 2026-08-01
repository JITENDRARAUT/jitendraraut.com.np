import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Let's Connect</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            I'm currently looking for internships, freelance opportunities,
            or full-time MERN Stack developer roles. Feel free to reach out!
          </p>

          <div className="social-links">
            <a
              href="https://github.com/JITENDRARAUT"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jitendra-narayan-raut-6b630b256"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a href="mailto:jitendraraut903@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="btn">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}
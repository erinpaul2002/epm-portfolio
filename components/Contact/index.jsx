'use client';
import React, { useRef, useState } from 'react';
import styles from './Contact.module.css';


const Contact = () => {
  const formRef = useRef(null);
  const [formValid, setFormValid] = useState(false);

  const handleInput = () => {
    if (formRef.current) {
      setFormValid(formRef.current.checkValidity());
    }
  };

  return (
    <article className={"content-card"} data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className={styles['contact-form']}>
        <h3 className={"h3 " + styles['form-title']}>Contact Form</h3>
        <form
          action="https://api.web3forms.com/submit"
          className="form"
          method="POST"
          data-form
          ref={formRef}
        >
          <input type="hidden" name="access_key" value="8a3e8ca8-ebc9-4ba0-9402-1c4663aff83f" />
          <div className={styles['input-wrapper']}>
            <input
              type="text"
              name="name"
              className={styles['form-input']}
              placeholder="Full name"
              required
              data-form-input
              onInput={handleInput}
            />
            <input
              type="email"
              name="email"
              className={styles['form-input']}
              placeholder="Email address"
              required
              data-form-input
              onInput={handleInput}
            />
          </div>
          <textarea
            name="message"
            className={styles['form-input']}
            placeholder="Your Message"
            required
            data-form-input
            onInput={handleInput}
          ></textarea>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <button
            className={styles['form-btn']}
            type="submit"
            data-form-btn
            disabled={!formValid}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;

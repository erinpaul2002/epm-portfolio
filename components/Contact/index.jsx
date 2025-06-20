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
    <article className={styles.contact} data-page="contact">
      <header>
        <h2 className={styles.articleTitle}>Contact</h2>
      </header>
      <section className={styles.contactForm}>
        <h3 className={styles.formTitle}>Contact Form</h3>        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          data-form
          ref={formRef}
        >          <input type="hidden" name="access_key" value="47d7fe62-30c5-4c1c-9bc2-dc7a7c51aa70" />
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="name"
              className={styles.formInput}
              placeholder="Full name"
              required
              data-form-input
              onInput={handleInput}
            />
            <input
              type="email"
              name="email"
              className={styles.formInput}
              placeholder="Email address"
              required
              data-form-input
              onInput={handleInput}
            />
          </div>
          <textarea
            name="message"
            className={styles.formInput}
            placeholder="Your Message"
            required
            data-form-input
            onInput={handleInput}
          ></textarea>
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <button
            className={styles.formBtn}
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

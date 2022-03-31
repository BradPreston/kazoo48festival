import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Register.module.scss';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Register: NextPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [additionalEmails, setAdditionalEmails] = useState('');
  const [teamName, setTeamName] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('Amateur');
  const [phone, setPhone] = useState('');

  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    additionalEmails: additionalEmails,
    teamName: teamName,
    message: message,
    category: category,
    phone: phone
  };

  const setLocalStorage = () => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('formData')) localStorage.removeItem('formData');
      localStorage.setItem('formData', JSON.stringify(data));
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('input');
    const textareas = document.querySelectorAll('textarea');

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('change', function (e: any) {
        if (e.target.value != '')
          inputs[i].style.background = 'rgba(226, 201, 54, .2)';
        else inputs[i].style.background = 'transparent';
      });
    }

    for (let i = 0; i < textareas.length; i++) {
      textareas[i].addEventListener('change', function (e: any) {
        if (e.target.value != '')
          textareas[i].style.background = 'rgba(226, 201, 54, .2)';
        else textareas[i].style.background = 'transparent';
      });
    }
  }, []);

  return (
    <div className={styles.enter}>
      <Link href="/">
        <a className={styles.back}>Go Back</a>
      </Link>
      <h1>Registration</h1>
      <div className={styles.form}>
        <div className={styles.contactInfo}>
          <p>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="First Name"
              value={firstName}
              placeholder="David"
              required={true}
              autoComplete="off"
              onChange={e => {
                const firstName = e.target.value;
                setFirstName(
                  firstName.charAt(0).toUpperCase() + firstName.slice(1)
                );
              }}
            />
          </p>
          <p>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="Last Name"
              value={lastName}
              placeholder="Lynch"
              autoComplete="off"
              required={true}
              onChange={e => {
                const lastName = e.target.value;
                setLastName(
                  lastName.charAt(0).toUpperCase() + lastName.slice(1)
                );
              }}
            />
          </p>
          <p>
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="Phone Number"
              value={phone}
              placeholder="(123) 456-7890"
              autoComplete="off"
              required={true}
              onChange={e => {
                var cleaned = ('' + e.target.value).replace(/\D/g, '');
                var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
                if (match) {
                  setPhone('(' + match[1] + ') ' + match[2] + '-' + match[3]);
                } else {
                  setPhone(e.target.value);
                }
              }}
            />
          </p>
          <p>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="Email"
              value={email}
              placeholder="gordoncole@twinpeaks.com"
              autoComplete="off"
              required={true}
              onChange={e => {
                setEmail(e.target.value.toLowerCase());
              }}
            />
          </p>
          <p>
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="Category"
              placeholder="Select your category"
              value={category}
              onChange={e => {
                setCategory(e.target.value);
              }}
            >
              <option value="Amateur">Amateur</option>
              <option value="Professional">Professional</option>
            </select>
          </p>

          <p>
            <label htmlFor="teamName">Team Name *</label>
            <input
              type="text"
              id="teamName"
              name="Team Name"
              value={teamName}
              placeholder="The Deputy Directors"
              required={true}
              onChange={e => {
                setTeamName(e.target.value);
              }}
            />
          </p>

          <p>
            <label htmlFor="additionalEmails">Additional Emails</label>
            <textarea
              name="Additional Emails"
              id="additionalEmails"
              value={additionalEmails}
              rows={3}
              onChange={e => {
                setAdditionalEmails(e.target.value);
              }}
            ></textarea>
          </p>

          <p>
            <label htmlFor="message">How did you hear about kazoo 48? *</label>
            <textarea
              name="How did you hear about Kazoo 48?"
              id="message"
              value={message}
              required={true}
              rows={3}
              onChange={e => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </p>
        </div>
      </div>

      <form
        className={styles.form}
        id="stripeForm"
        action="/api/checkout_sessions"
        method="POST"
      >
        <section>
          <button
            id="checkout"
            type="submit"
            role="link"
            onClick={setLocalStorage}
            disabled={
              !firstName ||
              !lastName ||
              !email ||
              !teamName ||
              !message ||
              !category ||
              !phone
            }
          >
            Continue To Payment
          </button>
        </section>
        <p>* fields are required</p>
      </form>
    </div>
  );
};

export default Register;

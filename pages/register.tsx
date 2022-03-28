import type { NextPage } from 'next';
import React, { FormEventHandler, useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Enter.module.scss';
import { loadStripe } from '@stripe/stripe-js';
import { NodeNextRequest } from 'next/dist/server/base-http/node';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Register: NextPage = () => {
  const sendEmail = () => {
    fetch('https://enkexikee59wnty.m.pipedream.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        additionalEmails: additionalEmails,
        teamName: teamName,
        message: message,
        category: category,
        phone: phone
      })
    });
  };

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    console.log(query);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
      sendEmail();
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
    // console.log(window.location.href);

    // document.getElementById('checkout')?.addEventListener('click', () => {
    //   // e.preventDefault();
    //   // const stripeForm: any = document.getElementById('stripeForm');
    //   // stripeForm?.submit();
    //   // sendMessage();
    //   fetch('https://enyrt013m3vpwzi.m.pipedream.net', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       firstName: firstName,
    //       lastName: lastName,
    //       email: email,
    //       additionalEmails: additionalEmails,
    //       teamName: teamName,
    //       message: message,
    //       category: category,
    //       phone: phone
    //     })
    //   }).then(() => {
    //     return fetch('/api/checkout_sessions', { method: 'POST' });
    //   });
    // });
  }, []);

  const [firstName, setFirstName] = useState('Brad');
  const [lastName, setLastName] = useState('Preston');
  const [email, setEmail] = useState('bap5393@gmail.com');
  const [additionalEmails, setAdditionalEmails] = useState('');
  const [teamName, setTeamName] = useState('My Test Team');
  const [message, setMessage] = useState('Test');
  const [category, setCategory] = useState('Amateur');
  const [phone, setPhone] = useState('(269) 823-2628');

  const sendMessage = async (e: any) => {
    // sendEmail();
    fetch('/api/checkout_sessions', { method: 'POST' });

    // e.preventDefault();
    // fetch('https://enyrt013m3vpwzi.m.pipedream.net', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     additionalEmails: additionalEmails,
    //     teamName: teamName,
    //     message: message,
    //     category: category,
    //     phone: phone
    //   })
    // });
    // sendEmail(null);
    // });

    // console.log(sendEmail);

    // if (sendEmail) return fetch('/api/checkout_sessions', { method: 'POST' });
  };

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
        {/* <button type="submit">Continue to Payment</button> */}
      </div>

      <form
        className={styles.form2}
        id="stripeForm"
        action="/api/checkout_sessions"
        method="POST"
      >
        <section>
          <button
            id="checkout"
            type="submit"
            role="link"
            // onClick={sendMessage}
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
          <p>* fields are required</p>
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              flex-direction: column;
              width: 100%;
              // height: 112px;
              border-radius: 6px;
              justify-content: space-between;
              // display: none;
            }
            button {
              // height: 36px;
              padding: 10px 0;
              background: #556cd6;
              border-radius: 4px;
              color: white;
              border: 0;
              font-size: 20px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </form>
    </div>
  );
};

export default Register;

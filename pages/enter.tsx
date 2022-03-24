import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Enter.module.scss';

const Enter: NextPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [additionalEmails, setAdditionalEmails] = useState('');
  const [teamName, setTeamName] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('Amateur');
  const [phone, setPhone] = useState('');

  const sendMessage = (e: any) => {
    e.preventDefault();

    fetch('https://enibio4i9kjaywm.m.pipedream.net', {
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

  return (
    <div className={styles.enter}>
      <Link href="/">
        <a className={styles.back}>Go Back</a>
      </Link>
      <h1>Registration</h1>
      <form className={styles.form} onSubmit={sendMessage}>
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
                  console.log(
                    '(' + match[1] + ') ' + match[2] + '-' + match[3]
                  );
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
        <button type="submit">Send</button>
        <p>* fields are required</p>
      </form>
    </div>
  );
};

export default Enter;

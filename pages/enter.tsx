import type { NextPage, GetStaticProps } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Enter.module.scss';
import { useForm, ValidationError } from '@formspree/react';

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      formspree: process.env.FORMSPREE_ID
    }
  };
};

interface Props {
  formspree: string;
}

const Enter: NextPage<Props> = ({ formspree }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [additionalEmails, setAdditionalEmails] = useState('');
  const [teamName, setTeamName] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('Amateur');
  const [phone, setPhone] = useState('');
  const [state, handleSubmit] = useForm(formspree);
  if (state.succeeded) {
    return <p>Good luck in the show!</p>;
  }

  return (
    <div className={styles.enter}>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h1>Please buy a ticket</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.contactInfo}>
          <p>
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="First Name"
              value={firstName}
              placeholder="Jeff"
              required={true}
              onChange={e => {
                const firstName = e.target.value;
                setFirstName(
                  firstName.charAt(0).toUpperCase() + firstName.slice(1)
                );
              }}
            />
            <ValidationError
              prefix="firstName"
              field="firstName"
              errors={state.errors}
            />
          </p>
          <p>
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="Last Name"
              value={lastName}
              placeholder="Gordon"
              required={true}
              onChange={e => {
                const lastName = e.target.value;
                setLastName(
                  lastName.charAt(0).toUpperCase() + lastName.slice(1)
                );
              }}
            />
            <ValidationError
              prefix="lastName"
              field="lastName"
              errors={state.errors}
            />
          </p>
          <p>
            <label htmlFor="phone">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="Phone Number"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
            <ValidationError
              prefix="phone"
              field="phone"
              errors={state.errors}
            />
          </p>
          <p>
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="Email"
              value={email}
              placeholder="jgordon@nascar.com"
              required={true}
              onChange={e => {
                setEmail(e.target.value.toLowerCase());
              }}
            />
            <ValidationError
              prefix="email"
              field="email"
              errors={state.errors}
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
            <ValidationError
              prefix="category"
              field="category"
              errors={state.errors}
            />
          </p>

          <p>
            <label htmlFor="teamName">Team Name *</label>
            <input
              type="text"
              id="teamName"
              name="Team Name"
              value={teamName}
              placeholder="My Awesome Team"
              required={true}
              onChange={e => {
                setTeamName(e.target.value);
              }}
            />
            <ValidationError
              prefix="teamName"
              field="teamName"
              errors={state.errors}
            />
          </p>

          <p>
            <label htmlFor="additionalEmails">Additional Emails</label>
            <textarea
              name="Additional Emails"
              id="additionalEmails"
              value={additionalEmails}
              onChange={e => {
                setAdditionalEmails(e.target.value);
              }}
            ></textarea>
            <ValidationError
              prefix="additionalEmails"
              field="additionalEmails"
              errors={state.errors}
            />
          </p>

          <p>
            <label htmlFor="message">How did you hear about kazoo 48? *</label>
            <textarea
              name="How did you hear about Kazoo 48?"
              id="message"
              value={message}
              required={true}
              onChange={e => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="Message"
              errors={state.errors}
            />
          </p>
        </div>
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
        <p>*fields are required</p>
      </form>
    </div>
  );
};

export default Enter;

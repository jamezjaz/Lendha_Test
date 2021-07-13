import React, { useState } from 'react';
import Data from './Data';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'email') {
      setEmail(event.target.value);
    } else if (event.target.name === 'phone') {
      setPhone(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      setConfirmPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    alert(`You're welcome to Lendha, ${name}!`);
    setIsSubmitted(true);
  };

  return (
    <>
      {
        (isSubmitted === false)
        ?  <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="password">Confirm Password</label>
            <input
              name="confirm-password"
              id="password"
              placeholder="Please, re-type your password"
              value={confirmPassword}
              onChange={handleChange}
            />
            <br />
            <button type="submit">Create Account</button>
          </form>
        : 
          <Data
            name={name}
            email={email}
            phone={phone}
            password={password}
          />
      }
    </>
  );
};

export default Form;
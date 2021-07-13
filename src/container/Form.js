import React, { useState } from 'react';
import Data from './Data';

const Form = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChangeName = (event) => {
    setValues({
      ...values,
      name: event.target.value,
    });
  };

  const handleChangeEmail = (event) => {
    setValues({
      ...values,
      email: event.target.value,
    });
  };

  const handleChangePhone = (event) => {
    setValues({
      ...values,
      phone: event.target.value,
    });
  };

  const handleChangePassword = (event) => {
    setValues({
      ...values,
      password: event.target.value,
    });
  };

  const handleChangeConfPassword = (event) => {
    setValues({
      ...values,
      confirm_password: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    alert(`You're welcome to Lendha, ${values.name}!`);
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
              value={values.name}
              onChange={handleChangeName}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChangeEmail}
            />
            <br />
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={values.phone}
              onChange={handleChangePhone}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChangePassword}
            />
            <br />
            <label htmlFor="password">Confirm Password</label>
            <input
              name="password"
              id="password"
              placeholder="Please, re-type your password"
              value={values.confirm_password}
              onChange={handleChangeConfPassword}
            />
            <br />
            <button type="submit">Create Account</button>
          </form>
        : 
          <Data
            name={values.name}
            email={values.email}
            phone={values.phone}
            password={values.password}
          />
      }
    </>
  );
};

export default Form;
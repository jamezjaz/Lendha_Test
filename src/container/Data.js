import React from 'react';

const Data = (props) => {
  const { name, email, phone, password } = props;

  return (
      <div>
        <h4>Sign Up Details</h4>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Your Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default Data;
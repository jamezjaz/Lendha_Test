import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import HomeStyles from '../styles/HomeStyles.module.css';

const Home = () => (
  <>
    <div>
      <img src={logo} alt='LendhaLogo' />
    </div>
    <h1>Welcome...</h1>
    <h2>This is Lendha Tech!</h2>
    <p>Go ahead and sign up if have not done so</p>
    <button type="button" className={HomeStyles.btn}>
      <Link to="/register" style={{textDecoration: 'none'}}>Click here to sign up</Link>
    </button>
    <button type="button" className={HomeStyles.btn}>
      <Link to="/request" style={{textDecoration: 'none'}}>Click here to fetch all data</Link>
    </button>
  </>
);

export default Home;
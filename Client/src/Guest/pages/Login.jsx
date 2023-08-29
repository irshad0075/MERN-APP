import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../Context/context';
import { Link } from 'react-router-dom';
import '../styles/Login.css'; // Import your custom styles here
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch } = useContext(GlobalContext);

  const loginUser = (e) => {
    e.preventDefault();

    const payload = { email, password };

    axios
<<<<<<< HEAD
      .post(`/api/login`, payload)
=======
      .post('http://localhost:3000/api/login', payload)
>>>>>>> origin/master
      .then((json) => {
        Cookies.set('token', json.data.token);
        dispatch({
          type: 'USER_LOGIN',
          token: json.data.token,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet title="Login" />
      <CommonSection title="LoginTo Your Account" />
      <div className="login-container">
        <div className='image'>
          <img src="https://s.yimg.com/uu/api/res/1.2/orM1KMpndK00_EugdDCtyg--~B/aD0yMjU7dz00MDA7YXBwaWQ9eXRhY2h5b24-/http://magazines.zenfs.com/diminuendo/1.0/original/f159e376a7ad308afca22af609ba4b9946dbc1ce.gif" alt="" />
        </div>
        <form onSubmit={loginUser} className="login-form">
          <div className="form-content">
            <h3>Welcome Back</h3>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                required=""
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-dark login-button">Login</button>
            <p className="signup-link">
              Don't have an account?{' '}
              <Link to={`/registration`}>Sign up here</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

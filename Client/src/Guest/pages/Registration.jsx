import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../Context/context';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/registration.css';


export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { state, dispatch } = useContext(GlobalContext);

  const SignupUser = (e) => {
    e.preventDefault();
    const payload = { email, password, username };

    axios
<<<<<<< HEAD
      .post(`/api/signup`, payload)
=======
      .post('http://localhost:3000/api/signup', payload)
>>>>>>> origin/master
      .then((json) => {
        Cookies.set('token', json.data.token);
        dispatch({
          type: 'USER_SIGNUP',
          token: json.data.token,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet title="Signup" />
      <CommonSection title="Signup" />
      <div className="signup-container">
        <div className="image">
          <img src="https://i.pinimg.com/originals/f9/fd/b0/f9fdb0a5f829ce78544deb865f769a10.gif" alt="" />
        </div>
        <form onSubmit={SignupUser} className="signup-form">
          <div className="form-content">
            <h3>Create an Account</h3>
            <div className="input-container">
              <input
                type="text"
                name="Username"
                placeholder="Name"
                required=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required=""
              />
            </div>
            <div className="input-container">
              <input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required=""
              />
            </div>
            <button className="btn btn-dark signup-button">SIGNUP</button>
            <p className="login-link">
              Already have an account?{' '}
              <Link to={`/login`}>Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

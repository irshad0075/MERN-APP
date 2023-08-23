import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GlobalContext } from "../../Context/context";
import { Link } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/registration.css"; // Import your custom CSS styles

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { state, dispatch } = useContext(GlobalContext);

  const SignupUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = { email, password, username };
  
    try {
      const response = await axios.post('http://localhost:2800/api/signup', payload);
      Cookies.set('token', response.data.token);
      dispatch({
        type: "USER_SIGNUP",
        token: response.data.token
      });
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <Helmet title="Signup">
        <CommonSection title="Create an Account" />
        <div className="signup-box">
          <form onSubmit={SignupUser}>
            <div className="input-box">
              <input
                type="text"
                name="Username"
                placeholder="Name"
                required=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* <label>Username</label> */}
            </div>
            <div className="input-box">
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required=""
              />
              {/* <label>Email</label> */}
            </div>
            <div className="input-box">
              <input
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required=""
              />
              {/* <label>Password</label> */}
            </div>
            <center>
              <button className="signup-btn" disabled={loading}>
                {loading ? "Signing Up..." : "SIGNUP"}
              </button>
              {error && <p className="error-message">{error}</p>}
            </center>
          </form>
          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </Helmet>
    </div>
  );
}

import React, { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { GlobalContext } from "../../Context/context";
import { Link } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/Login.css"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { state, dispatch } = useContext(GlobalContext);

  const loginUser = (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = { email, password };

    axios
      .post("http://localhost:3000/api/login", payload)
      .then((json) => {
        Cookies.set("token", json.data.token);
        dispatch({
          type: "USER_LOGIN",
          token: json.data.token,
        });
      })
      .catch((err) => {
        setError("Invalid email or password");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <Helmet title="Login">
        <CommonSection title="Login to Your Account" />
        <div className="login-box">
          <form onSubmit={loginUser}>
            <div className="user-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <label>Email</label> */}
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                required=""
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <label>Password</label> */}
            </div>
            <center>
              <button className="btn btn-dark" disabled={loading}>
                {loading ? "Logging In..." : "LOGIN"}
              </button>
              {error && <p className="error-message">{error}</p>}
            </center>
          </form>
          <p className="signup-link">
            No account?
            <Link to={`/registration`}> Sign up</Link>
          </p>
        </div>
      </Helmet>
    </div>
  );
}

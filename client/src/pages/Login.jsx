/**
 * Login component renders a login form for user authentication.
 * It includes email and password fields, and handles form submission.
 * On successful login, it navigates to the home page.
 * On failure, it displays an error message.
 *
 */
import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { loginApi } from "../api";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setError(""); 
    setLoading(true); 

    try {
      const data = { username: email, password };
      const response = await loginApi(data); 
      console.log("Login successful:", response);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid credentials. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Meta title={"login"} />
      <BreadCrumb title="Login" />
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className="login-wrapper">
            <div className='row'>
              <div className='col-12'>
                <div className='auth-card'>
                  <h3 className='text-center mb-3'>Login</h3>
                  <form onSubmit={handleSubmit} className='d-flex flex-column gap-30'>
                    <div>
                      <label>Email:</label>
                      <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label>Password:</label>
                      <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Link to='/forgot-password'>Forgot Password?</Link>
                      <div className=' mb-3 d-flex justify-content-center gap-15 align-items-center'>
                        <button type='submit' className='button border-0' disabled={loading}>
                          {loading ? "Logging in..." : "Login"}
                        </button>
                        <Link to='/signup' className='button signup'>Signup</Link>
                      </div>
                      {error && <p style={{ color: "#ff3838" }}>{error}</p>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

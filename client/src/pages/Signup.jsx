import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { signupApi } from "../api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const requestData = {
        firstName: Firstname,
        lastName: Lastname,
        email: Email,
        phone: Mobile,
        password: Password,
      };
      const data = await signupApi(requestData);

      Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: `Welcome, ${data.firstName} ${data.lastName}`,
      });
    } catch (err) {
      setError(err.message || "An error occurred during signup.");
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Create Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up/Create Account</h3>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column gap-30"
                >
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      placeholder="Firstname"
                      value={Firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required="true"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Lastname"
                      value={Lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      required="true"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      required="true"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      placeholder="Mobile Number"
                      value={Mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required="true"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      required="true"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-15 align-items-center">
                      <button
                        type="submit"
                        className="button border-0"
                        disabled={loading}
                      >
                        Signup
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

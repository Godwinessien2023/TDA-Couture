import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { loginApi } from "../api"; // Import the login function

const Login = () => {
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    loginApi()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <>
      <Meta title={"login"} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form
                  action={"/"}
                  method="POST"
                  className="d-flex flex-column gap-30"
                >
                  <div>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button border-0">
                        Login
                      </button>
                      <Link to="/signup" className="button signup">
                        Signup
                      </Link>
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

export default Login;

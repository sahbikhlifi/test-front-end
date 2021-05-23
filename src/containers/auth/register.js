import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../../redux/actions/auth.actions"

const Register = (props) => {
  const history = useHistory()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const fieldChangeHandler = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    });
  };

  const submit = async e => {
    e.preventDefault(); 
    setLoading(true)
    const registred = await props.addUser(user);
    if(registred){
      history.push('/dashboard')
    }
    setLoading(false)
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h3 className="text-center font-weight-light my-4">
                Create Account
              </h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label className="small mb-1" htmlFor="inputFirstName">
                    First Name
                  </label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="firstName"
                    type="text"
                    placeholder="Enter your First Name"
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1" htmlFor="inputLastName">
                    Last Name
                  </label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="lastName"
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1" htmlFor="inputEmail">
                    Email
                  </label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label className="small mb-1" htmlFor="inputPassword">
                    Password
                  </label>
                  <input
                    onChange={fieldChangeHandler}
                    className="form-control py-4"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-group mt-4 mb-0">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    onClick={submit}
                    disabled={loading}
                  >
                    {loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                    Create Account
                  </button>
                  <div>
                    <span>Do you have already a account? </span><Link to="/login"> login now</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addUser: user => dispatch(registerUser(user))
  };
}
export default connect(null, mapDispatchToProps)(Register);
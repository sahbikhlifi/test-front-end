import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../redux/actions/auth.actions";

const Login = ({ login, loginResponse }) => {
    const history = useHistory()
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fieldChangeHandler = ({ target }) => {
        setError(false)
        setUser({
            ...user,
            [target.name]: target.value
        });
    };

    const submit = async event => {
        event.preventDefault();
        setLoading(true);
        if (!user?.email || !user?.password) {
            setError('Remplir les champs')
            setLoading(false)
        } else {
            const loggedIn = await login(user);
            if (loggedIn?.success && loggedIn?.refreshToken) {
                // debugger
                setError(false)
                history.push('/dashboard')
            }
            else if (loggedIn?.status === 401 && loggedIn?.data?.includes('User Not Found')) {
                setError("Email or password invalid")
                setLoading(false)
            } else if (loginResponse?.failure?.status === 500) {
                setError('Erreur de connexion! esseyer plus tard')
                setLoading(false)
            }
        }
    };
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header">
                            <h3 className="text-center font-weight-light my-4">Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
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
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <p className="small text-danger">
                                    {error}
                                </p>
                                <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0 flex-wrap">
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading && (
                                            <span
                                                className="spinner-border spinner-border-sm"
                                                role="status"
                                                aria-hidden="true"
                                            ></span>
                                        )}
                                        Login
                                    </button>
                                    <div>
                                        <span>Not a membre?</span><Link to="/register"> Signup now</Link>
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

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(loginUser(user)),
});

const mapStateToProps = state => ({
    loginResponse: state.authentication
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
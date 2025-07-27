// src/pages/Auth/SignUp.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/theme.min.css'; 
import '../../assets/css/theme.min.css';
import '../../vendors/simplebar/simplebar.min.css';

const SignUp = () => {
    return (
        <main className="main" id="top">
            <div className="container-fluid bg-300 dark__bg-1200">
                <div
                    className="bg-holder bg-auth-card-overlay"
                    style={{ backgroundImage: "url(src/assets/img/bg/37.png)" }}
                ></div>

                <div className="row flex-center position-relative min-vh-100 g-0 py-5">
                    <div className="col-11 col-sm-10 col-xl-8">
                        <div className="card border border-200 auth-card">
                            <div className="card-body pe-md-0 p-0">
                                <div className="row align-items-center gx-0 gy-5">
                                    <div className="col-auto bg-100 dark__bg-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                                        <div
                                            className="bg-holder"
                                            style={{ backgroundImage: "url(src/assets/img/bg/38.png)" }}
                                        ></div>

                                        <div className="position-relative px-4 px-lg-7 pt-7 pb-7 text-center text-md-start pb-lg-7 card-sign-up">
                                            <h3 className="mb-3 text-black fs-1">
                                                Phoenix Authentication
                                            </h3>
                                            <p className="text-700">
                                                Give yourself some hassle-free development process with
                                                the uniqueness of Phoenix!
                                            </p>
                                            <ul className="list-unstyled mb-0 w-max-content w-md-auto mx-auto">
                                                <li className="d-flex align-items-center">
                                                    <span className="uil uil-check-circle text-success me-2"></span>
                                                    <span className="text-700 fw-semi-bold">Fast</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span className="uil uil-check-circle text-success me-2"></span>
                                                    <span className="text-700 fw-semi-bold">Simple</span>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <span className="uil uil-check-circle text-success me-2"></span>
                                                    <span className="text-700 fw-semi-bold">Responsive</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="position-relative z-index--1 mb-6 d-none d-md-block text-center mt-md-15">
                                            <img
                                                className="auth-title-box-img d-dark-none"
                                                src="src\assets\img\spot-illustrations\auth.png"
                                                alt=""
                                            />
                                            <img
                                                className="auth-title-box-img d-light-none"
                                                src="src\assets\img\spot-illustrations\auth-dark.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col mx-auto">
                                        <div className="auth-form-box">
                                            <div className="text-center mb-7">
                                                <Link
                                                    className="d-flex flex-center text-decoration-none mb-4"
                                                    to="/"
                                                >
                                                    <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                                                        <img
                                                            src="src\assets\img\icons\logo.png"
                                                            alt="phoenix"
                                                            width="58"
                                                        />
                                                    </div>
                                                </Link>
                                                <h3 className="text-1000">Sign Up</h3>
                                                <p className="text-700">Create your account today</p>
                                            </div>
                                            <button className="btn btn-phoenix-secondary w-100 mb-3">
                                                <span className="fab fa-google text-danger me-2 fs--1"></span>
                                                Sign up with Google
                                            </button>
                                            <button className="btn btn-phoenix-secondary w-100">
                                                <span className="fab fa-facebook text-primary me-2 fs--1"></span>
                                                Sign up with Facebook
                                            </button>
                                            <div className="position-relative mt-4">
                                                <hr className="bg-200" />
                                                <div className="divider-content-center bg-white">
                                                    or use email
                                                </div>
                                            </div>
                                            <form>
                                                <div className="mb-3 text-start">
                                                    <label className="form-label" htmlFor="name">
                                                        Name
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                                <div className="mb-3 text-start">
                                                    <label className="form-label" htmlFor="email">
                                                        Email address
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="email"
                                                        type="email"
                                                        placeholder="name@example.com"
                                                    />
                                                </div>
                                                <div className="row g-3 mb-3">
                                                    <div className="col-xl-6">
                                                        <label className="form-label" htmlFor="password">
                                                            Password
                                                        </label>
                                                        <input
                                                            className="form-control form-icon-input"
                                                            id="password"
                                                            type="password"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <label
                                                            className="form-label"
                                                            htmlFor="confirmPassword"
                                                        >
                                                            Confirm Password
                                                        </label>
                                                        <input
                                                            className="form-control form-icon-input"
                                                            id="confirmPassword"
                                                            type="password"
                                                            placeholder="Confirm Password"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-check mb-3">
                                                    <input
                                                        className="form-check-input"
                                                        id="termsService"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        className="form-label fs--1 text-none"
                                                        htmlFor="termsService"
                                                    >
                                                        I accept the <a href="#!">terms</a> and{" "}
                                                        <a href="#!">privacy policy</a>
                                                    </label>
                                                </div>
                                                <button className="btn btn-primary w-100 mb-3">
                                                    Sign up
                                                </button>
                                                <div className="text-center">
                                                    <Link className="fs--1 fw-bold" to="/login">
                                                        Sign in to an existing account
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp;

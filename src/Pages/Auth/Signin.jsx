import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormInput from "../../Components/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRedux } from "../../hooks/useRedux";
import { loginUser } from "../../redux/auth/login/actions";
import { createSelector } from "reselect";

const Signin = () => {
  const [isChecked, setIsChecked] = useState(true);

  const resolver = yupResolver(
    yup.object().shape({
      email: yup.string().required("Please Enter E-mail."),
      password: yup.string().required("Please Enter Password."),
    })
  );

  const defaultValues = {
    // email: "company.mohseenpasha111@gmail.com"
    // Password: "company123"
    email: "owner.mohseenpasha111@gmail.com",
    password: "admin123",
  };

  const methods = useForm({ defaultValues, resolver });

  const {
    handleSubmit, // add this on form submission  <Form onSubmit={handleSubmit(onSubmitForm)} />
    register, // on each input field use register to register the input and change input into formInput
    // register={register}
    control, // use control={control} on each form input field
    formState: { errors }, // on each fotm input errors={errors}
  } = methods;

  const { dispatch, useAppSelector } = useRedux();

  
  const userData = createSelector(
    (state) => state.Login,
    (state) => ({
      isUserLogin: state.isUserLogin,
      error: state.error,
      loginLoading: state.loading,
      isUserLogout: state.isUserLogout,
      user: state.user,

    })
  );
  // Inside your component
  const { isUserLogin, error, loginLoading, isUserLogout, user } = useAppSelector(userData);
  
  const navigate = useNavigate();
  const location = useLocation();
  const [redirectUrl, setRedirectUrl] = useState("/");
  useEffect(() => {
    console.log("isUserLogin:", isUserLogin);
    
    const url =
      location.state && location.state.from
        ? location.state.from.pathname
        : "/";

    setRedirectUrl(url);
  }, [location]);

  useEffect(() => {
    if (isUserLogin) {
      navigate("/");
    }
  }, [isUserLogin, user, navigate]);



  const onSubmitForm = (data) => {
    dispatch(loginUser(data));
    console.log("Form submitted with data:", data);
  };


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
              <div className="card-body pe-md-0">
                <div className="row align-items-center gx-0 gy-7">
                  <div className="col-auto bg-100 dark__bg-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                    <div
                      className="bg-holder"
                      style={{
                        backgroundImage: "url(src/assets/img/bg/38.png)",
                      }}
                    ></div>
                    <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 pb-md-7">
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
                          <span className="text-700 fw-semi-bold">
                            Responsive
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="position-relative z-index--1 mb-6 d-none d-md-block text-center mt-md-15">
                      <img
                        className="auth-title-box-img d-dark-none"
                        src="src/assets/img/spot-illustrations/auth.png"
                        alt=""
                      />
                      <img
                        className="auth-title-box-img d-light-none"
                        src="src/assets/img/spot-illustrations/auth-dark.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col mx-auto">
                    <div className="auth-form-box">
                      <form
                        onSubmit={handleSubmit(onSubmitForm)}
                        className="position-relative"
                      >
                        <div className="text-center mb-7">
                          <a
                            className="d-flex flex-center text-decoration-none mb-4"
                            href="index.html"
                          >
                            <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                              <img
                                src="src/assets/img/icons/logo.png"
                                alt="phoenix"
                                width="58"
                              />
                            </div>
                          </a>
                          <h3 className="text-1000">Sign In</h3>
                          <p className="text-700">Get access to your account</p>
                        </div>
                        <button className="btn btn-phoenix-secondary w-100 mb-3">
                          <span className="fab fa-google text-danger me-2 fs--1"></span>
                          Sign in with google
                        </button>
                        <button className="btn btn-phoenix-secondary w-100">
                          <span className="fab fa-facebook text-primary me-2 fs--1"></span>
                          Sign in with facebook
                        </button>
                        <div className="position-relative">
                          <hr className="bg-200 mt-5 mb-4" />
                          <div className="divider-content-center bg-white">
                            or use email
                          </div>
                        </div>
                        <div className="mb-3 text-start">
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label>
                          <div className="form-icon-container">
                            <FormInput
                              id="email"
                              type="email"
                              name="email"
                              register={register}
                              errors={errors}
                              control={control}
                              placeholder="name@example.com"
                              className="form-control form-icon-input"
                            />
                            <span className="fas fa-user text-900 fs--1 form-icon"></span>
                          </div>
                        </div>

                        <div className="mb-3 text-start">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <div className="form-icon-container">
                            <FormInput
                              id="password"
                              type="password"
                              name="password"
                              register={register}
                              errors={errors}
                              control={control}
                              className="form-control form-icon-input"
                              placeholder="Password"
                            />
                            <span className="fas fa-key text-900 fs--1 form-icon"></span>
                          </div>
                        </div>

                        <div className="row flex-between-center mb-7">
                          <div className="col-auto">
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                id="basic-checkbox"
                                type="checkbox"
                                checked="checked"
                                onChange={(e) => setIsChecked(e.target.checked)}
                              />
                              <label
                                className="form-check-label mb-0"
                                htmlFor="basic-checkbox"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-auto">
                            <a
                              className="fs--1 fw-semi-bold"
                              href="forgotPassword.html"
                            >
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <button className="btn btn-primary w-100 mb-3">
                          Sign In
                        </button>
                        <div className="text-center">
                          <a className="fs--1 fw-bold" href="signUp.html">
                            Create an account
                          </a>
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

export default Signin;

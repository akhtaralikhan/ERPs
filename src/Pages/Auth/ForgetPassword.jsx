import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import FormInput from "../../Components/FormInput";


const ForgetPassword = () => {
  const resolver = yupResolver(
    yup.object().shape({
      email: yup.string().required("Please Enter E-mail."),
    })
  );

  const defaultValues = {
    email: "akhtarali123@gmail.com",
  };

  const methods = useForm({ defaultValues, resolver });

  const {
    handleSubmit, // add this on form submission  <Form onSubmit={handleSubmit(onSubmitForm)} />
    register, // on each input field use register to register the input and change input into formInput
    // register={register}
    control, // use control={control} on each form input field
    formState: { errors }, // on each form input errors={errors}
  } = methods;



  const onSubmitForm = () => {
    console.log("Form submitted with data:");
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
                    <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 card-sign-up">
                      <h3 className="mb-3 text-black fs-1">
                        Phoenix Authentication
                      </h3>
                      <p className="text-700">
                        Say Goodbye to boring and lengthy paper work hit the signin button and get started with ERP system.
                      </p>
                      <ul className="list-unstyled mb-0 w-max-content w-md-auto mx-auto">
                        <li className="d-flex align-items-center">
                          <span className="uil uil-check-circle text-success me-2"></span>
                          <span className="text-700 fw-semi-bold">Fast</span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="uil uil-check-circle text-success me-2"></span>
                          <span className="text-700 fw-semi-bold">
                            Simple
                          </span>
                        </li>
                        <li className="d-flex align-items-center">
                          <span className="uil uil-check-circle text-success me-2"></span>
                          <span className="text-700 fw-semi-bold">
                            Scalable
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="position-relative z-index--1 mb-6 d-none d-md-block text-center mt-md-5">
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
                      <div className="text-center">
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
                        <h4 className="text-1000">Forgot your password?</h4>
                        <p className="text-700 mb-5">
                          Enter your email below and we will{" "}
                          <br className="d-md-none" />
                          send you <br className="d-none d-xxl-block" />a reset
                          link
                        </p>
                        <form
                          onSubmit={handleSubmit(onSubmitForm)}
                          className="d-flex align-items-center mb-5">
                          <FormInput
                            id="email"
                            type="email"
                            name="email"
                            register={register}
                            errors={errors}
                            control={control}
                            placeholder="name@example.com"
                            className="form-control flex-1"
                          />
                          <button className="btn btn-primary ms-2">
                            Send
                            <span className="fas fa-chevron-right ms-2"></span>
                          </button>
                        </form>
                        <a className="fs--1 fw-bold" href="#!">
                          Still having problems?
                        </a>
                      </div>
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

export default ForgetPassword;

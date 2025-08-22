import styles from './SignIn.module.css'
import React from 'react';
import {Link} from 'react-router-dom';
import FormInput from '../../../Components/FormInput/FormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  
  const resolver = yupResolver(
    yup.object().shape({
      email:yup.string().required("Please enter E-mail"),
      password:yup.string().required("Please enter Password"),
      fullname:yup.string().required("Please enter your full name"),
      confirmPassword:yup.string()
      .oneOf([yup.ref("password")],"password don't match")
      .required("This field is required."),
    })
  );
  
   const defaultValues = {
    email: "owner.mohseenpasha111@gmail.com",
    password: "admin123",
  }

  const methods = useForm({defaultValues,resolver});
  const {register,handleSubmit,formState:{errors},control} = methods;

  const onSubmitForm = (data) => {
  console(data.email);
  console(data.password);
  }
  return (
    <div className={styles.containerFluid}>
      <div className={styles.bgHolder}
       style={{backgroundImage:'url(src/assets/img/bg/1.png'}}>
      </div>
      <div className={styles.boxContainer}>
        <div className="col-11 col-sm-10 col-xl-8 col-md-8">
          <div className={styles.card}>
            <div className={styles.bothDiv}>
              <div className={`${styles.firstCard} col`}>
                <div className={styles.bgImage}
                 style={{background:'url(src/assets/img/bg/2.png)'}}>
                  <div className={styles.upperCard}>
                    <h3>Business ERP</h3>
                    <p>Give yourself some hassle-free development process with the uniqueness of Phoenix!</p>
                    <ul >
                      <li>
                        <span className='text-success me-2'>
                         <i className="bi bi-check-circle fs-6"></i>
                        </span>
                         <span>Fast</span>
                      </li>
                      <li>
                        <span className='text-success me-2'>
                         <i className="bi bi-check-circle fs-6"></i>
                        </span>
                         <span>Simple</span>
                      </li>
                      <li>
                        <span className='text-success me-2'>
                         <i className="bi bi-check-circle fs-6"></i>
                        </span>
                         <span>Responsive</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.lowerCard}>
                    <img src="src/assets/img/bg/auth-dark.png" alt="auth" />
                  </div>
                </div>
              </div>
              <div className="col mx-auto">
                <div className={styles.secondCard}>
                  <div className={styles.logoContainer}>
                    <Link to="/" >
                     <img src="src/assets/img/bg/logo.png" alt="logo" width="58" />
                    </Link>
                     <h3>Sign Up</h3>
                     <p>Create your account today</p>
                  </div>
                  <button className={styles.button}>
                   <span className="fab fa-google text-danger me-2 fs--1"></span>
                    Sign in with Google
                  </button>
                  <button className={styles.button}>
                   <span className="fab fa-facebook text-primary me-2 fs--1"></span>
                     Sign in with Facebook
                  </button>
                  <div className={styles.email}>
                    <hr />
                    <div>Or use email</div>
                  </div>
                   <form
                          onSubmit={handleSubmit(onSubmitForm)}>
                          {/* <div className="mb-3 text-start">
                            <FormInput
                              label="Name"
                              id="name"
                              type="text"
                              name="fullname"
                              register={register}
                              errors={errors}
                              control={control}
                              labelClassName="form-label"
                              placeholder="Name"
                              className="form-control"
                            />
                          </div> */}
                          <div className="mb-3 text-start">
                            <FormInput
                              id="email"
                              label="Email"
                              type="Email"
                              name="email"
                              register={register}
                              errors={errors}
                              control={control}
                              labelClassName="form-label"
                              placeholder="name@example.com"
                              className="form-control"
                            />
                          </div>
                          <div className="row g-3 mb-3">
                            <div className="col-xl-12">
                              <label className="form-label" htmlFor="password">
                                Password
                              </label>
                              <FormInput
                                className="form-control form-icon-input"
                                type="password"
                                name="password"
                                register={register}
                                errors={errors}
                                control={control}
                                labelClassName="form-label"
                                placeholder=""
                                withoutLabel={true}
                                hidePasswordButton={true}
                                id="password"
                              />
                            </div>
                            {/* <div className="col-xl-6">
                              <label
                                className="form-label"
                                htmlFor="confirmPassword"
                              >
                                Confirm Password
                              </label>
                              <FormInput
                                type="password"
                                name="confirmPassword"
                                register={register}
                                errors={errors}
                                control={control}
                                labelClassName="form-label"
                                withoutLabel={true}
                                hidePasswordButton={false}
                                className="form-control form-icon-input"
                                id="confirmPassword"
                                placeholder=""
                              />
                            </div> */}
                          </div>
                          <div className="form-check mb-3 p-0">
                             <div className="row flex-between-center flex-between-center mb-5">
                            <div className="col">
                              <div className="form-check mb-0">
                                <input type="checkbox" className="form-check-input"  />
                                <label htmlFor="basic-checkbox" className="form-check-label">Remember me</label>
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="/ForgetPassword" className="fs--1 fw-semibold text-decoration-none">Forget Password?</a>
                            </div>
                          </div>
                          </div>
                          <button className="btn btn-primary w-100 mb-3">
                            Sign up
                          </button>
                          <div className="text-center">
                            <Link className="fs--1 fw-bold textNone" to="/signUp">
                              Create an account
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
  )
}

export default SignIn

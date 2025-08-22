import styles from './ForgetPassword.module.css'
import React from 'react';
import {Link} from 'react-router-dom';
import FormInput from '../../../Components/FormInput/FormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const ForgetPassword = () => {
  
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
                    <ul>
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
                     <h3 className='fs-5'>Forgot your password?</h3>
                     <p>Enter your email below and we will send you a reset link</p>
                  </div>
      
                   <form onSubmit={handleSubmit(onSubmitForm)} >
                          
                          <div className="mb-3 text-start d-flex align-items-center justify-content-between">
                            <FormInput
                              id="email"
                              type="Email"
                              name="email"
                              register={register}
                              errors={errors}
                              control={control}
                              labelClassName="form-label"
                              placeholder="name@example.com"
                              className="form-control"
                            />
                            <button className='btn  btn-primary d-flex align-items-center ms-2'>
                              Send 
                             <span className="fas fa-chevron-right ms-2"></span>
                            </button>
                          </div>
                   
                         
                          <div className="text-center">
                            <Link className="fs--1 fw-bold textNone" to="/login">
                              Still having problems?
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

export default ForgetPassword

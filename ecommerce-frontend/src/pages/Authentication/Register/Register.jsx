import React, { useEffect, useState } from 'react';
import './Register.css';
import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../../../Provider/Features/Auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../Provider/Features/Auth/authSlice';
const Register = () => {
  const navigate=useNavigate()
  const { user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);
  console.log(message)
  useEffect(() => {
    console.log(isSuccess,user)
    if (isSuccess && user) {
      navigate("/");
    } 
  }, [isSuccess,user]);
  const dispatch=useDispatch()
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('password', password);
    dispatch(register(formData))
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h2 className="register-title">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              className={`${message.name&&'is-invalid'} `}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {isError&&<span className='text-danger invalid-feedback'>{message.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              className={`${message.email&&'is-invalid'} `}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {isError&&<span className='text-danger invalid-feedback'>{message.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              className={`${message.password&&'is-invalid'} `}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isError&&<span className='invalid-feedback'>{message.password}</span>}
          </div>
          <button type="submit" className="btn-register">Register</button>
        </form>
        {/* <div className="options">
          <a href="/" className="forgot-password">Forgot Password?</a>
          <span className="divider">|</span>
          <a href="/" className="register-link">Register</a>
        </div> */}
      </div>
    </div>
  );
};

export default Register;

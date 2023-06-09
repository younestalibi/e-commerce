import React, { useEffect, useState } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../Provider/Features/Auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate()
  const { user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(isSuccess,user)
    if (isSuccess && user) {
      navigate("/");
    } 
  }, [isSuccess,user]);
  const dispatch=useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    dispatch(login(formData))
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="btn-login">Login</button>
        </form>
        <div className="options">
          {/* <a href="/" className="forgot-password">Forgot Password?</a> */}
          <span className="divider">|</span>
          <Link to="/register" className="register-link">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

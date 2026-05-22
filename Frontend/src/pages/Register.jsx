import React, { useState } from 'react';

import API from '../services/api';

import {
  useNavigate,
  Link,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import BackButton from '../components/BackButton';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      password: '',
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        '/auth/register',
        formData
      );

      alert('Registration Successful');

      navigate('/login');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            background: '#1e293b',
            padding: '40px',
            borderRadius: '20px',
            width: '420px',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              marginBottom: '10px',
            }}
          >
            Create Account
          </h1>

          <p
            style={{
              textAlign: 'center',
              color: '#94a3b8',
              marginBottom: '30px',
            }}
          >
            Join our modern blog platform
          </p>

          <input
            type='text'
            name='name'
            placeholder='Full Name'
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              borderRadius: '12px',
              border: 'none',
            }}
          />

          <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              borderRadius: '12px',
              border: 'none',
            }}
          />

          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              borderRadius: '12px',
              border: 'none',
            }}
          />

          <button
            style={{
              width: '100%',
              padding: '15px',
              background: '#38bdf8',
              border: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Register
          </button>

          <p
            style={{
              marginTop: '20px',
              textAlign: 'center',
              color: '#94a3b8',
            }}
          >
            Already have an account?{' '}
            <Link
              to='/login'
              style={{
                color: '#38bdf8',
              }}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
  );
};

export default Register;
import React, { useState } from 'react';

import API from '../services/api';

import {
  useNavigate,
  Link,
} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const [password, setPassword] =
    useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post(
        '/auth/login',
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        'token',
        data.token
      );

      localStorage.setItem(
        'user',
        JSON.stringify(data.user)
      );

      navigate('/');

      window.location.reload();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'linear-gradient(to right, #020617, #0f172a)',
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
          Welcome Back
        </h1>

        <p
          style={{
            textAlign: 'center',
            color: '#94a3b8',
            marginBottom: '30px',
          }}
        >
          Login to continue
        </p>

        <input
          type='email'
          placeholder='Email'
          onChange={(e) =>
            setEmail(e.target.value)
          }
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
          placeholder='Password'
          onChange={(e) =>
            setPassword(e.target.value)
          }
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
          Login
        </button>

        <p
          style={{
            marginTop: '20px',
            textAlign: 'center',
            color: '#94a3b8',
          }}
        >
          Don't have an account?{' '}
          <Link
            to='/register'
            style={{
              color: '#38bdf8',
            }}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
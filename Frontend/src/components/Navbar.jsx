import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem(
      'user'
    );

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');

    localStorage.removeItem('user');

    setUser(null);

    navigate('/login');

    window.location.reload();
  };

  return (
    <div
      style={{
        width: '100%',
        padding: '20px 60px',
        background: '#111827',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <h2
        style={{
          color: '#38bdf8',
          fontWeight: '700',
        }}
      >
        Blog CMS
      </h2>

      <div
        style={{
          display: 'flex',
          gap: '25px',
          alignItems: 'center',
        }}
      >
        <Link
          to='/'
          style={{ color: 'white' }}
        >
          Home
        </Link>

        {user && (
          <>
            <Link
              to='/create'
              style={{ color: 'white' }}
            >
              Create
            </Link>

            <Link
              to='/dashboard'
              style={{ color: 'white' }}
            >
              Dashboard
            </Link>
          </>
        )}

        {user ? (
          <>
            <p
              style={{
                color: '#38bdf8',
                fontWeight: '600',
              }}
            >
              Hi, {user.name}
            </p>

            <button
              onClick={handleLogout}
              style={{
                background: '#ef4444',
                border: 'none',
                padding: '10px 18px',
                borderRadius: '10px',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '600',
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to='/login'
              style={{
                background: '#38bdf8',
                padding: '10px 18px',
                borderRadius: '10px',
                color: '#000',
                fontWeight: '600',
              }}
            >
              Login
            </Link>

            <Link
              to='/register'
              style={{
                border: '1px solid #38bdf8',
                padding: '10px 18px',
                borderRadius: '10px',
                color: '#38bdf8',
                fontWeight: '600',
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
import React from 'react';

import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        background: '#1e293b',
        color: 'white',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
        marginBottom: '25px',
        fontWeight: '600',
      }}
    >
    Back
    </button>
  );
};

export default BackButton;
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import API from '../services/api';

import MainLayout from '../layouts/MainLayout';

import BackButton from '../components/BackButton';

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const { data } = await API.get(
        `/blogs/${id}`
      );

      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) {
    return (
      <MainLayout>
        <BackButton />

        <h2>Loading...</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <BackButton />

      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: '#1e293b',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow:
            '0 10px 40px rgba(0,0,0,0.4)',
        }}
      >
{blog.image ? (
  <img
    src={`http://localhost:5000/uploads/${blog.image}`}
    alt={blog.title}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src =
        'https://via.placeholder.com/900x420?text=No+Image+Available';
    }}
    style={{
      width: '100%',
      height: '420px',
      objectFit: 'cover',
    }}
  />
) : (
  <div
    style={{
      width: '100%',
      height: '420px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#334155',
      color: '#fff',
      fontSize: '24px',
      fontWeight: '600',
    }}
  >
    No Image Available
  </div>
)}

        <div
          style={{
            padding: '40px',
          }}
        >
          <p
            style={{
              color: '#38bdf8',
              marginBottom: '15px',
              fontWeight: '600',
            }}
          >
            {blog.category}
          </p>

          <h1
            style={{
              fontSize: '42px',
              marginBottom: '25px',
            }}
          >
            {blog.title}
          </h1>

          <p
            style={{
              color: '#cbd5e1',
              lineHeight: '2',
              fontSize: '17px',
            }}
          >
            {blog.content}
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogDetails;
import React from 'react';

import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div
      style={{
        background: '#1e293b',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: '0.3s',
      }}
    >
      {blog.image && (
        <img
          src={`http://localhost:5000/uploads/${blog.image}`}
          alt='blog'
          style={{
            width: '100%',
            height: '240px',
            objectFit: 'cover',
          }}
        />
      )}

      <div style={{ padding: '20px' }}>
        <p
          style={{
            color: '#38bdf8',
            marginBottom: '10px',
          }}
        >
          {blog.category}
        </p>

        <h2
          style={{
            marginBottom: '15px',
            fontSize: '24px',
          }}
        >
          {blog.title}
        </h2>

        <p
          style={{
            color: '#cbd5e1',
            lineHeight: 1.7,
          }}
        >
          {blog.content.substring(0, 120)}...
        </p>

        <Link
          to={`/blog/${blog._id}`}
          style={{
            display: 'inline-block',
            marginTop: '20px',
            background: '#38bdf8',
            padding: '12px 18px',
            borderRadius: '10px',
            color: '#000',
            fontWeight: '600',
          }}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
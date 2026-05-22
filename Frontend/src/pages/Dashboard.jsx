import React, { useEffect, useState } from 'react';

import API from '../services/api';

import MainLayout from '../layouts/MainLayout';

import BackButton from '../components/BackButton';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] =
    useState(1);

  const blogsPerPage = 10;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await API.get(
        '/blogs'
      );

      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Pagination Logic
  const indexOfLastBlog =
    currentPage * blogsPerPage;

  const indexOfFirstBlog =
    indexOfLastBlog - blogsPerPage;

  const currentBlogs = blogs.slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  const totalPages = Math.ceil(
    blogs.length / blogsPerPage
  );

  return (
    <MainLayout>
      <BackButton />

      <h1
        style={{
          marginBottom: '30px',
          fontSize: '42px',
        }}
      >
        Dashboard
      </h1>

      {blogs.length === 0 ? (
        <div
          style={{
            background: '#1e293b',
            padding: '40px',
            borderRadius: '20px',
            textAlign: 'center',
            color: '#94a3b8',
          }}
        >
          No Blogs Found
        </div>
      ) : (
        <>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit,minmax(320px,1fr))',
              gap: '25px',
            }}
          >
            {currentBlogs.map((blog) => (
              <div
                key={blog._id}
                style={{
                  background: '#1e293b',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow:
                    '0 10px 30px rgba(0,0,0,0.4)',
                }}
              >
                {blog.image ? (
                  <img
                    src={`http://localhost:5000/uploads/${blog.image}`}
                    alt={blog.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'https://via.placeholder.com/600x220?text=No+Image+Available';
                    }}
                    style={{
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '220px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#334155',
                      color: '#fff',
                      fontSize: '20px',
                      fontWeight: '600',
                    }}
                  >
                    No Image Available
                  </div>
                )}

                <div
                  style={{
                    padding: '20px',
                  }}
                >
                  <h2
                    style={{
                      marginBottom: '10px',
                    }}
                  >
                    {blog.title}
                  </h2>

                  <p
                    style={{
                      color: '#94a3b8',
                      marginBottom: '15px',
                    }}
                  >
                    {blog.category}
                  </p>

                  <p
                    style={{
                      color: '#cbd5e1',
                      lineHeight: '1.7',
                    }}
                  >
                    {blog.content.slice(0, 120)}
                    ...
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              {[...Array(totalPages)].map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    style={{
                      padding: '10px 18px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: 'pointer',
                      background:
                        currentPage ===
                        index + 1
                          ? '#38bdf8'
                          : '#1e293b',
                      color: '#fff',
                      fontWeight: '600',
                    }}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>
          )}
        </>
      )}
    </MainLayout>
  );
};

export default Dashboard;
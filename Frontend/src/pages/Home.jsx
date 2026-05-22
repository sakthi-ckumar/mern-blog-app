import React, {
  useEffect,
  useState,
} from 'react';

import API from '../services/api';

import BlogCard from '../components/BlogCard';

import MainLayout from '../layouts/MainLayout';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] =
    useState(1);

  const blogsPerPage = 10;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await API.get('/blogs');

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
      <div
        style={{
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        <h1
          style={{
            fontSize: '55px',
            marginBottom: '20px',
          }}
        >
          Modern Blog Platform
        </h1>

        <p
          style={{
            color: '#94a3b8',
            fontSize: '18px',
          }}
        >
          Share your ideas with the world
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(320px,1fr))',
          gap: '30px',
        }}
      >
        {currentBlogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
          />
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
                    currentPage === index + 1
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
    </MainLayout>
  );
};

export default Home;
import React, { useState } from 'react';

import API from '../services/api';

import { useNavigate } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import BackButton from '../components/BackButton';

const CreateBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] =
    useState('');
  const [category, setCategory] =
    useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append('title', title);
      formData.append('content', content);
      formData.append('category', category);
      formData.append('image', image);

      await API.post('/blogs', formData);

      alert('Blog Created Successfully');

      navigate('/');
    } catch (error) {
      console.log(error);

      alert('Something went wrong');
    }
  };

  return (
    <MainLayout>
      <BackButton />

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
            width: '100%',
            maxWidth: '700px',
            background: '#1e293b',
            padding: '40px',
            borderRadius: '24px',
            boxShadow:
              '0 10px 40px rgba(0,0,0,0.4)',
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              marginBottom: '10px',
              fontSize: '42px',
            }}
          >
            Create Blog
          </h1>

          <p
            style={{
              textAlign: 'center',
              color: '#94a3b8',
              marginBottom: '35px',
            }}
          >
            Share your thoughts with the world
          </p>

          <input
            type='text'
            placeholder='Blog Title'
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            style={{
              width: '100%',
              padding: '16px',
              marginBottom: '20px',
              borderRadius: '12px',
              border: 'none',
              background: '#334155',
              color: 'white',
              fontSize: '15px',
            }}
          />

          <input
            type='text'
            placeholder='Category'
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            style={{
              width: '100%',
              padding: '16px',
              marginBottom: '20px',
              borderRadius: '12px',
              border: 'none',
              background: '#334155',
              color: 'white',
              fontSize: '15px',
            }}
          />

          <textarea
            placeholder='Write your blog content...'
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            style={{
              width: '100%',
              height: '220px',
              padding: '16px',
              marginBottom: '20px',
              borderRadius: '12px',
              border: 'none',
              resize: 'none',
              background: '#334155',
              color: 'white',
              fontSize: '15px',
              lineHeight: '1.8',
            }}
          />

          <div
            style={{
              marginBottom: '25px',
            }}
          >
            <label
              style={{
                display: 'block',
                marginBottom: '10px',
                color: '#cbd5e1',
              }}
            >
              Upload Cover Image
            </label>

            <input
              type='file'
              onChange={(e) =>
                setImage(e.target.files[0])
              }
              style={{
                color: 'white',
              }}
            />
          </div>

          <button
            type='submit'
            style={{
              width: '100%',
              padding: '16px',
              background: '#38bdf8',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Publish Blog
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default CreateBlog;
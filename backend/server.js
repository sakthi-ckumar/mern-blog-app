const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  '/uploads',
  express.static('uploads')
);

app.use(
  '/api/auth',
  require('./routes/authRoutes')
);

app.use(
  '/api/blogs',
  require('./routes/blogRoutes')
);

app.get('/', (req, res) => {
  res.send('API Running');
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server Running On ${process.env.PORT}`
  );
});
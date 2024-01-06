const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from localhost:3000 (your React app's origin)
app.use(cors({ origin: 'http://localhost:3000' }));

// DB connection
require('dotenv').config();
const dbConfig = require('./config/dbConfig');

// Routes
app.use(express.json());
const userRoute = require('./routes/userRoute');

app.use('/api/user', userRoute);

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
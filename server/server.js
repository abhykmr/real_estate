const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authroutes');
const userRoutes = require('./routes/userroutes');
const cors = require('cors');


const app = express();

// Middleware
app.use(bodyParser.json());

// Routes

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use(cors());
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/real_estate', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

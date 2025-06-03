const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Connectez-vous à MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

const chatRouter = require('./routes/chat');
app.use('/api', chatRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

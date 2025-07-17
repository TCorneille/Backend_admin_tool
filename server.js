

const mongoose = require('mongoose');
const app=require('./app')




// Database connection
// mongoose.connect('mongodb://localhost:27017/adminToolDB', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// Routes


// Error handling middleware


// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Admin tool running on port ${PORT}`));
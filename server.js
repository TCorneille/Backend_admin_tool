

const mongoose = require('mongoose');
const app=require('./app')
const dotenv=require('dotenv')


dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true, // Optional in Mongoose 6+, but okay to leave
  
    useUnifiedTopology: true // Add this for good connection behavior
  })
  .then(con => {
    // console.log(con.connections);
    console.log('DB connection successful!');
  })
  .catch(err => {
    console.error('Connection error:', err);
  });


// Database connection
// mongoose.connect('mongodb://localhost:27017/adminToolDB', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// Routes


// Error handling middleware


// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Admin tool running on port ${PORT}`));
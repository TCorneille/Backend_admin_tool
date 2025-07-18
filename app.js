const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const dataRoutes = require('./routes/dataRoutes');


// Middleware
app.use(express.json()); // Handles JSON
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json());
// app.use('/api/data', dataRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports=app;
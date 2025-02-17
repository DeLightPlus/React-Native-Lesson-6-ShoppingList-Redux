const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const shoppingRoutes = require('./routes/shoppingListRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', shoppingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try 
  {
    await sequelize.authenticate();
    console.log(`Server running on port ${PORT} 🚀`);
  } 
  catch (err) { console.error('Database connection error:', err); }
});

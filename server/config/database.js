const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres', // ✅ Change to PostgreSQL
  logging: false, // ✅ Disable unnecessary logs
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // ✅ Required for Render's PostgreSQL SSL
    },
  },
});

sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL ✅'))
  .catch((err) => console.error('Error connecting:', err));

module.exports = sequelize;

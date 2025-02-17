const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ShoppingItem = sequelize.define('ShoppingItem', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

sequelize.sync({ force: false })
  .then(() => console.log('ShoppingItem table ready ✅'))
  .catch((err) => console.error('Error creating table:', err));

module.exports = ShoppingItem;

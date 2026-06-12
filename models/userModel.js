import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const user = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'users'
});

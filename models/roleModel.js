import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const role = sequelize.define('role', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'roles',
  timestamps: false
});

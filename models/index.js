import { sequelize } from '../database/database.js';
import { user } from './userModel.js';
import { role } from './roleModel.js';

const db = {};
db.role = role;
db.user = user;

// Un Rol tiene muchos Usuarios (1 a N)
db.role.hasMany(db.user, { foreignKey: 'role', sourceKey: 'id', as: 'users' });

// Un Usuario pertenece a un Rol (1 a 1)
db.user.belongsTo(db.role, { foreignKey: 'role', targetKey: 'id', as: 'rolData' });

export default db
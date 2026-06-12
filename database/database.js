import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Obtenemos el nombre del archivo de la BD desde el .env
const dbFile = process.env.DATABASE_URL || 'database.sqlite';
const dbPath = path.resolve(__dirname, dbFile);

// Inicializar Sequelize con SQLite
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false,
});

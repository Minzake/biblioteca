import seedRoles from "./roleSeeder.js"
import seedUsers from "./userSeeder.js"
import { sequelize } from "../database/database.js"

const seedDatabase = async () => {
  try {
    // Sincronizar los modelos con la BD antes de poblarla
    await sequelize.query('PRAGMA foreign_keys = OFF');
    await sequelize.sync({ alter: true })
    await sequelize.query('PRAGMA foreign_keys = ON');
    
    await seedRoles()
    await seedUsers()
    console.log('Base de datos poblada exitosamente.')
    process.exit(0)
  } catch (error) {
    console.error('Error al poblar la base de datos:', error)
    process.exit(1)
  }
}

seedDatabase()
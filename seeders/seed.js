import seedRoles from "./roleSeeder.js"
import seedUsers from "./userSeeder.js"

const seedDatabase = async () => {
  try {
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
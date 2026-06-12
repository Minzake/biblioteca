import db from '../models/index.js'

const { user: User } = db

const seedUsers = async () => {
  try {
    const users = [
      { id: 1, name: 'admin', email: 'admin@example.com', password: 'hashed_password', role: 1 },
      { id: 2, name: 'user', email: 'user@example.com', password: 'hashed_password', role: 2 }
    ]

    await User.bulkCreate(users, { ignoreDuplicates: true })

    console.log('Usuarios creados exitosamente.')
  } catch (error) {
    console.error('Error al crear usuarios:', error)
    throw error
  }
}

export default seedUsers

import db from '../models/index.js'

const { role: Role } = db

const seedRoles = async () => {
  try {
    const roles = [
      { id: 1, name: 'admin', description: 'Administrador del sistema' },
      { id: 2, name: 'user', description: 'Usuario regular de la biblioteca' }
    ]

    await Role.bulkCreate(roles, { ignoreDuplicates: true })

    console.log('Roles creados exitosamente.')
  } catch (error) {
    console.error('Error al crear roles:', error)
    throw error
  }
}

export default seedRoles
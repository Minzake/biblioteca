import UserEntity from '../entities/userEntity.js'

export class UserController {
    constructor() {}
    getAllUsers = async (req, res) => {
        try {
            const userEntity = new UserEntity();
            const users = await userEntity.findAllUsers();
            res.json(users);
        } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
}

export default UserController;
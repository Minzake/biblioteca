import db from '../models/index.js';

const { user: User, role: Role } = db;

export default class UserEntity {
    constructor() {
        this.model = User;
    }
    findAllUsers = async () => {
        try {
            const users = await this.model.findAll({
                include: {
                    model: Role,
                    as: 'rolData',
                    attributes: ['name']
                }
            });
            return users;
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw error;
        }
    }
}
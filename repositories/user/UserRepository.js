const connection = require('../../databases/connection.js');

class UserRepository {
    constructor() {
        this.connection = connection;
    }

    async getUsers() {
        try {
            const rows = await this.connection.query('SELECT * FROM users');
            return rows;
        } catch (error) {
            console.log('query failed');
            throw error;
        }
    }
}

module.exports = UserRepository;
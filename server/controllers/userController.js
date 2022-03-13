const pool = require('../db');

const userController = {
    register: async (req, res) => {
        try {
            const { username, password, avatar } = req.body;
        } catch (error) {}
    },
};

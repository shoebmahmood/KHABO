import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Maheer',
        email: 'maheer@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,

    },
    {
        name: 'Shoeb',
        email: 'shoeb@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,

    },
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,

    },
];

export default users;
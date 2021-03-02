import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Miraz',
        email: 'miraz@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Habib',
        email: 'habib@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users
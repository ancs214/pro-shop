import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    //bcrypt takes in password and 'rounds'
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jane Doe',
    email: 'Jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jon Doe ',
    email: 'Jon@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users

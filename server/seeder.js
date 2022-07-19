import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

//mongoose returns promises, so must use async func
const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    //create array of the created users
    const createdUsers = await User.insertMany(users)
    //obtain admin user from createdUsers array; it will be the first item
    const adminUser = createdUsers[0]._id
    //map over products array
    const sampleProducts = products.map((product) => {
      //spread operator to return all product objects and also the admin user
      return { ...product, user: adminUser }
    })

    //add the products and admin user to database
    await Product.insertMany(sampleProducts)

    console.log('Data imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

//mongoose returns promises, so must use async func
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

//command has '-d', destroy data, else import data
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}

//call this with node server/seeder
//destroy data with node server/seeder -d

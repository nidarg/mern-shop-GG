import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'

import Product from './models/productModel.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async()=>{
    try {

        //clear database befor import
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // add admin user related to Product schema

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product=>{
            return{...product, user:adminUser}
        })

        await Product.insertMany(sampleProducts)
        console.log('Data imported !!')
        process.exit()
    } catch (error) {
    console.error(`${error}`)    
    process.exit(1)    
    }
}

const destroyData = async()=>{
    try {

        //clear database befor import
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed !!')
        process.exit()
    } catch (error) {
    console.error(`${error}`)    
    process.exit(1)    
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}
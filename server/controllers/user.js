import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signin = async (req, res) => {
    const { username, password } = req.body
    try {
        const existingUser = await User.findOne({ username })
        if(!existingUser)
        {
            return res.json({message: "User doesn't exist"})
        }
        const comparePassword = await bcrypt.compare(password, existingUser.password)
        if(!comparePassword)
        {
            return res.json({message: "Invalid password"})
        }

        const token = jwt.sign({username: existingUser.username, id: existingUser._id}, 'test', {expiresIn: "1h"})
        return res.status(200).json({result: existingUser, token})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong.'})
    }
}

export const signup = async (req, res) => {
    const {firstName, lastName, username, password} = req.body
 
    try {
        const existingUser = await User.findOne({ username:username })
        if(existingUser)
        {
            return res.json({ message:'User already exists'})
        }  
        const name = firstName + ' ' + lastName
        const hashPassword = await bcrypt.hash(password, 12)
        const newUser = new User({name:name, username, password:hashPassword})
        const token = jwt.sign({username: newUser.username, id: newUser._id}, 'test', {})
        await newUser.save()
        return res.status(200).json({result: newUser, token})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Something went wrong.'})
    }
   
}
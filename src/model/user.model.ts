import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/index'

const userSchema = new Schema<IUser>({
    username: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    hash: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        immutable: true,            
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }
})


export default model<IUser>('User', userSchema)

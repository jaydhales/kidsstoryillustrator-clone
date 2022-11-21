import { Schema, model, Types } from 'mongoose'
import { IContact } from '../interfaces/index'

const contactSchema = new Schema<IContact>({
    fullname: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true
    },
    message: {
        type: String
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})


export default model<IContact>('Contact', contactSchema)

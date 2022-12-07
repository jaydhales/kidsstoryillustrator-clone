import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/index'

const userSchema = new Schema<IUser>({
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
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
    avatar: {
        type: String,
        default: ''
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


const generateAvatar = (x: string, y: string) => {
    return `https://ui-avatars.com/api/?name=${x}+${y}&background=aa0136&rounded=true&bold=false&color=ffffff`
}

userSchema.post('save', async function (doc, next) {

    try {
        await doc
            .model('User')
            .updateOne({ _id: doc._id }, { avatar: generateAvatar(doc.firstName, doc.lastName) });
        this.avatar = generateAvatar(this.firstName, this.lastName)
    } catch (error: any) {
        next(error);
    }

    return next()

})


export default model<IUser>('User', userSchema)

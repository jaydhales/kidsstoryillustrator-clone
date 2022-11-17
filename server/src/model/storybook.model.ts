import { Schema, model } from 'mongoose'
import { IStorybook } from '../interface/index'

const storybookSchema = new Schema<IStorybook>({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    title: {
        type: String,
        lowercase: true
    },
    category: {
        type: String,
        lowercase: true
    }, 
    numberOfPages: {
        type: Number
    },
    scenes: [{
        caption: String,
        imageURL: String
    }],
    resource: {
        type: String,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})


export default model<IStorybook>('Storybook', storybookSchema)

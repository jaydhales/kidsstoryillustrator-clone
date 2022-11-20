import { Schema, model } from 'mongoose';
import { IStorybook } from '../interface/index';

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
    numberOfPages: {
        type: Number
    },
    scenes: [
        {
            caption: String,
            imageURL: String
        }
    ],
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
});

export default model<IStorybook>('Storybook', storybookSchema);

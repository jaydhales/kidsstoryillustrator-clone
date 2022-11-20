import { Types } from 'mongoose';

export interface IUser {
    [x: string]: any;
    _id: Types.ObjectId;
    username: string;
    email: string;
    hash: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IStorybook {
    author: Types.ObjectId;
    title: string;
    numberOfPages: number;
    scenes: {
        caption: string;
        imageURL: string;
    }[];
    createdAt: Date;
}

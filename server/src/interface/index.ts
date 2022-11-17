import { Types } from 'mongoose'

export interface IUser {
    [x: string]: any;
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    hash: string;
    createdAt: Date;
    updatedAt: Date;
  }

export interface IStorybook {
  author: Types.ObjectId;
  title: string;
  category: string;
  numberOfPages: number;
  scenes:  {
      caption: string,
      imageURL: string
    }[];
    resource: string;
    createdAt: Date;
}

import { Types } from 'mongoose';

export class BaseHandler {
  public stringify(obj: any): string {
    return JSON.stringify(obj);
  }
}

export interface IUser {
  [x: string]: any;
  _id: Types.ObjectId;
  username: string;
  email: string;
  hash: string;
  avatar: string;
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
  isArchived: boolean,
  createdAt: Date;
}

export interface IStorybookDocument extends IStorybook {
  data: any;
  save: any;
  limit: any;
  skip: any
}

export interface IContact {
  fullname: string;
  email: string;
  message: string;
  createdAt: Date;
}


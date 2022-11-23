import { Request } from "express";
import { Types } from "mongoose";

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

export interface IContact {
  fullname: string;
  email: string;
  message: string;
  createdAt: Date;
}


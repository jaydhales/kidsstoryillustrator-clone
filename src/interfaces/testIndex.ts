import { IStorybook } from '.';

export interface Ibody {
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	hash: string;
}

export interface request_ {
	body: Ibody;
}

export interface request__ {
	storyBody: IStorybook
}
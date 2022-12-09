/* eslint-disable @typescript-eslint/no-explicit-any */
import chai from 'chai';
import mongoose from 'mongoose';
import { Ibody, request_ } from '../interfaces/testIndex';
import { IUser } from '../interfaces';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp)
const assert = chai.assert;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const should = chai.use(chaiHttp).should();
const requester = chai.request(app).keepOpen()

const mockObjectId = new mongoose.Types.ObjectId();
const mockObjectDate = new Date();

const generateAvatar = (x: string, y: string) => {
	return `https://ui-avatars.com/api/?name=${x}+${y}&background=aa0136&rounded=true&bold=false&color=ffffff`
  }



const body: Ibody = {
	email: 'ukanah15thdean@gmail.com',
	username: 'deanuko',
	firstName: 'dean',
	lastName: 'ukanah',
	hash: 'sdkfhffhfkwefjwfwjf'
}

const request: request_ = {
	body: body
}

const User: IUser = {
	_id: mockObjectId,
	username: body.username,
	email: body.email,
	hash: body.hash,
	avatar: generateAvatar(body.firstName, body.lastName),
	isArchived: false,
	createdAt: mockObjectDate,
	updatedAt: mockObjectDate
}

describe('the User class for Signup', () => {
	it('should recieve the username', () => {
		const { username } = request.body
		assert.typeOf(username, 'string')
	})

	it('should recieve the email', () => {
		const { email } = request.body
		assert.typeOf(email, 'string')
	})

	it('should recieve the First name', () => {
		const { firstName } = request.body
		assert.typeOf(firstName, 'string')
	})

	it('should recieve the Last name', () => {
		const { lastName } = request.body
		assert.typeOf(lastName, 'string')
	})

	it('should recieve the hash', () => {
		const { hash } = request.body
		assert.typeOf(hash, 'string')
	})

	it('should recieve a User Type', () => {
		const user = User
		assert.containsAllKeys(user, ['_id', 'username', 'email', 'hash', 'createdAt', 'updatedAt'])
	})

	it('should return 200 when user is created', (done) => {
		requester
		.post('/auth/signup')
		.send(body)
		.end((err, res) => {
			res.should.have.status(200);
			done();
		})
	})
})

describe('the User class for Sign in', () => {
	it('should receive the username and password', () => {
		const { username, hash } = request.body
		assert.isNotEmpty(username, 'username is present')
		assert.isNotEmpty(hash, 'password is present')
	})

	it('should return 200 when user is created', (done) => {
		requester
		.post('/auth/signin')
		.send({ username: 'deanuko', password: 'sfilfdflfjsd' })
		.end((err, res) => {
			res.should.have.status(200);
			done();
		})
	})
})

describe('the User class for User activities', () => {
	it('should return 404 for User not found', () => {
		requester
		// eslint-disable-next-line quotes
		.get(`/users/${mockObjectId}`)
		.end((err, res) => {
			res.should.have.status(404);
		})
	})
})

describe('Users must be authorized', () => {
	it('should return 403 if user not authorized to get all users', () => {
		requester
		.get('/users/')
		.end((err, res) => {
			res.should.have.status(403)
		})
	})
})
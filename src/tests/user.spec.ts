/* eslint-disable @typescript-eslint/no-explicit-any */
import chai from 'chai';
// import userModel from '../model/user.model';
import { request } from '../interfaces/testIndex';

// const expect = chai.expect;
const assert = chai.assert;



describe('the User class', () => {
	it('should recieve the username', () => {
		const { username } = request.body
		assert.typeOf(username, 'string')
	})

	it('should recieve the email', () => {
		const { email } = request.body
		assert.typeOf(email, 'string')
	})
})

// class Helloworld{}

// describe('Test hello world', () => {
// 	it('test_init_doNothing', () => {
// 		const sum = new Helloworld()
// 	})
// })
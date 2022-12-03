
interface Ibody {
	email: string,
	username: string,
	firstName: string,
	lastName: string,
	password: string
}

const body: Ibody = {
	email: 'ukanah15thdean@gmail.com',
	username: 'deanuko',
	firstName: 'dean',
	lastName: 'ukanah',
	password: 'sdkfhffhfkwefjwfwjf'
}

interface request_ {
	body: Ibody
}

export const request: request_ = {
	body: body
}

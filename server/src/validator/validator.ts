import Joi from 'joi';

const validator = (schema: any) => (payload: any) => {
    schema.validate(payload, { abortEarly: false})
};

const signupSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const validateSignup = validator(signupSchema);

export const validateLogin = validator(loginSchema);
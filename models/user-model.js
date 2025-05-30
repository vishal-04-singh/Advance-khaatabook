const mongoose = require('mongoose');
const Joi = require('joi');
mongoose.connect('mongodb://localhost:27017/joitestdb');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        index: { unique: true },
        lowercase: true,
        trim: true,
        min: [3, 'Username must be at least 3 characters'],
        max: [50, 'Username must be at most 50 characters']
    },

    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        min: [2, 'Name must be at least 2 characters'],
        max: [100, 'Name must be at most 100 characters']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [0, 'Age cannot be negative'],
        max: [150, 'Age must be realistic']
    },

    contact: {
        type: Number,
        required: [true, 'Contact number is required'],
        min: [1000000000, 'Invalid contact number'],
        max: [9999999999, 'Invalid contact number']
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
    }
});
function validateModel(user) {
    const schema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(50)
        .alphanum()
        .lowercase()
        .trim()
        .messages({
            'string.min': 'Username must be at least 3 characters',
            'string.max': 'Username must be at most 50 characters',
            'string.alphanum': 'Username must contain only letters and numbers'
        }),
    name: Joi.string()
        .required()
        .min(2)
        .max(100)
        .trim()
        .messages({
            'any.required': 'Name is required',
            'string.min': 'Name must be at least 2 characters',
            'string.max': 'Name must be at most 100 characters'
        }),
    age: Joi.number()
        .integer()
        .required()
        .min(0)
        .max(150)
        .messages({
            'any.required': 'Age is required',
            'number.min': 'Age cannot be negative',
            'number.max': 'Age must be realistic'
        }),
    contact: Joi.number()
        .integer()
        .required()
        .min(1000000000)
        .max(9999999999)
        .messages({
            'any.required': 'Contact number is required',
            'number.min': 'Invalid contact number',
            'number.max': 'Invalid contact number'
        }),
    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .lowercase()
        .trim()
        .messages({
            'any.required': 'Email is required',
            'string.email': 'Please enter a valid email address'
        })
}).custom((obj) => {
    const { email } = obj;
    
    const domain = email.split('@')[1].split('.')[1];
    
    if (!['com', 'net'].includes(domain)) {
        throw new Error('Only .com and .net domains are allowed');
    }
    
    return obj;
});
    let { error } = schema.validate(user);
    return error;
}

module.exports.userModel = mongoose.model('User', userSchema);
module.exports.validateModel = validateModel;
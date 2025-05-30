const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase');

const userSchema =  mongoose.Schema({
    username: String,
    name: String,
    password: String,
    age: Number,
    isMarried: Boolean,
    email: String
});

module.exports = mongoose.model('User', userSchema);
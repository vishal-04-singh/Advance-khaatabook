const express = require('express')
const app = express()
const userModel = require('./models/user');
const user = require('./models/user');
const port = 3000

const dummyUsers = [
    {
    username: "john_doe",
    name: "John Doe",
    password: "password123",
    age: 28,
    isMarried: false,
    email: "john@example.com"
  },
  {
    username: "jane_smith",
    name: "Jane Smith",
    password: "securepass456",
    age: 34,
    isMarried: true,
    email: "jane@example.com"
  },
  {
    username: "alex99",
    name: "Alex Johnson",
    password: "alexpass789",
    age: 22,
    isMarried: false,
    email: "alex@example.com"
  },
  {
    username: "lisa_m",
    name: "Lisa Monroe",
    password: "lisaSecure321",
    age: 40,
    isMarried: true,
    email: "lisa@example.com"
  },
  {
    username: "mike_lee",
    name: "Mike Lee",
    password: "mikePass000",
    age: 30,
    isMarried: false,
    email: "mike@example.com"
  },
  {
    username: "emily_white",
    name: "Emily White",
    password: "whiteEm123",
    age: 27,
    isMarried: true,
    email: "emily@example.com"
  },
  {
    username: "david_brown",
    name: "David Brown",
    password: "brownie444",
    age: 35,
    isMarried: true,
    email: "david@example.com"
  },
  {
    username: "nina_kim",
    name: "Nina Kim",
    password: "kimPass2024",
    age: 24,
    isMarried: false,
    email: "nina@example.com"
  },
  {
    username: "ryan_chen",
    name: "Ryan Chen",
    password: "chenSecure987",
    age: 31,
    isMarried: true,
    email: "ryan@example.com"
  },
  {
    username: "sara_ali",
    name: "Sara Ali",
    password: "aliSara333",
    age: 29,
    isMarried: false,
    email: "sara@example.com"
  },
  {
    username: "tom_hardy",
    name: "Tom Hardy",
    password: "hardyTom111",
    age: 37,
    isMarried: true,
    email: "tom@example.com"
  },
  {
    username: "bella_gray",
    name: "Bella Gray",
    password: "grayBella123",
    age: 26,
    isMarried: false,
    email: "bella@example.com"
  },
  {
    username: "kevin_doe",
    name: "Kevin Doe",
    password: "doeKevin000",
    age: 32,
    isMarried: true,
    email: "kevin@example.com"
  },
  {
    username: "olivia_wong",
    name: "Olivia Wong",
    password: "wongPass567",
    age: 23,
    isMarried: false,
    email: "olivia@example.com"
  },
  {
    username: "chris_paul",
    name: "Chris Paul",
    password: "paulChris789",
    age: 38,
    isMarried: true,
    email: "chris@example.com"
  }
];


app.get('/', (req, res) => res.send('working'));

app.get('/createmany', async (req, res) => {
    let data = await userModel.insertMany(dummyUsers);
    res.send(data);
        
});


app.get('/users', async (req, res) => {
    let user = await userModel.find({age:{ $lt: 30}});
    res.send(user);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
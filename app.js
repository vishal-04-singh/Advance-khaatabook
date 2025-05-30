const express = require('express')
const app = express()
const {userModel,validateModel} = require('./models/user-model');
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('working'));

app.post('/create', async (req, res) => {
    let {name, username, age, contact, email} = req.body;
    let error = validateModel({name, username, age, contact, email});
    if (error) return res.status(500).send(error.message);
    
    res.send('Data is valid');
    
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
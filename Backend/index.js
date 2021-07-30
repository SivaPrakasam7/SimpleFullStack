const mongoose = require('mongoose');
const express = require('express');
const cors=require('cors');
const app = express();

// Mongoose connection

mongoose.connect('mongodb+srv://siva:siva12345@cluster0.yudpn.mongodb.net/SociaLod?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(res => { console.log('Database connected') })
    .catch(err => { console.log(err) });

const user = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

const Usermodel = mongoose.model('test', user);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({ code: 200, message: 'API started' });
});

app.post('/login', (req, res) => {
    Usermodel.findOne({ username: req.body.username, password: req.body.password })
        .then(info => { res.status(200).send(info) })
        .catch(err => { res.status(400).send(err) });
})

app.listen(5000, () => {
    console.log(`Server listen at http://localhost:5000`)
});
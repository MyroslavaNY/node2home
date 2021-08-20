const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const {PORT} = require('./config/variables');
const users = require('./db/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/ping', (req, res) => {
    res.json('Pong');
});
app.get('/', (req, res) => {
    res.status(404).end('Not Found');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/registration', (req, res) => {

    if (!email ===-1){
        res.status(201).end('Your Registration Is Successful');
        return;
    }
    res.status(401).end('You are already registred')
});
app.post('/users', (req, res) => {
    res.json({users})
});


app.get('/users', (req, res) => {
    res.render('users', {users})
});
app.get('/users/:user_id', ((req, res) => {
    const {user_id} = req.params;
    console.log(req.query);
    const currentUser = users[user_id];

    if (!currentUser){
        res.status(404).end('User Not Found, Registration, Please' );
        return;
    }
    res.json(currentUser);
}));


app.post('/users', (req, res) => {
    const {email, password} =req.body;
    res.json( {users});

});


app.listen(PORT, ()=>{
    console.log('App listen', PORT);
});

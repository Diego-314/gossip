const express = require('express');
const app =  express();
const ejs = require('ejs');
const path = require('path');
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(process.cwd(), "public")));

app.get('/', (req, res) => {
    return res.render('login');
});

app.post('/login', (req, res) => {
    var { user, pass } = req.body;
    let friendUser = 'admin';
    let friendPassword = '123';
    if (user == friendUser && pass == friendPassword) return res.redirect('/menu')
});

app.get('/menu', (req, res) => {
    return res.render('menu.ejs');
});

app.listen(PORT, (req, res) => {
    console.log('App iniciada.')
});
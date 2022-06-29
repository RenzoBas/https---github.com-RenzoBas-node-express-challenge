

var express = require('express');
var path = require('path')

var app = new express();
var port = 3000;

// This will be my home page
app.get('/home', (req,res) => {

    res.sendFile(path.join(__dirname + '/component/home.html'))
});

// This will be my about page
app.get('/about', (req,res) => {

    res.sendFile(path.join(__dirname + '/component/about.html'))
});

// This will be my contacts page
app.get('/contacts', (req,res) => {

    res.sendFile(path.join(__dirname + '/component/contacts.html'))
});

// This will be my 401 error page
app.get('/error', (req,res) => {

    res.status(401).sendFile(path.join(__dirname + '/component/error.html'))
});

app.listen(port, function() {
    console.log('hello from port:', port)
});
const { response } = require('express');
const express = require ('express');
const app = express ();
const port = 3000;
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.listen(process.env.PORT || 3000, function (){
    console.log('La app esta funcionando en el puerto http://localhost:' + port);
});

app.get('/', function(req,res){
res.sendFile(path.resolve(__dirname, 'views/index.html'))
});
app.get('/register', function(req,res){
    res.sendFile(path.resolve(__dirname, 'views/register.html'))
    });

app.get('/login', function(req,res){
        res.sendFile(path.resolve(__dirname, 'views/login.html'))
    });    


app.use(express.static('public'));

const express = require('express');
const path = require('path')

const app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use("/icons", express.static(path.join(__dirname, "node_modules/boxicons")));

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'));

app.listen(5000, ()=>{
	console.log('Servidor corriendo en http://localhost:5000');
})
const mysql = require('mysql');

const conexion = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodejs_crud'
});

conexion.connect((error)=>{
	if(error){
		console.error('El error de conexion es: '+error);
		return;
	}
	console.log('Conectado con MYSQL correctamente');
})

module.exports = conexion;
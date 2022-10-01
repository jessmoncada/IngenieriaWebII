const  { getConnection } = require('./db/db_connection_mongo');
const express = require('express');
const cors = require ('cors')
require('dotenv').config();

const app = express ();
const port = process.env.PORT;

app.use(cors());

getConnection();

//Para tratar como Json (Parseo)
app.use(express.json());

app.use('/usuario', require('./router/usuario')); 
app.use('/estadoEquipo', require('./router/estadoEquipo'));
app.use('/marcas', require('./router/marcas'));
app.use('/tipoEquipo', require('./router/tipoEquipo'));
app.use('/inventario', require('./router/inventario'));


app.get('/',(req,res)=> { //Puerto 3000 para el get
res.send ('Hello World')
}); 

app.listen(port , () => {
    console.log('Example app listening on port ${port}')
});
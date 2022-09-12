const { Router } = require('express');
const router = Router ();
const Usuario = require('../models/Usuario') //Datos para la base BD

//Crear recursos 
router.post('/', async function(req, res){

    try{
        console.log(req.body);

        const existeUsuario = await Usuario.findOne({email: req.body.email}); //Validar usuario
        if (existeUsuario){
            return res.send('Ya existe un usuario con este email');
        }

        let usuario = new Usuario(); //Creacion instancia del modelo usuario
        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date ();
    
        usuario = await usuario.save();
    
        res.send(usuario);

    } catch(error){
        console.log(error);
        res.send('Ocurrió un error');
    }
});

//Leer
router.get('/', function(req, res){ 
    res.send('Crear Usuario Get');
});

//Actualizar
router.put('/:usuarioId', async function(req, res){
  
    try{
        console.log('Objeto recibido',req.body, req.params);

        let usuario = await Usuario.findById(req.params.usuarioId); //Actualizar usuario
        if (!usuario){
            return res.send('No existe el usuario');
        }

        const existeUsuario = await Usuario.findOne({email: req.body.email, _id: {$ne:usuario._id}}); //Validar usuario
        if (existeUsuario){
            return res.send('Ya existe un usuario con este email');
        }

        usuario.email = req.body.email;
        usuario.nombre = req.body.nombre;
        usuario.estado = req.body.estado;
        usuario.fechaActualizacion = new Date ();
        usuario = await usuario.save();
    
        res.send(usuario);

    } catch(error){
        console.log(error);
        res.send('Ocurrió un error');
    }
});

module.exports = router; 
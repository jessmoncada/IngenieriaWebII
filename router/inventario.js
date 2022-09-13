const { Router } = require('express');
const Inventario = require('../models/Inventario');
const router = Router ();

//Crear recursos 
router.post('/', async function(req, res){
  
    try{
        console.log(req.body);

        const existeInventarioPorSerial = await Inventario.findOne({serial: req.body.serial}); 
        if (existeInventarioPorSerial){
            return res.send('Ya existe el serial para otro equipo');
        }
        let inventario = new Inventario(); 
        inventario.serial = req.body.serial;
        inventario.modelo = req.body.modelo;
        inventario.descripcion = req.body.descripcion;
        inventario.foto = req.body.foto;
        inventario.color = req.body.color;
        inventario.fechaCompra = req.body.fechaCompra;
        inventario.precio = req.body.precio;
        inventario.usuario = req.body.usuario._id;
        inventario.marca = req.body.marca._id;
        inventario.tipoEquipo = req.body.tipoEquipo._id;
        inventario.estadoEquipo = req.body.estadoEquipo._id;
        inventario.fechaCreacion = new Date();
        inventario.fechaActualizacion = new Date ();
    
        inventario = await inventario.save();
    
        res.send(inventario);
    } catch(error){
        console.log(error);
        res.send('Ocurrió un error');
    }

});

router.get('/', async function(req, res){
    
    try{
        const inventario = await Inventario.find().populate([
        
            {
                path: 'usuario'

            },

            {
                path: 'marca'

            },
            {
                path: 'tipoEquipo'

            },
            {
                path: 'estadoEquipo'

            },
        ]);
        res.send(inventario);
    
      }catch(error){
        console.log(error);
        res.send('Ocurrió un error');
      }
});

router.put('/', function(req, res){
    res.send('Inventario Put');
});

module.exports = router; 
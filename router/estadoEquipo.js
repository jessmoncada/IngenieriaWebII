const { Router } = require('express');
const EstadoEquipo = require('../models/EstadoEquipo');
const router = Router ();

//Crear recursos 
router.post('/', async function(req, res){
    try{
        let estadoEquipo = new EstadoEquipo(); 
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaCreacion = new Date();
        estadoEquipo.fechaActualizacion = new Date ();
    
        estadoEquipo = await estadoEquipo.save();
    
        res.send(estadoEquipo);
        
    } catch(error){
        console.log(error);
        res.send('Ocurrió un error');
    }
});

//Listar
router.get('/', async function(req, res){
    try{
        const estadoEquipo = await EstadoEquipo.find();
        res.send(estadoEquipo)
    
      }catch(error){
        console.log(error);
        res.send('Ocurrió un error');
      }

});

//Actualizar
router.put('/:estadoEquipoId', async function(req, res){
    try{
        let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId); 
        if(!estadoEquipo){
          return res.send('Estado equipo no existe');
        }
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaActualizacion = new Date ();
        estadoEquipo = await estadoEquipo.save();
    
        res.send(estadoEquipo);
        
    } catch(error){
        console.log(error);
        res.send('Ocurrió un error');
    }
});

module.exports = router; 
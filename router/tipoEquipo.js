const { Router } = require('express');
const TipoEquipo = require ('../models/TipoEquipo');
const router = Router ();

//Crear recursos 
router.post('/', async function(req, res){
    try{
        let tipoEquipo = new TipoEquipo(); 
        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaCreacion = new Date();
        tipoEquipo.fechaActualizacion = new Date ();
    
        tipoEquipo = await tipoEquipo.save();
    
        res.send(tipoEquipo);
        
    } catch(error){
        console.log(error);
        res.send('Ocurrió un error');
    }
    
});

router.get('/', async function(req, res){
    try{
        const tipoEquipo = await TipoEquipo.find();
        res.send(tipoEquipo)
    
      }catch(error){
        console.log(error);
        res.send('Ocurrió un error');
      }

});

router.put('/:tipoEquipoId', async function(req, res){
    try{
    let tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoId); 
    if(!tipoEquipo){
      return res.send('Tipo de equipo no existe');
    }
    tipoEquipo.nombre = req.body.nombre;
    tipoEquipo.estado = req.body.estado;
    tipoEquipo.fechaActualizacion = new Date ();
    tipoEquipo = await tipoEquipo.save();

    res.send(tipoEquipo);
    
} catch(error){
    console.log(error);
    res.send('Ocurrió un error');
}
});

module.exports = router; 
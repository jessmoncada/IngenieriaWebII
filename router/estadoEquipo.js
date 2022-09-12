const { Router } = require('express');
const router = Router ();

//Crear recursos 
router.post('/', function(req, res){
    res.send('Estado de equipo Post');
});

router.get('/', function(req, res){
    res.send('Estado de equipo Get');
});

router.put('/', function(req, res){
    res.send('Estado de equipo Put');
});

module.exports = router; 
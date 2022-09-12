const { Router } = require('express');
const router = Router ();

//Crear recursos 
router.post('/', function(req, res){
    res.send('Marca Post');
});

router.get('/', function(req, res){
    res.send('Marca Get');
});

router.put('/', function(req, res){
    res.send('Marca Put');
});

module.exports = router; 
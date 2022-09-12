const { Router } = require('express');
const router = Router ();

//Crear recursos 
router.post('/', function(req, res){
    res.send('Inventario Post');
});

router.get('/', function(req, res){
    res.send('Inventario Get');
});

router.put('/', function(req, res){
    res.send('Inventario Put');
});

module.exports = router; 
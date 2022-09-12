const mongoose = require ('mongoose');

const getConnection = async () => {
      try{
        const url = 'mongodb://jess:smYdqBBfDACuBwfQ@ac-lcrauhp-shard-00-00.uxp96p5.mongodb.net:27017,ac-lcrauhp-shard-00-01.uxp96p5.mongodb.net:27017,ac-lcrauhp-shard-00-02.uxp96p5.mongodb.net:27017/inventario_bd?ssl=true&replicaSet=atlas-m9n81v-shard-0&authSource=admin&retryWrites=true&w=majority'
        await mongoose.connect(url);
        console.log ('Conexion exitosa');
      }
     catch (error){
        console.log(error);
     }
}

module.exports ={
    getConnection,
}
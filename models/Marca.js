const {Schema,model} = require ('mongoose');

//Se podrá crear y editar Marcas
const MarcaSchema = Schema({
   nombre:{
    type: String,
    require: true,
   },
   estado:{
    type: String,
    require: true,
    enum: [ 'Activo' , 'Inactivo' ]
   },
   fechaCreacion: {
    type: Date,
    require: true,
   },
   fechaActualizacion: {
    type: Date,
    require: true,
   }
})

module.exports = model('Marca', MarcaSchema);
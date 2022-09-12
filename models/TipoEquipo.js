const {Schema,model} = require ('mongoose');

//Se podrá crear y editar Tipos de equipo
const TipoEquipoSchema = Schema({
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

module.exports = model('TipoEquipo', TipoEquipoSchema);
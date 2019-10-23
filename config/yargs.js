const argv = require('yargs')
    .command('crear','Crear un elemento "Por hacer"',{
        descripcion :{
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar','Actualiza el estado completado de una tarea',{
        descripcion :{
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado:{
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea.'
        }
    })
    .command('listar','Lista todas las tareas pendientes.')
    .command('borrar','Elimina una tarea de la lista',{
        descripcion :{
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
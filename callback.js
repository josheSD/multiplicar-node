let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];



let getEmpleado = (id, callback) => {
    //recorre el array de empleados y lo guarda en empleado
    let empleadoDB = empleados.find((empleado) => {
            return empleado.id === id;
        })
        //si no existe el empleado en el array de objectos
    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find((salario) => {
        return salario.id === empleado.id;
    })

    if (!salarioDB) {
        callback(`No se encontro un salario para el empleado ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}


getEmpleado(2, (err, empleado) => {

    if (err) {
        return console.log(err);
    }


    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);;
        } else {
            console.log(`El salario de ${resp.nombre } es de ${resp.salario}$`);
        }
    })

});
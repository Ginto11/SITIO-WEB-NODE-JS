const createUser = async (req, res) => {
    await fetch('https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/usuario', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            edad: req.body.edad,
            email: req.body.email,
            comentario: req.body.comentario
        })
    })

    res.redirect('/coments')
}

const getUsers = async (res) => {

    await fetch('https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/usuarios/1', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        res.render('coments', { usuarios: data, page: 1 });
    })
}

export { createUser, getUsers }
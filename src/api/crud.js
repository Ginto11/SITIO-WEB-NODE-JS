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

const getUserById = async (req, res) => {

    const { id } = req.params;
    
    try {
        await fetch(`https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/usuario/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }   
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.render('update', { usuario: data })
        })
    } catch (error) {
        res.send(error);
    }
}


const UpdateUser = async (req, res) => {
    const { id } = req.params;
    
    try {
        await fetch(`https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/usuario/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: req.params,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                edad: req.body.edad,
                email: req.body.email,
                comentario: req.body.comentario
            })
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    } catch (error) {
        res.send(error);
    }
    res.redirect('/coments');
}


export { createUser, getUsers, getUserById, UpdateUser }
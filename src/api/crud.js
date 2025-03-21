const createUser = async (req, res) => {
    try {
        
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

    } catch (error) {
        res.status(500).send({ error: 'Error al guardar el usuario'})
    }
}

const getUsers = async (res) => {

    try {

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

    } catch (error) {
        res.status(500).send({ error: 'Error al traer los usuarios' })
    }
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
            res.render('update', { usuario: data })
        })
    } catch (error) {
        res.status(500).send({ error: 'Error al ejecutar la consulta' });
    }
}


const UpdateUser = async (req, res) => {

    try {
    
        const { id } = req.params;
    
        await fetch(`https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/usuario/${id}`, {
            method: 'PUT',
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
        .then(res => res.json())
    
        res.redirect('/coments');
    } catch (err) {
        res.status(500).send({error: 'Error al ejecutar la actualizacion.'})
    }

}


const DeleteUser = async (req, res) => {
    try {
        
        const { id } = req.params;

        await fetch(`https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/usuario/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())

        res.redirect('/coments')

    } catch (error) {
        res.status(500).send({ error: 'Error al eliminar el usuario' });
    }
}


export { createUser, getUsers, getUserById, UpdateUser, DeleteUser }
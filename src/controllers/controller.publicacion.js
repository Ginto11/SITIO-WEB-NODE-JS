const createPublicacion = async (req, res) => {
    try {
        
        await fetch('https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/publicacion', {
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
        });
    
        res.redirect('/coments');

    } catch (error) {
        res.status(500).send({ error: 'Error al guardar la publicación.'});
    }
}

const getPublicaciones = async (res) => {

    try {

        const data = await fetch('https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/publicaciones/1', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())

        res.render('coments', { publicaciones: data, page: 1 });

    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'Error al traer las publicaciones.' });
    }
}

const getPublicacionById = async (req, res) => {

    
    try {
        
        const { id } = req.params;
        
        const data = await fetch(`https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/publicacion/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }   
        }) 
        .then(res => res.json())

        res.render('update', { publicacion: data });

    } catch (error) {
        res.status(500).send({ error: 'Error al traer la publicación.' });
    }
}


const UpdatePublicacion = async (req, res) => {

    try {
    
        const { id } = req.params;
    
        await fetch(`https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/publicacion/${id}`, {
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
        });
    
        res.redirect('/coments');

    } catch (err) {
        res.status(500).send({error: 'Error al ejecutar la actualizacion de la publicacion.'})
    }

}


const DeletePublicacion = async (req, res) => {
    
    try {
        
        const { id } = req.params;

        await fetch(`https://api-rest-nodejs-postgres-sql-7c527afb970b.herokuapp.com/api/publicacion/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        res.redirect('/coments')

    } catch (error) {
        res.status(500).send({ error: 'Error al eliminar la publicación.' });
    }
}


export { createPublicacion, getPublicaciones, getPublicacionById, UpdatePublicacion, DeletePublicacion }
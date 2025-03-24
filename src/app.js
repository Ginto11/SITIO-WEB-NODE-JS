import express from 'express';
import { dirname, join } from 'path'
import { fileURLToPath } from 'url';
import router from './routes/publicacion.routes.js';
import morgan from 'morgan';


const app = express()

const ruta_proyect = dirname(fileURLToPath(import.meta.url))

app.set('views', join(ruta_proyect, 'views'))

app.set('view engine', 'ejs')

app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

app.use(express.json())

app.use(router)

app.use(express.static(join(ruta_proyect, 'public')))


app.listen(process.env.PORT || 3000);
console.log("Server escuchando en el puerto", process.env.PORT || 3000);
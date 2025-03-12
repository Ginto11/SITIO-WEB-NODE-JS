import express from 'express';
import { dirname, join } from 'path'
import { fileURLToPath } from 'url';
import router from './routes/index.js'


const app = express()

const ruta_proyect = dirname(fileURLToPath(import.meta.url))

app.set('views', join(ruta_proyect, 'views'))
app.set('view engine', 'ejs')
app.use(router)
app.use(express.static(join(ruta_proyect, 'public')))

app.listen(3000);
console.log("Server escuchando en el puerto", 3000);
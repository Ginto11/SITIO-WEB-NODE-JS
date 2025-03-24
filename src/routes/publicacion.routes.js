import { Router } from 'express';
import { createPublicacion, getPublicaciones, getPublicacionById, UpdatePublicacion, DeletePublicacion } from '../controllers/controller.publicacion.js';

const router = Router();



router.get('/', (req, res) => res.render('home'));

router.get('/about', (req, res) => res.render('about'));

router.get('/about_me', (req, res) => res.render('about_me'));

router.get('/create', (req, res) => res.render('create'));

router.get('/coments', (req, res) => { getPublicaciones(res) });

router.post('/save', (req, res) => { createPublicacion(req, res) });

router.get('/update/:id', (req, res) => { getPublicacionById(req, res) });

router.post('/updating/:id', (req, res) => { UpdatePublicacion(req, res) });

router.get('/delete/:id', (req, res) => DeletePublicacion(req, res));

export default router;
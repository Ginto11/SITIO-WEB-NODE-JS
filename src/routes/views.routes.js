import { Router } from 'express';
import { createUser, getUsers, getUserById, UpdateUser, DeleteUser } from '../api/crud.js';

const router = Router();



router.get('/', (req, res) => res.render('home'));

router.get('/about', (req, res) => res.render('about'));

router.get('/about_me', (req, res) => res.render('about_me'));

router.get('/create', (req, res) => res.render('create'));

router.get('/coments', (req, res) => { getUsers(res) });

router.post('/save', (req, res) => { createUser(req, res) });

router.get('/update/:id', (req, res) => { getUserById(req, res) });

router.post('/updating/:id', (req, res) => { UpdateUser(req, res) });

router.get('/delete/:id', (req, res) => DeleteUser(req, res));

export default router;
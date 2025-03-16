import { Router } from 'express';
import { createUser, getUsers } from '../api/crud.js';

const router = Router() 



router.get('/', (req, res) => res.render('home'))

router.get('/about', (req, res) => res.render('about'))

router.get('/about_me', (req, res) => res.render('about_me'))

router.get('/create', (req, res) => res.render('create'));

router.get('/coments', (req, res) => { getUsers(res) })

router.post('/save', (req, res) => { createUser(req, res) })

export default router
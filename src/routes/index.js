import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index', { persona: 'Camilo'}))

router.get('/about', (req, res) => res.render('about'))

router.get('/contact', (req, res) => res.render('contact'))

export default router
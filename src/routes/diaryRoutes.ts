import express from 'express'

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Fetching')
})

router.post('/', (_req, res) => {
    res.send('Saving')
})

export default router
import express from 'express'
import { getMenus , getSingleMenuById } from '../controllers/menuController.js'

const router = express.Router()

router.route('/').get(getMenus) 
router.route('/:id').get(getSingleMenuById)



export default router
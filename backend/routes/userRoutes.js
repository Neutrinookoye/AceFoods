import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { authUser, getUserProfile , registerUser , UpdateUserProfile} from '../controllers/userController.js'

const router = express.Router()
 
router.post('/' , registerUser)
router.post('/login' , authUser)
router.route('/profile/:id').get( protect , getUserProfile)
router.route('/profile').put( protect , UpdateUserProfile)


export default router
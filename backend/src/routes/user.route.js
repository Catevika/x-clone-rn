import express from 'express';

import {
	followUser,
	getCurrentUser,
	getUserProfile,
	syncUser,
	updateUserProfile,
} from '../controllers/user.controller.js';
import {protectRoute} from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/profile/:username', getUserProfile);

router.post('/sync', protectRoute, syncUser);
router.get('/me', protectRoute, getCurrentUser);
router.put('/profile/:username', protectRoute, updateUserProfile);
router.post('/follow/:targetUserId', protectRoute, followUser);

export default router;

import express from 'express';
import {
	createPost,
	deletePost,
	getPost,
	getPosts,
	getUserPosts,
	likePost,
} from '../controllers/post.controller.js';
import {protectRoute} from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:postId', getPost);
router.get('/user/:userId', getUserPosts);

router.post('/', protectRoute, createPost);
router.post('/:postId/like', protectRoute, likePost);
router.delete('/:postId', protectRoute, deletePost);

export default router;

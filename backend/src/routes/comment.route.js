import express from 'express';
import {createComment, getComments, deleteComment} from '../controllers/comment.controller';
import {protectRoute} from '../middleware/auth.middleware';

const router = express.Router();

router.get('/post/:postId', getComments);

router.post('/post/:postId', protectRoute, createComment);
router.delete('/:commentId', protectRoute, deleteComment);

export default router;

import { Router } from 'express';

import { getBlogs, getSpecificBlog, createBlog, updateThisBlog, deleteSpecificBlog } from '../controllers/blogcontrollers.js';

const router = Router();

router.get('/', getBlogs);
router.get('/:id', getSpecificBlog);
router.post('/', createBlog);
router.put('/:id', updateThisBlog);
router.delete('/:id', deleteSpecificBlog);

export default router;

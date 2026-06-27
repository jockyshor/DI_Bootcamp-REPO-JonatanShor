import { Router } from 'express';

import { readAllBooks, readBook, createBook, deleteOneBook } from '../controllers/bookcontrollers.js';

const router = Router();

router.get('/', readAllBooks);
router.get('/:id', readBook);
router.post('/', createBook);
router.delete('/:id', deleteOneBook);

export default router;

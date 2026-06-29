import { Router } from 'express';

import { uLogIn, newUser, allUsers, getUser, putUser } from '../controllers/usersControllers.js';

const router = Router();

router.post('/register', newUser);
router.post('/login', uLogIn);
router.get('/users', allUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', putUser);

export default router;

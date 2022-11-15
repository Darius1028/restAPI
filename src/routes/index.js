import { Router } from 'express';
import companyRoutes from './companies.js';
import userRoutes from './users.js';

const router = Router();

router.use('/companies',companyRoutes);
router.use('/users',userRoutes);


export default router;
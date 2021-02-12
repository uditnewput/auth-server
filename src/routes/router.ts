import * as express from 'express';
import { authRoutes } from './auth.route';

export const mainRouter = express.Router();

mainRouter.use('/auth', authRoutes);


import express from 'express'
import * as AuthController from '../controllers/auth.controller'

export const authRoutes = express.Router()

authRoutes.put('/iframeAuth', AuthController.getIframeSrc)
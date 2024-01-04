import * as express from 'express'
import articleController from '../controllers/articleController'
import partaiController from '../controllers/partaiController'
import paslonController from '../controllers/paslonController'
import authController from '../controllers/authController'
import UploadFiles from '../middlewares/UploadFiles'
import AuthMiddleware from '../middlewares/Auth'
import voteController from '../controllers/voteController'

const router = express.Router()

// ROUTE ARTICLE
router.get('/article', articleController.getAll)
router.get('/article/:id', articleController.getOne)
router.post("/article", AuthMiddleware.Auth, UploadFiles.upload("image"), articleController.create)
router.delete("/article/:id", articleController.delete)
router.put("/article/:id", UploadFiles.upload("image"), articleController.update)

// ROUTE PARTAI
router.post("/partai", AuthMiddleware.Auth, UploadFiles.upload("image"), partaiController.create)
router.get('/partai', partaiController.getAll)
router.get('/partai/:id', partaiController.getOne)

// ROUTE PASLON
router.post("/paslon", AuthMiddleware.Auth, UploadFiles.upload("image"), paslonController.create)
router.get('/paslon', paslonController.getAll)
router.get('/paslon/:id', paslonController.getOne)

// ROUTE USER
router.post("/auth/register", authController.register)
router.post("/auth/login", authController.login)
router.get('/auth', AuthMiddleware.Auth, authController.getAll)
router.get('/auth/:id', AuthMiddleware.Auth, authController.getOne)

// ROUTE VOTE
router.post('/vote', AuthMiddleware.Auth, voteController.create)
router.get('/vote', voteController.getAll)
router.get('/vote/:id', voteController.getOne)


export default router
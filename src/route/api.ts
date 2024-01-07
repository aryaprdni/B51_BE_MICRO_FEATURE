import * as express from 'express'
import articleController from '../controllers/articleController'
import partaiController from '../controllers/partaiController'
import paslonController from '../controllers/paslonController'
import authController from '../controllers/authController'
import UploadFiles from '../middlewares/UploadFiles'
import AuthMiddleware from '../middlewares/Auth'
import voteController from '../controllers/voteController'

const router = express.Router()

// ROUTE USER
router.post("/user/register", authController.register)
router.post("/user/login", authController.login)
router.get('/user', AuthMiddleware.Auth, authController.getAll)
router.get('/user/:id', AuthMiddleware.Auth, authController.getOne)

// ROUTE VOTE
router.post('/vote', AuthMiddleware.Auth, voteController.create)
router.get('/vote', voteController.getAll)
router.get('/vote/:id', voteController.getOne)

// ROUTE ARTICLE
router.get('/articles', articleController.getAll)
router.get('/article/:id', articleController.getOne)
router.get('/article-card', articleController.getAllArticleCard)
router.get('/article-card/:id', articleController.getOneArticleCard)
router.post("/article/create", AuthMiddleware.Auth, UploadFiles.upload("image"), articleController.create)
router.patch("/article/:id", UploadFiles.upload("image"), articleController.update)
router.delete("/article/:id", AuthMiddleware.Auth, articleController.delete)
router.put("/article/:id", UploadFiles.upload("image"), articleController.update)

// ROUTE PARTAI
router.post("/partai/add", AuthMiddleware.Auth, UploadFiles.upload("image"), partaiController.create)
router.patch("/partai/:id", AuthMiddleware.Auth, UploadFiles.upload("image"), partaiController.update)
router.delete("/partai/:id", AuthMiddleware.Auth, partaiController.delete)
router.get('/partais', partaiController.getAll)
router.get('/partai/:id', partaiController.getOne)

// ROUTE PASLON
router.post("/paslon/add", AuthMiddleware.Auth, UploadFiles.upload("image"), paslonController.create)
router.patch("/paslon/:id", AuthMiddleware.Auth,UploadFiles.upload("image"), paslonController.update)
router.delete("/paslon/:id", AuthMiddleware.Auth, paslonController.delete)
router.get('/paslons', paslonController.getAll)
router.get('/paslon/:id', paslonController.getOne)




export default router
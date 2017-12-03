import Router from 'koa-router'
// import KoaBody from 'koa-body' // Needs to be imported
import { getPosts } from '../controllers/postsController'

const router = new Router({ prefix: '/api/posts' })

/* GET /users get movies */
router.get('/', getPosts)

export default router

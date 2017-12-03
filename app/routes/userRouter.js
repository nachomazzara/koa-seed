import Router from 'koa-router'
import KoaBody from 'koa-body' // Needs to be imported
import { getUsers } from '../controllers/userController'

const router = new Router({ prefix: '/api/user' })

/* GET /users get users
 @querystring  search   example => search=nachomazzara
 */
router.get('/', getUsers)

export default router

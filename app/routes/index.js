import combineRouters from 'koa-combine-routers'
import userRouter from './userRouter'
import postsRouter from './postsRouter'

const router = combineRouters([
  userRouter,
  postsRouter
])

export default router;

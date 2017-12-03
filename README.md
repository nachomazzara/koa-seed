# KOA - SEED

Simple seed to create an API, orchestrator, micro-service, etc
- Support ES6 syntax

### Controllers
We are going to put all the methods here

```javascript
import 'babel-polyfill'
import axios from 'axios'

const performGetUsers = (user) =>
  axios.get(`https://api.github.com/users${user ? '/' + user : ''}`).then(response => response.data)

export async function getUsers (ctx)  {
  const user = ctx.request.query.search || ''
  const request = await performGetUsers(user)
  console.log(request)
  ctx.body = request
}
```


### Routes

We are going to registers the endpoints with the corresponded handler
```javascript
import Router from 'koa-router'
import KoaBody from 'koa-body' // Needs to be imported
import { getUsers } from '../controllers/userController'

const router = new Router({ prefix: '/api/user' })

/* GET /users get users
 @querystring  search   example => search=nachomazzara
 */
router.get('/', getUsers)

export default router
```

### Middlewares
All the middlewares we are going to need needs to be here
```javascript
export default async function rootMiddleware (ctx, next) {
  try {
    await next() // next is now a function
  } catch (err) {
    console.log(err)
    let message = ""; // normalize message if fail on http request
    if(err.response && err.response.statusText){
      message = {message : err.response.statusText}
    }
    ctx.body = message || err.message
    ctx.status = err.status || 500
  }
}
```


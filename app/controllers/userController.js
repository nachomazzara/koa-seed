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

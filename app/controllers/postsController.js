import axios from 'axios'

const performGetPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts').then(response => response.data)

export async function getPosts (ctx) {
  const request = await performGetPosts()
  ctx.body = request
}

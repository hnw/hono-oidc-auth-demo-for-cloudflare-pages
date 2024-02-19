import { Hono } from 'hono'
import { oidcAuthMiddleware, getAuth, revokeSession } from '@hono/oidc-auth'

const app = new Hono()

app.get('/logout', async (c) => {
  await revokeSession(c)
  return c.text('You have been successfully logged out!')
})
app.use('*', oidcAuthMiddleware())
app.use('*', async (c, next) => {
  // Authorize user with email address
  const auth = await getAuth(c)
  if (!auth?.email.endsWith('@gmail.com')) {
    return c.text('Unauthorized', 401)
  }
  await next()
})

app.get('*', async (c) => {
  const response = await c.env.ASSETS.fetch(c.req.raw);
  // clone the response to return a response with modifiable headers
  const newResponse = new Response(response.body, response)
  return newResponse
});

export default app

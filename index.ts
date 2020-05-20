import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'

// env = change this
const env = Deno.env.toObject()
const HOST = env.HOST || '127.0.0.1' // localhost (http://localhost)
const PORT = env.PORT || 8000 // (http://localhost:8000)

const app = new Application()

// same as express routers
app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)
import Koa from 'koa'
import logger from 'koa-logger'
import route from 'koa-route'
import serve from 'koa-static'
import { resolve } from 'path'

const PORT = process.env.PORT || 5555

const app = new Koa()

app.use(logger())

app.use(serve(resolve(__dirname, 'public')))

app.listen(PORT)

console.log(`Listening on port: ${PORT}.`)

import { errorHandler } from './middlewares/error-handler.middleware'
import express from 'express'
import { statusRoute } from './routes/status.route'
import { usersRoute } from './routes/users.route'

const app = express()

app.use(express.json()) //Uso do json
app.use(statusRoute) //Rota do status
app.use(usersRoute) //Rotas de usuário

app.use(errorHandler) //Usa o middleare para erros, sempre no final

app.listen(3333, () => console.log('Server is running on port 3333'))

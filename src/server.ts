import express from 'express'
import { statusRoute } from './routes/status.route'
import { usersRoute } from './routes/users.route'

const app = express()

app.use(express.json()) //Uso do json
app.use(statusRoute) //Rota do status
app.use(usersRoute) //Rotas de usuário

app.listen(3333, () => console.log('Server is running on port 3333'))

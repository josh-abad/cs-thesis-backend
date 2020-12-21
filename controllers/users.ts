import bcrypt from 'bcrypt'
import { Router } from 'express'
import User from '../models/user'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    name: body.name,
    username: body.username,
    role: body.role,
    passwordHash
  })
  const savedUser = await user.save()
  response.json(savedUser.toJSON())
})

usersRouter.get('/', async (_request, response) => {
  const users = await User.find({}).populate('courses')
  response.json(users)
})

usersRouter.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id)
  if (user){
    response.json(user)
  } else {
    response.status(404).end()
  }
})

usersRouter.put('/:id', async (request, response) => {
  const body = request.body

  const oldUser = await User.findById(request.params.id)
  if (oldUser) {
    oldUser.name = body.name || oldUser.name
    oldUser.username = body.username || oldUser.username
    oldUser.courses = body.courses || oldUser.courses

    const updatedUser = await oldUser.save()
    response.json(updatedUser.toJSON())
  }
})

usersRouter.delete('/:id', async (request, response) => {
  await User.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

export default usersRouter

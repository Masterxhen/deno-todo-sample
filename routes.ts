import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getTodos, getTodo, addTodo, updateTodo, deleteTodo } from './controlers.ts'

const router = new Router()
router.get('/todos', getTodos)
      .get('/todo/:id', getTodo)
      .post('/todos', addTodo)
      .put('/todo/:id', updateTodo)
      .delete('/todo/:id', deleteTodo)

export default router
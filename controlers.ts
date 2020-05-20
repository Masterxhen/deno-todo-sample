interface Todos {
  id: Number;
  text: string;
}

let todos: Array<Todos> = [{
  id: 1,
  text: "Wake up"
}, {
  id: 2,
  text: "Play MLBB"
}, {
  id: 3,
  text: "Cook Dinner"
}]

const getTodos = ({ response }: { response: any }) => {
  response.body = todos
}

const getTodo = ({ params, response }: { params: { id: string }; response: any }) => {
  let result = todos.find(obj => {
    return obj.id === parseInt(params.id)
  })
  if (result) {
    response.status = 200
    response.body = result
  } else {
    response.status = 404
    response.body = { message: `todo not found.` }
  }
}

const addTodo = async ({ request, response }: { request: any; response: any }) => {
  const body = await request.body()
  let todo: Todos = body.value
  todo.id = todos.length + 1
  todos.push(todo)
  response.body = { message: 'OK' }
  response.status = 200
}

const updateTodo = async ({ params, request, response }: { params: { id: string }; request: any; response: any }) => {
  let id = todos.findIndex((obj, index) => {
    console.log(obj, index)
    return obj.id === parseInt(params.id)
  })
  if (id) {
    const req = await request.body()
    let body = {
      id: id + 1,
      text: req.value.text
    }
    todos[id] = body
    response.status = 200
    response.body = { message: 'OK' }
  } else {
    response.status = 404
    response.body = { message: `todo not found` }
  }
}

const deleteTodo = ({ params, response }: { params: { id: string }; response: any }) => {
  let id = todos.findIndex((obj, index) => {
    console.log(obj, index)
    return obj.id === parseInt(params.id)
  })
  todos.splice(id, 1)
  response.body = { message: 'OK' }
  response.status = 200
}

export { getTodos, getTodo, addTodo, updateTodo, deleteTodo }
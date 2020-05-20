# Deno Sample Rest API

A sample deno rest api with simple file maintenance made by Thien :clock830:

## To run the app

[Deno must installed](https://deno.land/)

Type on your integrated terminal
```
deno run --allow-env --allow-net index.ts
```

## Routes

This example was based on the ```index.ts``` file configuration
To use POST, PUT and DELETE request use [Postman](https://www.postman.com/downloads/)

Header Content Type is ```application/json```

| Request |   Route   |               Description | Example                      |
| ------- | :-------: | ------------------------: | ---------------------------- |
| GET     |  /todos   |       Gets all todo lists | http://localhost:8000/todos  |
| GET     | /todo/:id | Gets a specific todo list | http://localhost:8000/todo/2 |
| POST    |  /todos   |      Adds a new todo list | http://localhost:8000/todos  |
| PUT     | /todo/:id |   Edit/Update a todo list | http://localhost:8000/todo/2 |
| DELETE  | /todo/:id |        Remove a todo list | http://localhost:8000/todo/2 |

For suggesstion/recommedation for this sample project please contact me on [My Instagram Profile](https://www.instagram.com/masterxhen/) or [My Twitter Profile](https://twitter.com/Masterxhen18)
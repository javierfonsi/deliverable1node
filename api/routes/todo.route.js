const express = require('express');

//Controllers
//import {getAllActivities} from '../controllers/activity.controller'
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller');

const router = express.Router();

//GET http://localhost:4000/post
router.get('/', getAllTodos);

//POST http://localhost:4000/post
router.post('/', createTodo);

//PATCH Update ToDo given an ID
router.patch('/:id', updateTodo);

//DELETE ToDo given an ID ( soft Delete)
router.delete('/:id', deleteTodo);

module.exports = { todoRouter: router };

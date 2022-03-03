const { Todo } = require('../models/todo.model');

exports.getAllTodos = async (req, res) => {
  try {
    //SELECT * FROM post WHERE status = 'active'; -> activities[]
    const todos = await Todo.findAll({ where: { status: 'active' } });

    res.status(200).json({
      status: 'success',
      data: {
        todos
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { content } = req.body;

    const newTodo = await Todo.create({
      content: content
    });

    res.status(201).json({
      status: 'success',
      data: {
        newTodo
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//UpdateActivity PATCH
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const todo = await Todo.findOne({
      where: { id: id, status: 'active' }
    });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update activity, please fill the field'
      });
      return;
    }
    await todo.update(data);

    res.status(204).json({
      status: 'success'
    });
  } catch (error) {
    console.log(error);
  }
};

//Delete Todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({
      where: { id: id, status: 'active' }
    });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant delete todo, invalid ID'
      });
      return;
    }

    // the delete is perform with soft-delete
    await todo.update({ status: 'deleted' });
    res.status(200).json({
      status: 'success'
    });
  } catch (error) {
    console.log(error);
  }
};

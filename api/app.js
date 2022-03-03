const express = require('express');
const cors = require('cors');

//Models
const { todoRouter } = require('./routes/todo.route');

//util
const { sequelize } = require('./util/database');

//Init express app
const app = express();
app.use(cors());

//Enable JSON incoming data
app.use(express.json());

// Endpoint
//http://localhost:4000/api/v1/activity
app.use('/api/v1/todos', todoRouter);

//Authentication
sequelize
  .authenticate()
  .then(() => console.log('connection database'))
  .catch((err) => console.log(err));

//Autentification
sequelize
  .sync()
  .then(() => console.log('database success'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('express app runnig');
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, Person } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());  
app.use(bodyParser.json());

// Rotas
app.get('/api/persons', async (req, res) => {
  const persons = await Person.findAll();
  res.json(persons);
});

app.post('/api/persons', async (req, res) => {
  const newPerson = await Person.create(req.body);
  res.json(newPerson);
});

app.put('/api/persons/:id', async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (person) {
    await person.update(req.body);
    res.json(person);
  } else {
    res.status(404).send('Person not found');
  }
});

app.delete('/api/persons/:id', async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (person) {
    await person.destroy();
    res.json({ message: 'Person deleted' });
  } else {
    res.status(404).send('Person not found');
  }
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

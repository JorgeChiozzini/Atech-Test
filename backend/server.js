const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./persons.db', (err) => {
  if (err) {
    console.error('Erro ao abrir o banco de dados', err);
  } else {
    db.run('CREATE TABLE IF NOT EXISTS persons (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT)', (err) => {
      if (err) {
        console.error('Erro ao criar a tabela', err);
      }
    });
  }
});

app.get('/persons', (req, res) => {
  db.all('SELECT * FROM persons', [], (err, rows) => {
    if (err) {
      res.status(400).send(err.message);
      return;
    }
    res.json(rows);
  });
});

app.post('/persons', (req, res) => {
  const { name, email, phone } = req.body;
  db.run('INSERT INTO persons (name, email, phone) VALUES (?, ?, ?)', [name, email, phone], function(err) {
    if (err) {
      res.status(400).send(err.message);
      return;
    }
    res.json({ id: this.lastID });
  });
});

app.put('/persons/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  db.run('UPDATE persons SET name = ?, email = ?, phone = ? WHERE id = ?', [name, email, phone, id], function(err) {
    if (err) {
      res.status(400).send(err.message);
      return;
    }
    res.json({ changes: this.changes });
  });
});

app.delete('/persons/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM persons WHERE id = ?', id, function(err) {
    if (err) {
      res.status(400).send(err.message);
      return;
    }
    res.json({ changes: this.changes });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

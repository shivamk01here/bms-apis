const express = require('express');
const app = express();
const db = require('./db'); 

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('APIs Are healthy');
});

app.post('/save-name', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "name is not available" });
  }

  db.query('INSERT INTO tubers (name) VALUES (?)', [name], (err, results) => {
    if (err) {
      console.error('Error inserting name:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    res.status(201).json({ message: 'Name saved', id: results.insertId });
  });
});

app.listen(5500, () => {
  console.log('server is runnign on localhost:5500');
});

const express = require('express');
const cors = require('cors');
const app = express();

// Abilita CORS per tutte le origini
app.use(cors({ origin: '*' }));

const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.json({ message: 'sono connesso' });
});

app.listen(PORT, () => {
  console.log(`Backend in ascolto sulla porta ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT;

if (!PORT) {
  throw new Error('PORT environment variable is not defined');
}

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});


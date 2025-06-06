const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/lab', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

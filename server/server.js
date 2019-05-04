const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});
// if (process.env.NODE_ENV === 'production') {
// }

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});

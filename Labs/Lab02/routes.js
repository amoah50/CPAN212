const express = require('express');
const router = express.Router();

// /name route
router.get('/name', (req, res) => {
  res.send('Your Name: Francis Amoah');
});

// /greeting route
router.get('/greeting', (req, res) => {
  res.send('Hello, Francis. Student Number: n01676890');
});

// /add route
router.get('/add', (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);
  if (!isNaN(x) && !isNaN(y)) {
    res.send(`Result: ${x + y}`);
  } else {
    res.send('Please provide valid numbers x and y.');
  }
});

// /calculate route
router.get('/calculate', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const operation = req.query.operation;

  if (isNaN(a) || isNaN(b)) return res.send('Invalid numbers');

  let result;
  switch (operation) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : 'Division by zero error'; break;
    case '**': result = a ** b; break;
    default: result = 'Invalid operation';
  }

  res.send(`Result: ${result}`);
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/name', (req, res) => {
    res.send('Francis');
});

router.get('/greeting', (req, res) => {
    res.send('Francis - Student Number: n01676890');
});

router.get('/add', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    const result = x + y;
    res.send(`Result: ${result}`);
});


router.get('/calculate', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const operation = req.query.operation;
    let result;

    switch (operation) {
       case "+":
        return res.send('${x + y}');
       case "-":
         return res.send('${x - y}');
        case "*":
         return res.send('${x * y}');
         case "/":
            if (y !=0) {
             return res.send('${x / y}');
        } else {
            return res.send("y cannot be 0");
        }
    default :
       break;
    }
} )


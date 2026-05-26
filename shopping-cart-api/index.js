const express = require('express');
const app = express();
const PORT = 3000;

let products = [
  { id: '1', name: 'Keyboard', price: 49.99, quantity: 1 },
  { id: '2', name: 'Mouse', price: 29.99, quantity: 2 },
]


// Middleware แปลง JSON body ให้อ่านได้
app.use(express.json());


// Custon Middleware: request logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// ทดสอบว่า sever ทำงาน
app.get('/', (req, res) => {
    res.json({ message: "Server is running" });
})

app.get('/products', (req, res) => {
  res.status(200).json(products)
})

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.status(200).json(product);
});

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

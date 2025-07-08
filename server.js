const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "main.html"));
});

app.get('/card', (req, res) => {
    res.sendFile(path.join(__dirname, "card.html"));
});

// 🔹 START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

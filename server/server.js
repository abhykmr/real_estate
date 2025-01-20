const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../client/build')));


app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

// Catch-all route to serve the React app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


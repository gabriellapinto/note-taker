const express = require('express');
const apiRouter = require('./routes/api');
const htmlRouter = require('./routes/html');

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded());
app.use(express.static('public'));
app.use(express.json());




app.use('/', htmlRouter);
app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));
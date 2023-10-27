const express = require('express');
const path = require('path');
const cors = require('cors');
const planetsRouter = require('./routes/plantes/planets.router');
const { planets } = require('./models/planets.model');
const morgan = require('morgan')

const launchesRouter = require('./routes/launches/lauches.router');

const app = express();


app.use(cors({
    origin: 'http://localhost/3000',
}));

app.use(morgan('combined'));
app.use(express.json());
app.use('/launch/',planetsRouter);
app.use(launchesRouter);
app.use(express.static(path.join(__dirname, '..', 'pubilc')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app ;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');

const eraRoutes = require('./Routes/eraRoutes');
const path = require("path");

<<<<<<< HEAD
const futureNoteRoutes = require('./routes/futureNotes');
=======
const futureNoteRoutes = require('./Routes/futureNotes');
>>>>>>> 4858fc4 (final)


require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"../frontend/dist")
app.use(express.static(buildpath));

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);

app.use("/api/eras", eraRoutes);
app.use('/api/future-notes', futureNoteRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user');
const weatherRouter = require('./routes/weather');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/weather', weatherRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/weather', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error(err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
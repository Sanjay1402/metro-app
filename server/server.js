const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const sendEmail = require('./controllers/sendEmail')

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());

app.get('/contactus',  (req, res) => {
   res.sendFile(__dirname + '/public/contactus.html')
})

app.post('/contactus',  sendEmail);

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})


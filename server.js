const express = require('express');
const path = require('path');

const app = express();

// Server routes...
// Server routes MUST be above webpack logic
app.get('/hello', (req, res) => res.send({ hi: 'there' }));

if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');

    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('dist'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

//////////////////////////////// EMAIL ///////////////////////////////////

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());

app.post('/contactus', (req, res) => {
    const { first, last, email, phone, date, comments, vegetarian } = req.body;
    const isVeggie = vegetarian ? 'vegetarian' : 'not vegetarian';

    const mailOptions = {
        from: 'Medvezhonok & Bunny <vololipu@gmail.com>',
        to: email,
        subject: `${first} See you at our Wedding!`,
        text: 'Thank You for your RSVP',
        html: `
            <p><b>Confirmation</p>
            <p><b>Name:</b> ${first} ${last}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Date you responded:</b> ${date}</p>
            <p><b>We have your food preferences as:</b> ${isVeggie}</p>
            <p><b>Your Comments:</b> ${comments}</p>
            <p><b>Date and time of the wedding:</b> 15th of July, 2017 at 5:00pm</p>
            <p><b>Location of the wedding:</b> TBD</p>
            <p>Thank You for celebrating with us!</p>
            <p>Please let us know if you have any questions</p>
            <p>-Vladimir & Elena</p>
        `
    };
    // create reusable transporter object using SMTP transport 
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'vololipu@gmail.com',
            pass: 'Number1fan!'
        }
    });

    const sendEmailPlease = () => {
        // send mail with defined transport object 
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Message sent: ${info.response}`);
            }
        });
    };

    sendEmailPlease();
});

//////////////////////////////// END EMAIL ///////////////////////////////////

app.listen(process.env.PORT || 3050, () => console.log('listening'));

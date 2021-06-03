require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* DB config */
const { mongoose } = require('../db/mongoose');
console.log(process.env.MONGODB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ROUTER CONFIG */
const router = require('./router/root');
router(app);

app.listen(5000)
// app.listen(process.env.PORT, () =>  {
//   console.log(`listening on ${process.env.PORT}`);
// })






// ________________________________________________
// const { Scale } = require('./models/Scale');

// Scale.create({ name: 'dorian', description: '1, 2, b3, 4, 5, 6, 7' }).then(() => {
//   const dorian = Scale.find({ name: 'dorian' }).then((d) => {
//     debugger
//    })
// });

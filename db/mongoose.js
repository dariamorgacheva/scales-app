const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(e => {
    console.log('mongo connection error!')
  });

module.exports = { mongoose };

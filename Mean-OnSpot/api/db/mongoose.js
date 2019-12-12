const mongoose = require('mongoose');
const config = require('../config/database');

mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/OnSpot', { useUnifiedTopology: true, useNewUrlParser: true } ).then(() => {
//     console.log('it works');
// }).catch((e) => {
//     console.log('it doesnt work');
//     console.log(e);
// });

mongoose.connect(config.database, { useUnifiedTopology: true, useNewUrlParser: true } ).then(() => {
    console.log('it works');
}).catch((e) => {
    console.log('it doesnt work');
    console.log(e);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

module.exports = {
    mongoose
};
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true} ).then(() => {
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
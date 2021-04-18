const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const models = require('./models/productModel')(app, mongoose);

// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Connection to DB
mongoose.connect('mongodb://productListUser:productListPassword@localhost:27017/promotions', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Requerimos cors
const cors = require('cors');
app.use(cors());

// routes

app.use(require('./routes/productos'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${3000}`);
}); 


module.exports = mongoose;

import express from 'express';
import mongoose  from 'mongoose';
import { mainRouter } from './routes/router';
import cors from 'cors';

const server = express();

const PORT = 3001;
// // const MONGODB_URI = 'mongodb://localhost';
// const MONGODB_DATABASE = 'local_widget';


// const dbURL = `${MONGODB_URI}/${MONGODB_DATABASE}`

// mongoose.connect(`${dbURL}?authSource=admin&retryWrites=true`, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('connected', (err, res) => {
//     console.log('mongoose connection established...');
// });

// db.on('error', err => {
//     console.log(err + '...mongoose error encountered');
// });

// test connection in local by entering a record
// // db.once('open', () => {
// //     console.log("Connection Successful!");

// //     // define Schema
// //     const BookSchema = new mongoose.Schema({
// //         name: String,
// //         price: Number,
// //         quantity: Number
// //     });

// //     // compile schema to model
// //     const Book = mongoose.model('Book', BookSchema, 'bookstore');

// //     // a document instance
// //     const book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });

// //     // save model to database
// //     book1.save((err, book) => {
// //       if (err) return console.error(err);
// //       console.log(book + " saved to bookstore collection.");
// //     });
// // });


server.use(cors({
    origin: '*',
    methods: [ 'GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH' ],
    preflightContinue: true,
    allowedHeaders: [
      '*',
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'Accept-Version',
      'device-id',
      'env',
      'User-IP',
    ],
  }))

server.use('/v1', mainRouter);

server.get('/', (req, res) => {
    res.send('Hi, it\'s working on port ' + PORT);
});

server.listen(PORT, null, () => {
    console.log(`Server is listening on ${PORT}`);
});

// error handling
process.on('uncaughtException', (error) => {
    console.log(error);
});
process.on('unhandledRejection', (error) => {
    console.log(error);
});
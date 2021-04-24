const mongoose = require('mongoose');
const connectionURL = process.env.connection_URL;
// const url =
//   'mongodb+srv://aditigupta:aditigupta@cluster0.4s3y9.mongodb.net/myFirstDatabase';
mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('connected'))
  .catch((err) => console.error(err));

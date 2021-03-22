//  crud operations = create read update and delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');
const connectionURL = process.env.connection_URL;
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  {useNewUrlParser: true, useUnifiedTopology: true},
  (error, client) => {
    if (error) {
      return console.log('unable to connect mongodb database');
    }
    const db = client.db(databaseName);
    // db.collection('users').findOne(
    //   {_id: new ObjectID('6051d4ddc223231fb0b7d4b8')},
    //   (error, user) => {
    //     if (error) {
    //       return console.log('unable to fetch');
    //     }
    //     console.log(user);
    //   }
    // );
    db.collection('tasks').findOne(
      {_id: new ObjectID('6053573e751bbd1a60c8c9fc')},
      (error, description) => {
        if (error) {
          return console.log('unable to fetch');
        }
        console.log(description);
      }
    );
    db.collection('tasks')
      .find({isCompleted: false})
      .toArray((error, user) => {
        console.log(user);
      });
    // db.collection('users')
    //   .find({age: 17})
    //   .toArray((error, user) => {
    //     console.log(user);
    //   });
    // db.collection('users')
    //   .find({age: 17})
    //   .count((error, count) => {
    //     console.log(count);
    //   });
    // db.collection('users').insertOne(
    //   {
    //     // _id: id,
    //     name: 'Aditya Gupta',
    //     age: 11,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('unable to insert user');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {description: 'Lunch', isCompleted: true},
    //     {description: 'study', isCompleted: false},
    //     {description: 'Exercise', isCompleted: true},
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to inserts tasks');
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);

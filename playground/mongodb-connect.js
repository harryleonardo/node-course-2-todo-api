// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user = {name: 'Andrew', age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c13d5021707cb3365ed20ce')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find({completed: false}).count().then((count) => {
        console.log(`Todos count: ${count}`);
        // console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });


    // db.collection('Users').insertOne({
    //     name: 'Harry',
    //     age: 25,
    //     location: 'Philadelphia'
    // }, (err,result) => {
    //     if (err) {
    //         return console.log('Unable to insert user ',err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    

    // client.close();
});

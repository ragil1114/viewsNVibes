const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost/';
const client = new MongoClient(url);

// Database Name
const dbName = 'viewsnvibes';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('tours');

  // the following code examples can be pasted here...
  // const findResult = await collection.find({tourDestination:'San Antonio'}).toArray();
  const findResult = await collection.find().toArray();
  console.log('Found documents =>', findResult);


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
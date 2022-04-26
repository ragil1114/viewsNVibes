const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedtours` array in User.js
const tourSchema = new Schema({
  tourGuide: 
    {
      type: String
    },
  description: {
    type: String,
    required: true,
  },
  // saved tour id from database
  tourId: {
    type: String,
    required: true,
  },
  tourDestination: {
      type: String,
      required: true,
  },
  image: {
    type: String,
    

  },
  tourName: {
    type: String,
    required: true,
  },
});

const Tours = model('Tours', tourSchema);

module.exports = Tours;
// module.export = tourSchema
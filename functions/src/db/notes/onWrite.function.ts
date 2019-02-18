'use strict';

const functions = require('firebase-functions');

exports.writeNote = functions.firestore
  .document('notes').onWrite((change, context) => {
    // ... Your code here
});
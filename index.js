const DataMonger = require('data-monger');
const pg = require('pg');
const mysql = require('mysql');
const mongodb = require('mongodb');
const sqlite = require('sqlite3');

let db = new DataMonger({
  dbType: 'SQLite',
  driver: sqlite,
  driverConstructor: 'data.db',
  options: {
    verbose: true,
  },
});

db.getSchema()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

db.collection('employees')
  .getSchema()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// db.collection('employees')
//   .findOne({
//     query: [
//       {
//         name: 'EmployeeId',
//         operator: '==',
//         value: '1',
//       },
//     ],
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db.table('employees')
//   .find({
//     query: [
//       {
//         name: 'Title',
//         operator: '==',
//         value: 'Sales Support Agent',
//       },
//     ],
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

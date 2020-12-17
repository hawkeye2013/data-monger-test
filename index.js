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

db.collection('employees')
  .findOne({
    EmployeeId: 1,
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

db.collection('employees')
  .find({
    Title: 'Sales Support Agent',
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

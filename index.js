const DataMonger = require('data-monger');
const pg = require('pg');
const mysql = require('mysql');
const mongodb = require('mongodb');

let dataMonger = new DataMonger({
  dbType: 'postgres',
  driver: pg,
  connectionInfo: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'DataMonger',
  },
});

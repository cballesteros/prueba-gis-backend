const promise = require('bluebird'); // or any other Promise/A+ compatible library;

const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);

/* //DEVELOPER MODE
const connection = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'gis_db',
    user: 'postgres', // 'postgres' is the default
    password: '25428506'
};

const dbInstance = pgp(connection); // database instance;
// END DEVELOPER MODE */

// PRODUCTION MODE
const connectionString = process.env.DATABASE_URL;

const dbInstance = pgp({connectionString: connectionString, ssl: { rejectUnauthorized: false}}); // database instance;
// END PRODUCTION MODE

module.exports = dbInstance;
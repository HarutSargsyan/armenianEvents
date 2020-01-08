const { Pool } = require('pg');
// Add postsgreSQL database as a client

const pool = new Pool({
  connectionString: 'postgres://qgljqfcahktyny:5c7125b72ba53a416271bf42c106f5a93b3d37159a3a65bf5f9d21e40df47788@ec2-54-217-228-25.eu-west-1.compute.amazonaws.com:5432/d3v03fthi6ov7u',
  ssl: true
});

module.exports = pool;
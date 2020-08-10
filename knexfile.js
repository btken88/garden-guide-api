// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: 'postgres:///gardenguideapp'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: __dirname + '/migrations' },
    seeds: { directory: __dirname + '/seeds/productions' }
  }
};

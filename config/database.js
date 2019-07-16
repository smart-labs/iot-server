module.exports = {
  url: process.env.DATABASE_URL || 'mongodb://localhost/alarm',
  flags: { useNewUrlParser: 'true', useCreateIndex: 'true' },
};

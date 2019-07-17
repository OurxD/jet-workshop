const PORT = process.env.PORT || 3000;

module.exports = {
  PORT,
  // HOST: `http://localhost:${PORT}/`,
  HOST: process.env.HOST || 'https://performance-workshop-orli.herokuapp.com/',
};

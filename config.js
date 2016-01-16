var config = {};


config.fs = {};

config.fs.client_id = process.env.FS_CLIENTID|| 'client_id';
config.fs.client_secret=  process.env.FS_CLIENTSECRET || 'client_secret';

config.port = process.env.PORT || 3001;

module.exports = config;
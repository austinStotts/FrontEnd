const Redis = require('ioredis');
const redis = new Redis({ host: 'PaintRedis' });

const set = (key, value) => {
  redis.set(key, value)
  .catch(err => console.log(err));
}

const get = (key, callback) => {
  redis.get(key)
  .then(value => callback(value))
  .catch(err => console.log(err));
}

module.exports = {
  set, get
}
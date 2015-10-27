var expect = require('expect');
var redis = require('../index');

describe('ready-flag', function () {
  var client;
  beforeEach(function () {
    client = redis.createClient({host: '192.168.99.100'});
  });

  it('is set on ready', function (done) {
    client.on('ready', function () {
      expect(client.ready).toEqual(true);
      done();
    });
  });
});

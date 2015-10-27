var expect = require('expect');
var redis = require('../index');

describe('quit', function () {
  var quitter;
  beforeEach(function () {
    quitter = redis.createClient({host: '192.168.99.100'});
  });

  it('emits the "end" event', function (done) {
    quitter.on('end', done);
    quitter.quit();
  });

  it ('unsets the connected-flag', function (done) {
    quitter.on('end', function () {
      expect(quitter.connected).toEqual(false);
      done();
    });
    quitter.quit();
  });
});

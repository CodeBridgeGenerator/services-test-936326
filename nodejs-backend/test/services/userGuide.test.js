const assert = require('assert');
const app = require('../../src/app');

describe('\'userGuide\' service', () => {
  it('registered the service', () => {
    const service = app.service('userGuide');

    assert.ok(service, 'Registered the service (userGuide)');
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'mobiles/tests/helpers';

module('Unit | Service | updateData', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:update-data');
    assert.ok(service);
  });
});

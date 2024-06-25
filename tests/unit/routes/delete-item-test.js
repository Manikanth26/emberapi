import { module, test } from 'qunit';
import { setupTest } from 'mobiles/tests/helpers';

module('Unit | Route | delete-item', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:delete-item');
    assert.ok(route);
  });
});

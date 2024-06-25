import { module, test } from 'qunit';
import { setupTest } from 'mobiles/tests/helpers';

module('Unit | Route | update-item', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:update-item');
    assert.ok(route);
  });
});

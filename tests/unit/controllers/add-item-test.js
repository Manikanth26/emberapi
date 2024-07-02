import { module, test } from 'qunit';
import { setupTest } from 'mobiles/tests/helpers';

module('Unit | Controller | add-item', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:add-item');
    assert.ok(controller);
  });
});

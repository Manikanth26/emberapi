import { module, test } from 'qunit';

import { setupTest } from 'mobiles/tests/helpers';

module('Unit | Adapter | object', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:object');
    assert.ok(adapter);
  });
});

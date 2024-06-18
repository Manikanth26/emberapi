import { module, test } from 'qunit';

import { setupTest } from 'mobiles/tests/helpers';

module('Unit | Adapter | item', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:item');
    assert.ok(adapter);
  });
});

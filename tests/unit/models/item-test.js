import { module, test } from 'qunit';

import { setupTest } from 'mobiles/tests/helpers';

module('Unit | Model | item', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('item', {});
    assert.ok(model);
  });
});

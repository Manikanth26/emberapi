import { module, test } from 'qunit';

import { setupTest } from 'mobiles/tests/helpers';

module('Unit | Model | object', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('object', {});
    assert.ok(model);
  });
});

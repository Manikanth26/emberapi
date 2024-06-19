import { module, test } from 'qunit';

import { setupTest } from 'mobiles/tests/helpers';

module('Unit | Serializer | objects', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('objects');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('objects', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});

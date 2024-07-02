import { module, test } from 'qunit';
import { setupRenderingTest } from 'mobiles/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | update-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UpdateForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <UpdateForm>
        template block text
      </UpdateForm>
    `);

    assert.dom().hasText('template block text');
  });
});

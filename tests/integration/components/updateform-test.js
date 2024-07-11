import { module, test } from 'qunit';
import { setupRenderingTest } from 'mobiles/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | updateform', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Updateform />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Updateform>
        template block text
      </Updateform>
    `);

    assert.dom().hasText('template block text');
  });
});

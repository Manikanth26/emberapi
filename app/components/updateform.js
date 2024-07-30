import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UpdateformComponent extends Component {
  @service store;
  @service itemData;

  @tracked name = '';
  @tracked dataId = this.itemData.item;
  @tracked errors = {};

  validate() {
    let errors = {};

    if (!this.name) {
      errors.name = 'Name is required';
    }

    this.errors = errors;
    return Object.keys(errors).length === 0;
  }

  @action
  nameValue(event) {
    this.name = event.target.value;
  }

  @action
  updateItem(event) {
    event.preventDefault();
    let value = this.name;
    if (this.validate()) {
    this.store
      .findRecord('objects', this.itemData.item)
      .then(function (objects) {
        objects.name = value;
      });
    }
  }
}

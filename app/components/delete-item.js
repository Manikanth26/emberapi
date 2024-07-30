import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DeleteItemComponent extends Component {
  @service store;
  @service itemData;
  @tracked data;

  constructor() {
    super(...arguments);
    this.deleteData();
  }

  async deleteData() {
    this.data = await this.store.findRecord('objects', this.itemData.item);
  }

  @action
  deleteItem() {
    this.store
      .findRecord('objects', this.itemData.item)
      .then(function (object) {
        object.destroyRecord();
      });
  }
}

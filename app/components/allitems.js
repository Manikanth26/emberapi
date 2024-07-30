import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AllitemsComponent extends Component {
  @service store;
  @tracked data = [];

  constructor() {
    super(...arguments);
    this.allData();
  }

  async allData() {
    this.data = await this.store.findAll('objects');
  }
}

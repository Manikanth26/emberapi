import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class UpdateFormComponent extends Component {
    @service store;
  @tracked id = '';
  @tracked name = '';

  @action
  idValue(event) {
    this.id = event.target.value;
  }

  @action
  nameValue(event) {
    this.name = event.target.value;
  }

  @action
  addItem(event) {
    event.preventDefault();
    let addNewItem = this.store.createRecord('objects', {
      id: this.id,
      name: this.name,
    });
    addNewItem.save();
    console.log(this.id);
    console.log(this.name);
    console.log(this.store.findAll('objects'));
    console.log(addNewItem);
  }
}

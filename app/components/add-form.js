import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class UpdateFormComponent extends Component {
  @service store;
  @tracked id = '';
  @tracked name = '';
  @tracked color = '';
  @tracked capacity = '';
  @tracked more = false;
  @tracked errors = {};

  validate(){
    let errors = {};

    if(!this.id){
      errors.id = "ID is required";
    }

    if(!this.name){
      errors.name = "Name is required";
    }

    this.errors = errors;
    return Object.keys(errors).length === 0;
  }

  @action
  idValue(event) {
    this.id = event.target.value;
  }

  @action
  nameValue(event) {
    this.name = event.target.value;
  }

  @action
  moreValue(event){
    this.more = event.target.value === "Yes";
  }

  @action
  colorValue(event) {
    this.color = event.target.value;
  }
  @action
  capacityValue(event) {
    this.capacity = event.target.value;
  }

  @action
  addItem(event) {
    event.preventDefault();
    if(this.validate()){
      let addNewItem = this.store.createRecord('objects', {
        id: this.id,
        name: this.name,
        color: this.color,
        capacity: this.capacity,
      });
      addNewItem.save();
    }
    
  }
}

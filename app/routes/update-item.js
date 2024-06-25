import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UpdateItemRoute extends Route {
  @service store;

  idData = null;
  async model(params) {
    this.idData = params.id;
    return this.store.findRecord('objects', params.id);
  }

  @action
  updateItem(){
    this.store.findRecord('objects', this.idData).then(function(objects){
        objects.name = "Samsung S24 Ultra"
    });
  }
}

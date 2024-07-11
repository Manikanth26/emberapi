import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UpdateItemRoute extends Route {
  @service store;
  @service itemData;

  async model(params) {
    this.itemData.item = params.id;
  }

}

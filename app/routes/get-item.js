import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class GetItemRoute extends Route {
  @service itemData;

  async model(params) {
    const item = this.itemData.items.find((item) => item.id === params.id);
    console.log(item);
    return item;
  }
}

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AllItemsRoute extends Route {
  @service store;
  @service itemData;
}

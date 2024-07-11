import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ItemDataService extends Service {
  @tracked item = '';
}

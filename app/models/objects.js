import Model, { attr } from '@ember-data/model';

export default class ObjectModel extends Model {
  @attr('string') name;
  @attr('string') color;
  @attr('string') capacity;
  @attr('string') Description;
  @attr('string') price;
  @attr('string') generation;
  @attr('string') year;
}

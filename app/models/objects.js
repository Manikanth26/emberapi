import Model, {attr} from '@ember-data/model';

export default class ObjectModel extends Model {
    @attr('string') id;
    @attr('string') name;
}

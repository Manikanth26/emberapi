import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UpdateformComponent extends Component {
    @service store;
    @service itemData;

    @tracked name = '';

    @action
    nameValue(event) {
        this.name = event.target.value;
    }

    @action
    updateItem(event) {
        event.preventDefault();
        let value= this.name;
        this.store.findRecord('objects', this.itemData.item).then(function (objects) {
        objects.name = value;
        });
    }
}

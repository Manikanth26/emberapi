import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GetItemComponent extends Component {
    @service store;
    @service itemData;
    @tracked data;

    constructor(){
        super(...arguments);
        this.retrive();
    }

    async retrive() {
        this.data = await this.store.findRecord('objects', this.itemData.item);
    }
}

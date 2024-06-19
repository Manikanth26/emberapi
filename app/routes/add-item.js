import Route from '@ember/routing/route';
import { action } from '@ember/object'
import { inject as service } from '@ember/service';

export default class AddItemRoute extends Route {
    @service store;

    @action
    addItem() {
        let addNewItem = this.store.createRecord('objects',{
            id:14,
            name: 'Samsung S24 Ultra'
        });

        addNewItem.save().then(response=>{
            console.log("Record saved",response);
        }).catch(error=>{
            console.log("Error",error);
        })
    }
}

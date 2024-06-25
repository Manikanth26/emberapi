import EmberRouter from '@ember/routing/router';
import config from 'mobiles/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('all-items');
  this.route('add-item');
  this.route('get-item', { path: 'get-item/:id' });
  this.route('update-item', { path: 'update-item/:id' });
  this.route('delete-item', { path: 'delete-item/:id' });
});

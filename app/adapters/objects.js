import RESTAPIAdapter from '@ember-data/adapter/rest';

export default class ObjectAdapter extends RESTAPIAdapter {
  host = 'https://api.restful-api.dev';

  pathForType(type) {
    return type;
  }
}

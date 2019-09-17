import Route from '@ember/routing/route';

export default class ShopRoute extends Route {
  model() {
    return this.store.findAll('item');
  }
}
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  cart: service('shopping-cart'),

  actions: {
    remove(item) {
      this.cart.removeObject(item);
    },
    add(item) {
      this.cart.pushObject(item);
    },
    empty() {
      this.cart.clear();
    }
  }
});



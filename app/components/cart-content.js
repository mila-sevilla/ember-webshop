import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  cart: service('shopping-cart'),

  actions: {
    remove(item) {
      this.cart.remove(item);
    },
    add(item) {
      this.cart.add(item);
    },
    empty() {
      this.cart.empty();
    }
  }
});



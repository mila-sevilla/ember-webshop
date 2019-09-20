import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  cart: service('shopping-cart'),

  actions: {
    add(item) {
      this.cart.add(item);
    },
  }
});



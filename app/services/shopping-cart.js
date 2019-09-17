import { A } from '@ember/array';
import Service from '@ember/service';

export default Service.extend({
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', A([{
      id: 'GR1',
      name: 'Green tea',
      price: 3.11,
      src: '../assets/tea.png'
    }, {
        id: 'SR1',
        name: 'Strawberries',
        price: 5.00,
        src: '../assets/strawberry.png'
      }, {
        id: 'CF1',
        type: 'items',
        name: 'Coffee',
        price: 11.23,
          src: '../assets/coffee.png'
      }]));
  },

  add(item) {
    this.items.pushObject(item);
  },

  remove(item) {
    this.items.removeObject(item);
  },

  empty() {
    this.items.clear();
  }
});
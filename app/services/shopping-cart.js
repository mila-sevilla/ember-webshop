import { A } from '@ember/array';
import Service from '@ember/service';
import { get, set, computed } from '@ember/object';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('items', A([]));
  },

  add(item) {
    this.items.pushObject(item);
  },

  remove(item) {
    this.items.removeObject(item);
  },

  empty() {
    this.items.clear();
  },

  // getLength(name) {
    // return this.items.filter(item => item.name === name).length
  // },
  // getLength(item) {
  //   let itemList = this.items.filterBy(item.name);
  //   return itemList.length 
  // }
});

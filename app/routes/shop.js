import Route from '@ember/routing/route';

export default class ShopRoute extends Route {
  model() {
    return this.store.findAll('item');

    // return [
    //   {
    //     id: "GR1",
    //     name: "Green tea",
    //     price: 3.11,
    //     src: "../assets/tea.png"
    //   }, {
    //     id: "SR1",
    //     name: "Strawberries",
    //     price: 5.00,
    //     src: "../assets/strawberry.png"
    //   }, {
    //     id: "CF1",
    //     name: "Coffee",
    //     price: 11.23,
    //     src: "../assets/coffee.png"
    //   }
    // ]
  }
}
export default function() {

    this.namespace = '/api';

    this.get('/items', function () {
      return {
        data: [{
          id: 'GR1', 
          type: 'items',
          attributes: { 
            name: 'Green tea',
            price: 3.11,
            src: '../assets/tea.png'
          }
        }, {
          id: 'SR1',
          type: 'items',
          attributes: {
            name: 'Strawberries',
            price: 5.00,
            src: '../assets/strawberry.png'
          }
        }, {
          id: 'CF1',
          type: 'items',
          attributes: {
            name: 'Coffee',
            price: 11.23,
            src: '../assets/coffee.png'
          }
      }]
    };
  });
}
   

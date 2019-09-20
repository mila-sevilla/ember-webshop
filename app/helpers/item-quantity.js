import { helper } from '@ember/component/helper';

export default helper(function itemQuantity(params) {
  const items = params[0]
  const name = params[1]
  return items.filterBy('name', name).length
});

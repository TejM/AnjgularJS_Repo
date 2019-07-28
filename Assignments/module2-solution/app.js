(function() {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.list = ShoppingListCheckOffService.getList(1);

    toBuy.bought = function(itemIndex) {
      ShoppingListCheckOffService.transfer(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.list = ShoppingListCheckOffService.getList(2);
  }
  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var list1 = [
      { name: 'Cookies', quantity: 10 },
      { name: 'Bananas', quantity: 100 },
      { name: 'Toys', quantity: 6 },
      { name: 'Dildos', quantity: 300 },
      { name: 'Yaakovs', quantity: 1 }
    ];

    var list2 = [];

    service.transfer = function(itemIndex) {
      list2.push(list1.splice(itemIndex, 1)[0]);
      console.log('List 1', list1);
      console.log('List 2', list2);
    };

    service.getList = function(num) {
      if (num == 1) {
        return list1;
      }
      if (num == 2) {
        return list2;
      }
    };
  }
})();

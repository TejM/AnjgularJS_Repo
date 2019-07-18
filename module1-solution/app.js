(function() {
  'use strict';
  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.enteredString = '';
    $scope.returnMessage = '';

    $scope.calculateMessage = function() {
      $scope.returnMessage = generateReply();
    };

    function countStringWords(string) {
      var words = string.split(',');
      words = words.filter(function(entry) {
        return entry.trim() != '';
      });
      return words.length;
    }

    function generateReply() {
      var message = '';
      var num = countStringWords($scope.enteredString);
      if (num == 0) {
        message = 'Please enter data first';
      } else if (num < 4 && num > 0) {
        message = 'Enjoy!';
      } else {
        message = 'Too much!';
      }
      return message;
    }
  }
})();

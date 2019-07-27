(function() {
  'use strict';
  angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.enteredString = '';
    $scope.returnMessage = '';

    $scope.calculateMessage = function() {
      $scope.returnMessage = GenerateReply();
    };

    function CountStringWords(string) {
      var words = string.split(',');
      words = words.filter(function(entry) {
        return entry.trim() != '';
      });
      return words.length;
    }

    function GenerateReply() {
      var message = '';
      var num = CountStringWords($scope.enteredString);
      if (num == 0) {
        message = 'Please enter data first';
      } else if (num < 4 && num > 0) {
        message = 'Enjoy!';
      } else {
        message = 'Too much!';
      }
      return message;
    }

    function TrueFalse() {
      console.log($scope.returnMessage);
      return true;
      // if ($scope.returnMessage == 'Please  data first') {
      //   return true;
      // } else {
      //   return false;
      // }
    }
  }
})();

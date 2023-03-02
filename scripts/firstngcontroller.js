angular
  .module('FirstNgApp')
  .controller('firstNgController', function($scope, firstNgFactory) {

	  	$scope.instructions = firstNgFactory.getFirstNg();

   });
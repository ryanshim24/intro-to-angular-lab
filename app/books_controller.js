var bookly = angular.module("booklyApp", []);

bookly.controller('BooksController', function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.total = 0;
  $scope.items = [];

  // add to that cart
  $scope.addCart = function(book) {
    $scope.items.push(book);
    console.log($scope.items);
    $scope.total += book.price;
  };

  //delete whole cart
  $scope.deleteItem = function() {
    $scope.items = [];
    $scope.total = 0;
  };

  // delete individual items
  $scope.deleteInd = function(item) {
    console.log(item);
    var select = $scope.items.indexOf(item);
    $scope.items.splice(select, 1);
    $scope.total -= item.price;
  };

});

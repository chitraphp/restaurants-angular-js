bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function(){
      $scope.restaurants.push({ name:$scope.restaurantName, location:$scope.restaurantLocation, cuisine: $scope.restaurantCuisine, price: $scope.restaurantPrice });
      $scope.restaurantName = null;
      $scope.restaurantLocation = null;
      $scope.restaurantCuisine = null;
      $scope.restaurantPrice = null;
  };

  $scope.deleteRestaurant = function(restaurant){
      var index = $scope.restaurants.indexOf(restaurant);
      $scope.restaurants.splice(index,1);

  };

  $scope.searchByRestaurant = function(string){
      if( string === $scope.restaurants.name){

          return $scope.restaurants.name;
      }



  };

});

var app = angular.module("mainApp", []);
app.controller('people' , function($scope, $http){
// making the request to the json file 
$http.get("https://api.github.com/users")
.then(function(response){
    console.log(response.data);
    $scope.persons = response.data;
})
})
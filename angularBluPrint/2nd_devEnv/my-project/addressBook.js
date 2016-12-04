function PeopleController($scope){
  $scope.people = [
    {name : "John Doe", phone : "1234567", city: "New York"},
    {name : "Sarah Parker", phone : "3938402", city: "Boston"},
    {name : "Little John", phone : "13940234", city: "Los Angeles"},
    {name : "Adam Doe", phone : "4954345", city: "Las Vegas"}
  ];

  $scope.Save = function(){
    $scope.people.push({name : $scope.newPerson.name, phone : $scope.newPerson.phone, city : $scope.newPerson.city});
    $scope.formVisibility = false;
  };

  $scope.ShowForm = function(){
    $scope.formVisibility = true;
  };
}

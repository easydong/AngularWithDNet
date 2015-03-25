studentsManagement.controller("stController", [
    "$scope", "$routeParams", function($scope, $routeParams) {
        $scope.name = $routeParams.studentId;
    }
]);
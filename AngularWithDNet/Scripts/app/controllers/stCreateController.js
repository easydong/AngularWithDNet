studentsManagement.controller("stCreateController", [
    "$scope", "stDataService", "$rootScope", function($scope, stDataService, $rootScope) {
        $rootScope.title = "Create student";
        $scope.saveStudent = function(student) {
            stDataService.update(student);
        };
    }
]);
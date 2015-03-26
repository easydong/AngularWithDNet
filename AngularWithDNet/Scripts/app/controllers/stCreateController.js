studentsManagement.controller("stCreateController", [
    "$scope", "stDataService", function($scope, stDataService) {
        $scope.saveStudent = function(student) {
            stDataService.update(student);
        };
    }
]);
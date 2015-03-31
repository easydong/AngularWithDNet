studentsManagement.controller("stsInfoCardController", [
    "$scope", "$route", "stDataService", function($scope, $route, stDataService) {
        $scope.students = $route.current.locals.students;
        $scope.removeStudent = function(id, student) {
            stDataService.remove({ id: id }, function() {
                alertify.log(student.Name + " is removed.");
                $scope.students.splice(student, 1);
            });
        };
    }
]);
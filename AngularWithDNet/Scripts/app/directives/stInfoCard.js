studentsManagement.directive("stInfoCard", function() {
    return {
        templateUrl: "/templates/StInfoCard.html",
        restrict: "E",
        scope: {student:"="},
        controller: function($scope,stDataService) {
            $scope.removeStudent = function(id,student) {
                stDataService.remove({ id: id },function() {
                    alertify.log(student.Name + " is removed.");
                    $scope.student = null;
                });
            };
        }
    }
});
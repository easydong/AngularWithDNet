studentsManagement.directive("stInfoCard", function() {
    return {
        templateUrl: "/templates/StInfoCard.html",
        restrict: "E",
        scope: { student: "=", remove: "&" }
    }
});
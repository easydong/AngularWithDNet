studentsManagement.directive("collapsible", function() {
    return{
        restrict: "E",
        scope: { title: "=",student:"=" },
        transclude: true,
        replace:true,
        template: "<div ng-click='toggleVisibility()' class='well well-sm'>{{title}}<div ng-show='visible' ng-transclude></div></div>",
        controller: function($scope) {
            $scope.visible = false;
            $scope.toggleVisibility = function() {
                $scope.visible = !$scope.visible;
            }
        }
    }
});
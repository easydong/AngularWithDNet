
    angular.module("datagrid", []).directive("ngGrid", function() {
        return {
            template: "<table class='table'>" +
                "       <thead>" +
                "           <tr><th ng-if='ngGrid.options.hasMultiselect'><input type='checkbox' ng-checked='$parent.ngGrid.data.length===$parent.selectedElements.length' ng-click='$parent.selectAll($event)' /></th>" +
                "               <th ng-repeat='column in ngGrid.columns'>{{column.headerText}}</th>" +
                "           </tr>" +
                "       </thead>" +
                "       <tbody>" +
                "           <tr ng-repeat='row in ngGrid.data'><td ng-if='ngGrid.options.hasMultiselect'><input type='checkbox' ng-checked='$parent.$parent.selectedElements.indexOf($parent.row) > -1' ng-click='$parent.$parent.stateChanged($parent.row,$event)' /></td>" +
                "               <td  ng-repeat='column in ngGrid.columns'>{{row[column.rowText]}}</td>" +
                "           </tr>" +
                "       </tbody>" +
                "     </table><br/><span>{{selectedElements}}</span>",
            restrict: "A",
            scope: { ngGrid: "=" },
            link: function ($scope, elements, attrs, controller) {
                $scope.elementChecked = true;
                $scope.selectedElements = [];
                $scope.stateChanged = function (row, $event) {
                    console.log($event);
                    if ($scope.selectedElements.indexOf(row) < 0 && $event.currentTarget.checked) {
                        $scope.selectedElements.push(row);
                    } else if (!$event.currentTarget.checked) {
                        $scope.selectedElements.splice(row, 1);
                    }
                };
                $scope.selectAll = function ($event) {
                    if ($event.currentTarget.checked) {
                        for (var i = 0; i < $scope.ngGrid.data.length; i++) {
                            if ($scope.selectedElements.indexOf($scope.ngGrid.data[i]) < 0) {
                                $scope.selectedElements.push($scope.ngGrid.data[i]);
                            }
                        }
                    } else {
                        $scope.selectedElements = [];
                    }
                };
            }
        }
    });
studentsManagement.factory("stDataService", [
    "$http","$q","$resource",
    function ($http, $q, $resource) {
        var deferred = $q.defer();
        return {
            students: function () {
                $resource("/api/StudentsApi").query(function(data) {
                    deferred.resolve(data);
                },function(error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            }
        }
    }
]);
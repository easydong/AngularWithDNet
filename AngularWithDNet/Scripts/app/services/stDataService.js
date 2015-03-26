studentsManagement.factory("stDataService", [
    "$resource",
    function($resource) {
        return $resource("api/StudentsApi", {}, {
            query: { method: "GET", isArray: true },
            update: { method: "POST" },
            get: { method: "GET", url: "/api/StudentsApi?name=:stName" }
        });
    }
]);
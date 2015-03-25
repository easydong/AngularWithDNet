studentsManagement.factory("myCache", [
    "$cacheFactory", function($cacheFactory) {
        return $cacheFactory("myCache", { capacity: 3 });
    }
]);
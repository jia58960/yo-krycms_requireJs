//分页filter,主要逻辑:从start开始截取目标数组input
define(['filters/filters'],
    function (filters) {
        filters.filter('offset', function () {
            return function (input, start) {
                start = parseInt(start, 10);
                return input.slice(start);
            };
        });
    });
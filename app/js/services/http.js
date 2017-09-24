function HTTP($http, $httpParamSerializer) {
    'ngInject';

    const service = {};

    service.get = function (query) {
        return $http({
           method: 'GET',
            cache: false,
            url: `http://192.168.1.152:8080/api/v1/person?${$httpParamSerializer(query)}`,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return service;

}

export default {
    name: 'HTTP',
    fn: HTTP
};

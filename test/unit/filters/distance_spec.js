describe('Unit: distance', function () {

    let $filter;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        // mock the filter
        angular.mock.inject((_$filter_) => {
            $filter = _$filter_;
        });
    });

    it('should get distance in km from lat & lon', function () {
        const testObj = {
            lat: 57.149651,
            lon: -2.099075
        };
        const result = $filter('distance')(testObj);

        expect(result).toEqual('527.1');
    });

});

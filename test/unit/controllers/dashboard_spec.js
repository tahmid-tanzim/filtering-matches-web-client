describe('Unit: DashboardCtrl', function () {

    let ctrl;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        angular.mock.inject(($controller) => {
            ctrl = $controller('DashboardCtrl');
        });
    });

    it('should exist', function () {
        expect(ctrl).toBeDefined();
    });

    it('should have an options variable equal to Array of Objects', function () {
        expect(ctrl.options).toEqual([
            {name: 'All', value: null},
            {name: 'Yes', value: true},
            {name: 'No', value: false}
        ]);
    });

    it('should have a filter variable equal to Object', function () {
        expect(ctrl.filter).toEqual({
            has_photo: null,
            in_contact: null,
            favourite: null,
            compatibility_score: [1, 99],
            age: [18, 95],
            height: [135, 210],
            distance_index: null
        });
    });

});

function DashboardCtrl(HTTP) {
    'ngInject';

    const vm = this;

    vm.options = [
        {name: 'All', value: null},
        {name: 'Yes', value: true},
        {name: 'No', value: false}
    ];

    vm.search = () => {
        HTTP.get(vm.filter)
            .then(({data}) => {
                console.log("Success: ", JSON.stringify(data.matches, null, 2));
                vm.persons = data.matches;
            }, ({data, status}) => {
                console.log("Error: ", data, status);
            });
    };

    vm.init = () => {
        vm.filter = {
            has_photo: null,
            in_contact: null,
            favourite: null,
            compatibility_score: [1, 99],
            age: [18, 95],
            height: [135, 210],
            distance_in_km: null
        };
        vm.search();
    };

    vm.init();
}

export default {
    name: 'DashboardCtrl',
    fn: DashboardCtrl
};

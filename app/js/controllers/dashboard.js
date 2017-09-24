function DashboardCtrl(HTTP) {
    'ngInject';

    const vm = this;

    vm.filter = {
        has_photo: null,
        in_contact: null,
        favourite: null,
        compatibility_score: {
            min: 1,
            max: 99
        },
        age: {
            min: 18,
            max: 95
        },
        height: {
            min: 135,
            max: 210
        },
        distance_in_km: 0
    };

    vm.options = [
        {name: 'All', value: null},
        {name: 'Yes', value: true},
        {name: 'No', value: false}
    ];

    HTTP.get(vm.filter)
        .then(({data}) => {
            console.log("Success: ", JSON.stringify(data.matches, null, 2));
            vm.persons = data.matches;
        }, ({data, status}) => {
            console.log("Error: ", data, status);
        });
}

export default {
    name: 'DashboardCtrl',
    fn: DashboardCtrl
};

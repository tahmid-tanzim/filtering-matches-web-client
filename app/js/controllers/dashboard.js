function DashboardCtrl(HTTP) {
    'ngInject';
    // ViewModel
    const vm = this;

    vm.filter = {
        has_photo: null,
        in_contact: null,
        favourite: null,
        slider: {
            min: 100,
            max: 180,
            options: {
                floor: 0,
                ceil: 450
            }
        }
    };

    vm.options = [
        {name: 'All', value: null},
        {name: 'Yes', value: true},
        {name: 'No', value: false}
    ];

    const {matches} = HTTP.matches();
    vm.persons = matches;
}

export default {
    name: 'DashboardCtrl',
    fn: DashboardCtrl
};

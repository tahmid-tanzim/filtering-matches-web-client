function DashboardCtrl(HTTP) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.filter = {
    has_photo: true,
    in_contact: false,
    favourite: null
  };

  const {matches} = HTTP.matches();
  vm.persons = matches;
}

export default {
  name: 'DashboardCtrl',
  fn: DashboardCtrl
};

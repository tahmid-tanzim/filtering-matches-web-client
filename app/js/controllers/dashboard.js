function DashboardCtrl(HTTP) {
  'ngInject';
  // ViewModel
  const vm = this;

  vm.title = 'Hello World';

  const {matches} = HTTP.matches();
  vm.persons = matches;
}

export default {
  name: 'DashboardCtrl',
  fn: DashboardCtrl
};

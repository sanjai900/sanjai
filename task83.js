angular.module('todoApp', [])
  .controller('TodoController', function() {
    var vm = this;

    vm.tasks = [];

    vm.addTask = function() {
      if (vm.newTask !== '') {
        vm.tasks.push(vm.newTask);
        vm.newTask = '';
      }
    };

    vm.removeTask = function(index) {
      vm.tasks.splice(index, 1);
    };
  });

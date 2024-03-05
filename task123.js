angular.module('taskListApp', [])
  .controller('TaskListController', function() {
    var vm = this;
    vm.tasks = [];

    vm.addTask = function(taskName) {
      if (taskName.trim() !== '') {
        vm.tasks.push({ name: taskName });
        vm.taskName = '';
      }
    };

    vm.editTask = function(task) {
      var editedTaskName = prompt('Edit task', task.name);
      if (editedTaskName !== null && editedTaskName.trim() !== '') {
        task.name = editedTaskName;
      }
    };

    vm.deleteTask = function(task) {
      var index = vm.tasks.indexOf(task);
      vm.tasks.splice(index, 1);
    };
  });

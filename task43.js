angular.module('calendarApp', [])
  .controller('CalendarController', function() {
    var vm = this;
    vm.calendar = [];
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (var i = 1; i <= daysInMonth; i++) {
      var date = new Date(currentYear, currentMonth, i);
      var dayOfWeek = date.getDay();
      var events = [];

      vm.calendar.push({
        date: i,
        dayOfWeek: dayOfWeek,
        events: events
      });
    }
    vm.addEvent = function(day) {
      var eventName = prompt('Enter event name:');
      if (eventName) {
        day.events.push(eventName);
      }
    };
  });

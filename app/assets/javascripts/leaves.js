var events = []; //The array

$(document).ready(function(){
  $('input[id="leave_date_picker"]').daterangepicker({
     autoUpdateInput: false,
    locale: {
            format: 'DD/MM/YYYY'
        },
    "minDate":  $('#current_date').data("todays-date")
  });

  $('input[id="leave_date_picker"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
      $('#leave_leave_date_from').val(picker.startDate.format('DD/MM/YYYY'));
      $('#leave_leave_date_to').val(picker.endDate.format('DD/MM/YYYY'));
  });

  $("tr[data-link]").click(function() {
    window.location = $(this).data("link")
  });

})

$(document).ready(function(){

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    buttonText: {
      today: 'today',
      month: 'month',
      week: 'week',
      day: 'day'
    },
    eventLimit: true, // for all non-agenda views
    views: {
       agenda: {
           eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
       }
     },
      events: $('#calendar').data("leaves-data"),
      eventClick: function(events) {
          if (event.url) {
              window.open(event.url);
              return false;
          }
      }
  });
});

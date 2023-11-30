$(document).ready(function() {
  let currentTime = moment();
  let momentForLabels = moment();

  console.log(moment().set('hour', 17).format('LT'));


  $("#currentDay").text(currentTime.format('LL'));

  let times = [
    moment().set('hour', 8).set('minute', 0).set('second', 0).set('millisecond', 0),
    moment().set('hour', 9).set('minute', 0).set('second', 0).set('millisecond', 0),
    moment().set('hour', 10).set('minute', 0).set('second', 0).set('millisecond', 0),
    moment().set('hour', 11).set('minute', 0).set('second', 0).set('millisecond', 0),
    moment().set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0),
    moment().set('hour', 13).set('minute', 0).set('second', 0).set('millisecond', 0),
    moment().set('hour', 14).set('minute', 0).set('second', 0).set('millisecond', 0),
    moment().set('hour', 15).set('minute', 0).set('second', 0).set('millisecond', 0),
    moment().set('hour', 16).set('minute', 0).set('second', 0).set('millisecond', 0),
    moment().set('hour', 17).set('minute', 0).set('second', 0).set('millisecond', 0),
    
  ];

  console.log(currentTime.format());

  for(let i = 0; i < times.length; i++) {
    let row = $("<tr>");
    let rowLabel = $("<td>");
    let rowTimeSlot = $("<td>");
    let rowTextInput = $("<textarea>");
    let rowButton = $("<td>");

    rowLabel.text(times[i].format("LT"));
    rowButton.text("save");

    row.addClass('row');
    rowLabel.addClass('hour');

    if(currentTime.set('minute', 0).set('second', 0).set('millisecond', 0).diff(times[i], 'hours') < 0) {
    rowTimeSlot.addClass('future');
    } else if (currentTime.set('minute', 0).set('second', 0).set('millisecond', 0).diff(times[i], 'hours') === 0) {
      rowTimeSlot.addClass('present');
      } else {
        rowTimeSlot.addClass('past');
      }

      rowButton.addClass('saveBtn');
      rowTextInput.addClass('textarea');


      rowTextInput.attr("slot", times[i].format("LT"));
      rowTextInput.attr("id", times[i].format("LT"));
      rowButton.attr("slot", times[i].format("LT"));


      rowTextInput.text(localStorage.getItem(times[i].format("LT")));


      rowTimeSlot.append(rowTextInput);
      row.append(rowLabel);
      row.append(rowTimeSlot);
      row.append(rowButton);


      $("#schedule").append(row);








  }

  $(".saveBtn").on("click", function() {
    let slotId = $(this).attr("slot");

    localStorage.setItem(slotId, document.getElementById(slotId).value);
  });
});


$( document ).ready(function() {
  if (localStorage["tableData"] != "" || undefined) {
    $("#myTable tbody").replaceWith(localStorage["tableData"])
  }
});

var $removeButtonHTML = '<button type="submit" class="btn btn-danger removeRow">Remove Row</button>';

$("button#createUser").on( "click", "", function() {

  var $userInfo = [ $('[type=email]').val() , 
                    $('[type=password]').val() ,
                    $removeButtonHTML
                  ]

  var $numberOfCols = $('#myTable th').size();
  $myRow = $('<tr/>');

  for (i = 0; i < $numberOfCols; ++i) {
    $myRow.append( $('<td/>').html($userInfo[i]) );
  }

  $($myRow).addClass("userRow")
  $('#myTable').append( $($myRow) );

  return false;

});

$( document ).on( "click", "button.removeRow", function() {
  $(this).parent().parent().remove();

  return false;
});

$("button#saveUsers").on( "click", "", function() {

  theTable = $('#myTable').html();
  localStorage["tableData"] = theTable;

  return false;
});

$( document ).on( "click", "button#clearUsers", function() {
  $("#myTable td").remove();
  theTable = $('#myTable').html();
  localStorage["tableData"] = "";

  return false;
});

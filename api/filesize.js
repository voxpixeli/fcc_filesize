
$(document).ready(function() {
  $('#fileForm').submit(function() {
    $(this).ajaxSubmit({
      error: function(err) {
        $("#result").empty().text("Error");
      },
      success: function(response) {
        $("#result").empty().text(response.size);  // output size from JSON object
      }
    });
  return false;
  });    
});

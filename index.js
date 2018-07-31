$(document).ready(function() {
  // we have access to the MOVIES variable, b/c it is a global variable set in the file movies.js
  $("#title").html(movies.Titanic.title)
  $("#Terminator-2").on("click", function() {
    $("#title").html(movies.Terminator2.title)
})
})
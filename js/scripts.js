$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    $(".name1").text(name);
    $("#postcard").show();
  });
});

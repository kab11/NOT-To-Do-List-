//Check Off Specific Todos By clicking
$("ul").on("click", "li", function(){ //ensures that lis that are added later toggle
  $(this).toggleClass("completed");
});

//Click on 'X' to delete Todo
$("ul").on("click", "span", function(event) { //same as above
  var parentLi = $(this).parent();
  $(parentLi).fadeOut(1000, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//Click 'ENTER' to add a Todos
$("input[type='text']").keypress(function(event) {
  if(event.which === 13) {
      $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + $("input").val());
      $(this).val("");
  };
});

//Fade the input line in and out
$(".fa-pencil-square-o").click(function() {
  $("input[type='text']").fadeToggle();
});

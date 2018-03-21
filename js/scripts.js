var liters1 = function(gallons) {
  return gallons * 3.785;
};

var grams1 = function(oz) {
  return oz * 28;
};

var grams2 = function(pounds) {
  return pounds * 454;
};

var liters2 = function(cups) {
  return cups * 0.24;
};



$(document).ready(function(){
  $("form#convert1").submit(function(event) {
    event.preventDefault();
    var gallons = parseInt($("#gallons").val());
    var result = liters1(gallons);
    $("#gallons-output").text(result);

  });
});

$(document).ready(function(){
  $("form#convert2").submit(function(event) {
    event.preventDefault();
    var oz = parseInt($("#oz").val());
    var result = grams1(oz);
    $("#oz-output").text(result);

  });
});

$(document).ready(function(){
  $("form#convert3").submit(function(event) {
    event.preventDefault();
    var pounds = parseInt($("#pounds").val());
    var result = grams2(pounds);
    $("#pounds-output").text(result);

  });
});

$(document).ready(function(){
  $("form#convert4").submit(function(event) {
    event.preventDefault();
    var cups = parseInt($("#cups").val());
    var result = liters2(cups);
    $("#cups-output").text(result);

  });
});

var crigne = document.getElementById("carouselExampleIndicators");
console.log(crigne);
$(".carousel-control-prev").click(function () {
  $("#myCarousel").carousel("prev");
});
$(".carousel-control-next").click(function () {
  $("#myCarousel").carousel("next");
});

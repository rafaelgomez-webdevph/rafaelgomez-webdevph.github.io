const icons = document.querySelector(".tech-icons");

$(function () {
  console.log("Website Author: Rafael Gomez");

  // $(".tech-icons li").hide();
  $(".tech-icons li").css("opacity","0.1");
  $("nav li").hide().fadeIn(1000);
  $(".para-2").hide().fadeIn(1000);
  $(".learn-btn-1").hide().fadeIn(1200);
  $("footer").hide().fadeIn(1400);

  let timer = 400;

  for (let i = 1; i < icons.children.length + 1; i++) {
    setTimeout(() => {
      $(`li:nth-child(${i})`).css("opacity","1");
    }, timer);
    timer += 400;
  }

  // *** Animation ***
  let i = 0;
  let message = "< Hello World >";
  let speed = 100;
  let messageDisplay = "";

  const intro = () => {
    if (i < message.length) {
      messageDisplay += message[i];
      $("#intro").html(messageDisplay);
      i++;
      setTimeout(intro, speed);
    }

    $("#intro").fadeOut(2500);
    setTimeout(() => {
      $("#intro").remove();
      $(".author-container").css("display", "block").hide();
      $(".author-container").fadeIn(600);
    }, 2001);
  };

  intro();

  $(".learn-btn-1").click(function () {
    $(this).fadeOut(600);
    $(".card-1").fadeOut(800);
    setTimeout(() => {
      $(this).hide();
      $(".card-1").hide();
      $("img").css("display", "inline-block").hide();
      $("img").fadeIn(800);
      $(".card-2").css("display", "block").fadeIn(800);
      $(".work-history").hide().fadeIn(850);
      $(".home-btn").css("display", "inline-block").hide();
      $(".next-btn-1").css("display", "inline-block").hide();
      $(".home-btn").fadeIn(1000);
      $(".next-btn-1").fadeIn(1000);
    }, 801);
  });

  $(".home-btn").click(function () {
    $(this).fadeOut(600);
    $(".next-btn-1").fadeOut(600);
    $(".card-2").fadeOut(800);
    setTimeout(() => {
      $(this).hide();
      $(".next-btn-1").hide();
      $(".card-2").hide();
      $("img").css("display", "none").hide();
      $("img").fadeOut(800);
      $(".card-1").css("display", "block").hide();
      $(".card-1").fadeIn(800);
      $(".learn-btn-1").css("display", "inline-block").hide();
      $(".learn-btn-1").fadeIn(1000);
    }, 801);
  });


 $(".next-btn-1").click(function(){
  $(".card-2").css("position", "relative");
  $(".card-2").animate({right: '800px'}, "slow");
  $(".card-2").fadeOut(400);
  setTimeout(() => {
    $(".card-2").hide();
    $(".card-2").animate({right: '0'});
    $(".card-2").css("position", "static");
  }, 400);
}); 












});

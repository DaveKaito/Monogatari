//ALL THE USED SCRIPTS IN MY ONE PAGER

//NAVHIDE SCRIPT
// Regular nav hide and show on click event
$(document).ready(function() {
  $(".navbox").hide();
  $(".trigger").click(function() {
    $(".navbox").slideToggle();
  });
});

// If you forget to close the navbox and start scrolling it will slide up by itself
$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $(".navbox").slideUp();
  } else {
  }
});

//NAVBAR DROP SCRIPT
// The navbar will disappear and reappear depending on scroll position
window.onscroll = function() {
  scrollNav();
};

function scrollNav() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "-100px";
    document.getElementById("navbar").style.background.opacity = "0.1";
  } else {
    document.getElementById("navbar").style.top = "0";
  }
}

// SLIDER SCRIPT
console.time("SLIDER LOADING TIME");
$(document).ready(function() {
  $.global = new Object();

  $.global.item = 1;
  $.global.total = 0;

  $(document).ready(function() {
    var WindowWidth = $(window).width();
    var SlideCount = $("#slides li").length;
    var SlidesWidth = SlideCount * WindowWidth;

    $.global.item = 0;
    $.global.total = SlideCount;

    $(".slide").css("width", WindowWidth + "px");
    $("#slides").css("width", SlidesWidth + "px");

    $("#slides li:nth-child(1)").addClass("bg0 ");

    $("#left").click(function() {
      Slide("back");
    });
    $("#right").click(function() {
      Slide("forward");
    });
  });

  function Slide(direction) {
    if (direction == "back") {
      var $target = $.global.item - 1;
    }
    if (direction == "forward") {
      var $target = $.global.item + 1;
    }

    if ($target == -1) {
      DoIt($.global.total - 1);
    } else if ($target == $.global.total) {
      DoIt(0);
    } else {
      DoIt($target);
    }
  }

  function DoIt(target) {
    var $windowwidth = $(window).width();
    var $margin = $windowwidth * target;
    var $actualtarget = target + 1;

    $("#slides li:nth-child(" + $actualtarget + ")").addClass("bg0");

    $("#slides").css("transform", "translate3d(-" + $margin + "px,0px,0px)");

    $.global.item = target;

    $("#count").html($.global.item + 1);
  }
});
console.timeEnd("SLIDER LOADING TIME");

//PLAYER SCRIPT
$(document).ready(function() {
  // Video Source
  var video = document.getElementById("monovid");

  //Buttons i need for the player
  var play = document.getElementById("play");
  var mute = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");

  //Play/pause button
  play.addEventListener("click", function() {
    if (video.paused == true) {
      // Play
      video.play();
    } else {
      // Pause
      video.pause();
    }
  });

  //Mute button
  mute.addEventListener("click", function() {
    if (video.muted == false) {
      // Mute
      video.muted = true;
    } else {
      // Unmute
      video.muted = false;
    }
  });

  // Full-screen button
  fullScreenButton.addEventListener("click", function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });
});

//HOVER ON PLAYER WITH TIMER WHEN MOUSE DOES NOT MOVE
$(document).ready(function() {
  var childDiv = $(".buttons").hide(),
    throttle,
    fadingIn;

  // clear clock
  $(".fsvideo").mousemove(function(event) {
    clearTimeout(throttle);

    if (!fadingIn) {
      // no overlap
      fadingIn = true;
      childDiv.stop(true).fadeIn(500, function() {
        fadingIn = false;
      });
    }

    throttle = setTimeout(function() {
      childDiv.fadeOut(500);
    }, 2500);
  });
});

//BACK TO TOP BUTTON
// The button will only be displayed after a certain scroll position and screen size
$(document).ready(function() {
  $("#btop").hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $("#btop").fadeIn("slow");
    } else {
      $("#btop").fadeOut("fast");
    }
  });
});

//ANCHOR INDICATOR ON SCROLL
// This script will follow the user while hes scrolling and indicates his position on the right side
// This is only available on the screensizes where the sidenavigation is needed

$(window).scroll(function() {
  var Scroll = $(window).scrollTop() + 1,
    sec1Off = $("#sec1").offset().top,
    sec2Off = $("#sec2").offset().top,
    sec3Off = $("#sec3").offset().top,
    sec4Off = $("#sec4").offset().top,
    sec5Off = $("#sec5").offset().top,
    sec6Off = $("#sec6").offset().top,
    sec7Off = $("#sec7").offset().top;

  if (Scroll >= sec1Off) {
    $(".nav_sec1").addClass("active");
  } else {
    $(".nav_sec1").removeClass("active");
  }
  if (Scroll >= sec2Off) {
    $(".nav_sec2").addClass("active");
    $(".nav_sec1").removeClass("active");
  } else {
    $(".nav_sec2").removeClass("active");
  }
  if (Scroll >= sec3Off) {
    $(".nav_sec3").addClass("active");
    $(".nav_sec2").removeClass("active");
  } else {
    $(".nav_sec3").removeClass("active");
  }
  if (Scroll >= sec4Off) {
    $(".nav_sec4").addClass("active");
    $(".nav_sec3").removeClass("active");
  } else {
    $(".nav_sec4").removeClass("active");
  }
  if (Scroll >= sec5Off) {
    $(".nav_sec5").addClass("active");
    $(".nav_sec4").removeClass("active");
  } else {
    $(".nav_sec5").removeClass("active");
  }
  if (Scroll >= sec6Off) {
    $(".nav_sec6").addClass("active");
    $(".nav_sec5").removeClass("active");
  } else {
    $(".nav_sec6").removeClass("active");
  }
  if (Scroll >= sec7Off) {
    $(".nav_sec7").addClass("active");
    $(".nav_sec6").removeClass("active");
  } else {
    $(".nav_sec7").removeClass("active");
  }
});
console.warn("every script seems to work fine :D");

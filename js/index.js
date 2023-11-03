
$( "#worknav" ).hover(
    function() {
      $( this ).css("color","#066482").css("text-decoration","underline");
    }, function() {
      $( this ).last().css("color","#404040").css("text-decoration","none");
    }
  );

  $( "#resumenav" ).hover(
    function() {
      $( this ).css("color","#066482").css("text-decoration","underline");
    }, function() {
      $( this ).last().css("color","#404040").css("text-decoration","none");
    }
  );

  $( "#contactnav" ).hover(
    function() {
      $( this ).css("color","#066482").css("text-decoration","underline");
    }, function() {
      $( this ).last().css("color","#404040").css("text-decoration","none");
    }
  );


  $( ".tools a" ).hover(
    function() {
      $( this ).css("color","#066482").css("text-decoration","underline");
    }, function() {
      $( this ).last().css("color","#404040").css("text-decoration","none");
    }
  );

$(".allprojects").hover(
    function() {
        $(this).css("background-color","#066482");
    }, function() {
        $(this).last().css("background-color","#1A93BA");
    }
);

$(".hover1").hover(
    function() {
        $(this).css("border-style","dotted");
    }, function() {
        $(this).last().css("border","none");
    }
);

$(".socmed img").hover(
    function() {
        $(this).css("border-style","dotted").css("border-color","white");
    }, function() {
        $(this).last().css("border","none");
    }
);

$(".odyseek img").hover(
    function() {
        $(this).css("height","400");
        $(".odyseek p").css("font-size","25px");
        $(".adultings img").css("height","250");
        $(".spa img").css("height","250");
    }, function() {
        $(this).last().css("height","300");
        $(".odyseek p").css("font-size","20px")
        $(".adultings img").css("height","300");
        $(".spa img").css("height","300");
    }
);

$(".odyseek p").hover(
    function() {
        $(".odyseek img").css("height","400");
        $(".odyseek p").css("font-size","25px");
        $(".adultings img").css("height","250");
        $(".spa img").css("height","250");
    }, function() {
        $(".odyseek img").last().css("height","300");
        $(".odyseek p").css("font-size","20px");
        $(".adultings img").css("height","300");
        $(".spa img").css("height","300");
    }
);

$(".adultings img").hover(
    function() {
        $(this).css("height","400");
        $(".adultings p").css("font-size","25px")
        $(".odyseek img").css("height","250");
        $(".spa img").css("height","250");
    }, function() {
        $(this).last().css("height","300");
        $(".adultings p").css("font-size","20px")
        $(".odyseek img").css("height","300");
        $(".spa img").css("height","300");
    }
);

$(".adultings p").hover(
    function() {
        $(".adultings img").css("height","400");
        $(".adultings p").css("font-size","25px");
        $(".odyseek img").css("height","250");
        $(".spa img").css("height","250");
    }, function() {
        $(".adultings img").last().css("height","300");
        $(".adultings p").css("font-size","20px")
        $(".odyseek img").css("height","300");
        $(".spa img").css("height","300");
    }
);

$(".spa img").hover(
    function() {
        $(this).css("height","400");
        $(".spa p").css("font-size","25px");
        $(".odyseek img").css("height","250");
        $(".adultings img").css("height","250");
    }, function() {
        $(this).last().css("height","300");
        $(".spa p").css("font-size","20px");
        $(".odyseek img").css("height","300");
        $(".adultings img").css("height","300");
    }
);

$(".spa p").hover(
    function() {
        $(".spa img").css("height","400");
        $(".spa p").css("font-size","25px");
        $(".odyseek img").css("height","250");
        $(".adultings img").css("height","250");
    }, function() {
        $(".spa img").last().css("height","300");
        $(".spa p").css("font-size","20px");
        $(".odyseek img").css("height","300");
        $(".adultings img").css("height","300");
    }
);

$(".tools img").hover(
    function() {
        $(this).css("height","170");
    }, function() {
        $(this).last().css("height","150");
    }
);

$(".button").click(function () {
    $("html,body").animate({scrollTop:0},300);
});

function fade(){
    $(" .preloader").fadeOut("slow");
}
setTimeout(fade,3000);

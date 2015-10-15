jQuery(document).ready(function ($) {


    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.navigation').find('li');
    var links1 = $('nav').find('li');
    slide = $('.slide');
    button = $('.button');
    button1 = $('.button1');
    mywindow = $(window);
    htmlbody = $('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the previous navigation link
        if (direction === 'down') {
            $('li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the next navigation link
        else {
            $('li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from navigation link slide 2 and adds it to navigation link slide 1.
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('li[data-slide="1"]').addClass('active');
            $('li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

     //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links1.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button1.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


});






//ligtbox
$(document).ready(function(){
    $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
    $(".inline").colorbox({inline:true, width:"50%"});
    $$(".group1").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
});


//social share
$(document).ready(function(){
    $('.share').ShareLink({
        title: 'Escritório de idéias',
        text: 'Confira os vídeos do escritório de idéias da UFRN',
        image: 'http://escritoriodeideias.ufrn.br/img/logo.png',
        url: 'http://escritoriodeideias.ufrn.br/'
    });

    $('.share1').ShareLink({
        title: 'Escritório de idéias',
        text: 'Confira os vídeos do escritório de idéias da UFRN',
        image: 'http://escritoriodeideias.ufrn.br/img/logo.png',
        url: 'http://escritoriodeideias.ufrn.br/'
    });


});


$(document).ready(function(){
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.responsive1').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

});


window.onorientationchange = function()
{
   window.location.reload();
   $(window).scrollTop(0);
}

 $(window).scroll(function() {

      $('.circle').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
              $(this).addClass("fadeIn");
            }
      });
});


function validateEmail(email) {
        var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    }

    $(document).ready(function() {
        $(".modalbox").fancybox();
        $("#contact").submit(function() { return false; });


        $("#send").on("click", function(){
            var emailval  = $("#email").val();
            var msgval    = $("#msg").val();
            var msglen    = msgval.length;
            var mailvalid = validateEmail(emailval);

            if(mailvalid == false) {
                $("#email").addClass("error");
            }
            else if(mailvalid == true){
                $("#email").removeClass("error");
            }

            if(msglen < 4) {
                $("#msg").addClass("error");
            }
            else if(msglen >= 4){
                $("#msg").removeClass("error");
            }

            if(mailvalid == true && msglen >= 4) {
                // if both validate we attempt to send the e-mail
                // first we hide the submit btn so the user doesnt click twice
                $("#send").replaceWith("<em>sending...</em>");

                $.ajax({
                    type: 'POST',
                    url: 'sendmessage.php',
                    data: $("#contact").serialize(),
                    success: function(data) {
                        if(data == "true") {
                            $("#contact").fadeOut("fast", function(){
                                $(this).before("<p><strong>Success! Your feedback has been sent, thanks :)</strong></p>");
                                setTimeout("$.fancybox.close()", 1000);
                            });
                        }
                    }
                });
            }
        });
    });

$(function() {
            var pull        = $('#pull');
                menu        = $('nav ul');
                item        = $('nav ul li');
                menuHeight  = menu.height();

            $(pull).on('click', function(e) {
                e.preventDefault();
                menu.slideToggle();
            });

            var y = $(window).width()

            if(y < 800) {
               $(item).on('click', function(e) {
                    e.preventDefault();
                    menu.slideToggle();
                });
            }


            $(window).resize(function(){
                var w = $(window).width();
                if(w > 320 && menu.is(':hidden')) {
                    menu.removeAttr('style');
                }
            });
        });

(function ($) {
    "use strict";
    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

const connectButton = document.getElementById("connectButton");
const walletID = document.getElementById("walletID");

connectButton.addEventListener("click", () => {
    // Start loader while connecting
    const disconnectButton = document.getElementById("disconnectButton");
    const copied = document.getElementById("copied");

   if (typeof window.ethereum !== "undefined") {
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
            const account = accounts[0]

        //    connectButton.innerHTML = `Disconnect`;
            walletID.innerHTML = `${account}`;  
            
            walletID.onclick = function(){
                copied.classList.remove("d-none");
                navigator.clipboard.writeText(`${account}`)
            }
        
            // document.getElementById("copyBtn").onclick = function(){
            //     navigator.clipboard.writeText(`${account}`)
            // }

            disconnectButton.classList.remove("d-none");
            connectButton.classList.add("d-none");

      }).catch((error) => {
        // Handle error
        console.log(error, error.code);

        // Stop loader if error occured
        // For example, when user cancelled request 
        // and closed plugin
        connectButton.classList.remove("connected");

        // 4001 - The request was rejected by the user
        // -32602 - The parameters were invalid
        // -32603- Internal error
      });
   } else {
      window.open("https://metamask.io/download/", "_blank");

      // Show 'Reload page' warning to user
      installAlert.classList.add("show");
   }
})
    // $(document).ready(function () {
    //     var $videoSrc;
    //     $('.btn-play').click(function () {
    //         $videoSrc = $(this).data("src");
    //     });
    //     console.log($videoSrc);

    //     $('#videoModal').on('shown.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    //     })

    //     $('#videoModal').on('hide.bs.modal', function (e) {
    //         $("#video").attr('src', $videoSrc);
    //     })
    // });


    // Scroll to Bottom
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.scroll-to-bottom').fadeOut('slow');
    //     } else {
    //         $('.scroll-to-bottom').fadeIn('slow');
    //     }
    // });


    // Skills
    // $('.skill').waypoint(function () {
    //     $('.progress .progress-bar').each(function () {
    //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
    //     });
    // }, {offset: '80%'});


    // // Portfolio isotope and filter
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });
    
    
    // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 200) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


    // Testimonials carousel
    // $(".testimonial-carousel").owlCarousel({
    //     autoplay: true,
    //     smartSpeed: 1500,
    //     dots: true,
    //     loop: true,
    //     items: 1
    // });
    
})(jQuery);



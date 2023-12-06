$(document).ready(function () {
    $(".ease-in").addClass("show");

    // Show all cards initially
    $('.phone-card').show();

    // Filter buttons click event
    $('.filter-button').on('click', function () {
        var category = $(this).data('filter');
        
        // Show cards based on the selected category
        if (category === 'all') {
            $('.phone-card').show();
        } else {
            $('.phone-card').hide();
            $('.phone-card[data-category="' + category + '"]').show();
        }
    });


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
$(document).ready(function() {
    $('.nav-link').click(function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove 'active' class from all nav links
        $('.nav-link').removeClass('active');

        // Add 'active' class to the clicked nav link
        $(this).addClass('active');

        // Scroll to the section corresponding to the clicked nav link if needed
        var target = $(this).data('target');
        $('html, body').animate({
            scrollTop: $('#' + target).offset().top
        }, 500);
    });
});

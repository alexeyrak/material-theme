$(document).on('click', '#toggle-detail-information', function() {
    if($('.zmdi', this).hasClass('zmdi-chevron-down')) {
        $('.zmdi', this).removeClass('zmdi-chevron-down').addClass('zmdi-chevron-up');
        $('#project-detail-information').slideDown();
    }
    else {
        $('.zmdi', this).removeClass('zmdi-chevron-up').addClass('zmdi-chevron-down');
        $('#project-detail-information').slideUp();
    }
});

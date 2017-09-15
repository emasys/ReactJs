console.log("working");

$(document).ready(function () {
    // $('.imgBox').on('mouseenter', function(){     console.log("hover");
    // $(this).css({"margin-top":"5px"}); }).on('mouseleave', function(){
    // $(this).css({"margin-top":"0"}); }).on('click', function(){
    // $(this).css({"height":"100px"}); })

    $('.offer').hide();
    $('.sidebar').on('click', function () {
        $('#title').hide();
        if ($(this).hasClass('animated flip')) {
            $(this).removeClass('animated flip');
            $('.offer').show();
            $(this).addClass('animated flip');
        } else {
            $('.offer').show();
            $(this).addClass('animated flip');
            }

        })
        .on('mouseleave', function () {
            $('.offer').hide();
            $('.sidebar').removeClass('animated flip');
            $('#title').show();
            $(this).addClass('animated flip');
        })
});
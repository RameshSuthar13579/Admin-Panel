$('.nav-link').click(function(){
    $(this).next('.dropdown').slideToggle(1000);
    $('.dropdown').not($(this).next('.dropdown')).slideUp(1000);
    // $(this).children().eq(1).toggleClass('.rotate')
    // $('.rotate').not($(this).children().eq(1)).toggleClass('.rotate');
    // $('.fa-angle-up').toggleClass('d-inline');
    // $('.angle .fa-angle-down').toggleClass('d-none');
    // $(this).next('.angle').slideToggle(1000);
    // $('.fa-angle-up').not($(this).next('.fa-angle-down')).slideUp(1000);

});


$('.nav').click(function(){
    $(this).next('.drop').slideToggle(1000);
    $('.drop').not($(this).next('.drop')).slideUp(1000);
});                 

$('.clk .op').click(function(){
    $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
});

// $('.nav-link').click(function () {
//     $(this).next('.dropdown').slideToggle(1000);
//     $('.dropdown').not($(this).next('.dropdown')).slideUp(1000);
//     // $('.angle .fa-angle-down').toggleClass('.rotate');
    
// });
// function myFunction(x) {
//     x.classList.toggle("fa-angle-up");
//   }


$('.admin').click(function () {
    $(this).next('.dropdown').slideToggle(1000);
});

$('.fa-bars').click(function () {
    $('.aside').toggleClass('d-none');
    $('header').toggleClass('m-0');
    $('.main_content').toggleClass('m-0');
});
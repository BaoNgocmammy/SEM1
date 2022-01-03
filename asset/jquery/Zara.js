$(document).ready(function () {
    showFilterBar();
});
function showFilterBar() {
    $('.btn__filter-button').click(function() {
       if($(this).hasClass('filter-bar-active')){
        $('.category__filter-bar__sub-heading').slideUp(); 
        $(this).removeClass('filter-bar-active')
       } else{
            $('.category__filter-bar__sub-heading').slideDown();   
            $('.category__filter-bar-list').slideDown();      

            $(this).addClass('filter-bar-active');     
       }
    });
}

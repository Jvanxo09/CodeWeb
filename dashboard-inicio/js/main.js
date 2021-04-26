/*ejecutamos la funcion que va a contener todo
nuestro codigo una vez que nuestro documento haya sido cargado*/
$(document).ready(function() {
    $('.minmenu li:has(ul)').click(function(e) {
        e.preventDefault();

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();
        } else {
            $('.minmenu li ul').slideUp();
            $('.minmenu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });
});
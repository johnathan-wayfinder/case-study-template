var mouse = {};
var cursor = $('#cursor');

$(window).on('mousemove', function(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;

    cursor.css({
        left: mouse.x,
        top: mouse.y
    });

});

$('[class*=cursor]').on({
    mouseover: function(){
        if($(this).hasClass('cursor-scale'))
        {
            cursor.addClass('scale');
        }

        if($(this).hasClass('cursor-color'))
        {
            cursor.addClass('color');
        }

        if($(this).hasClass('cursor-go'))
        {
            cursor.addClass('go');
        }
    },


    mouseout: function(){
        if($(this).hasClass('cursor-scale'))
        {
            cursor.removeClass('scale');

        }

        if($(this).hasClass('cursor-color'))
        {
            cursor.removeClass('color');
        }

        if($(this).hasClass('cursor-go'))
        {
            cursor.removeClass('go');
        }
    }
})

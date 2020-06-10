// JavaScript Document
$(document).ready(function () {

    $('.setblock').click(function () {
        $('.slidemask').show();
        $('.slide-content').addClass('open');
    });

    $('.slidemask').click(function () {
        $(this).hide();
        $('.slide-content').removeClass('open');
    });
    $('.close-slide').click(function () {
        $('.slidemask').hide();
        $('.slide-content').removeClass('open');
    });



    // personal slide

    $(function () {
        var $li = $('ul.slide-btntab li');

        $($li.eq(00).addClass('active').find('a').attr('href')).siblings('.slide-inner').hide();

        $li.click(function () {
            event.preventDefault();
            $($(this).find('a').attr('href')).show().siblings('.slide-inner').hide();
            $(this).addClass('active').siblings('.active').removeClass('active');
        });
    });


    // forget password

    $('.return').click(function () {
        $('.forgetpage').hide();
        $('.modify').show();
    });

    $('.forget').click(function () {
        $('.modify').hide();
        $('.forgetpage').show();
    });


    // binding bank card

    $('.bank').click(function () {
        $(this).parent().find('.bank').addClass('active').parent().siblings().find('.bank').removeClass('active');
    });


    var unSelected = "#bcbcbc";
    var selected = "#303030";
    $(function () {
        $("select").css("color", unSelected);
        $("option").css("color", selected);
        $("select").change(function () {
            var selItem = $(this).val();
            if (selItem == $(this).find('option:first').val()) {
                $(this).css("color", unSelected);
            } else {
                $(this).css("color", selected);
            }
        });
    });

    $('.eyes').click(function(){
        $(this).toggleClass('active');
    });



    //personal account

    $('.account-box ul li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');

    });





    // wallet tab

    $(function () {
        var $li = $('.game-tab ul li');

        $($li.eq(00).addClass('active').find('a').attr('href')).siblings('.sort-content').hide();

        $li.click(function () {
            event.preventDefault();
            $($(this).find('a').attr('href')).show().siblings('.sort-content').hide();
            $(this).addClass('active').siblings('.active').removeClass('active');
        });
    });


    // wallet transfer out or in

    $('.sort-item li').click(function(){
        $(this).toggleClass('active');
    });

    $('.dropdown-menu ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });


    $('.enter-amount').click(function(){
        $('.dropdown-menu').slideToggle(200);
    });



    

});





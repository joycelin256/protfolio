$(document).ready(function() {

    //----------------gamelist---------------------------
    $('.gamelist-filter').click(function(){
        event.preventDefault()
        $('.gamelist-filter-windows').fadeIn();
        $('.gamelist-filter-content').slideDown(250);
    });

    $('.filter-close').click(function(){
        event.preventDefault()
        $('.gamelist-filter-windows,.gamelist-filter-content').hide();
    });

    $('.gamelist-option').click(function(){
        event.preventDefault()
        $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
    });

    $('.gamelist-collection,.gamelist-collection-s').click(function(){
        $(this).toggleClass('active');
    });

    //----------------more-common-problem---------------------------
    $('.question-item').click(function(){
        event.preventDefault()
        $(this).find('.problem-slidedown').toggleClass('active').parent().parent().siblings().find('.problem-slidedown').removeClass('active');
        $(this).next().slideToggle().siblings('.question-answer').slideUp();
        $(this).toggleClass('active').siblings('.question-item').removeClass('active');
    });

    //----------------language---------------------------
    $('.language-item').click(function(){
        $(this).find('p').addClass('active').parent().siblings().find('p').removeClass('active');
        $(this).find('.language-check').addClass('active').parent().siblings().find('.language-check').removeClass('active');
    });
    

    //----------------record-betting---------------------------
    $('.bettingrecord-filter').click(function(){
        event.preventDefault()
        $('.record-filter-windows').fadeIn();
        $('.record-filter-content').slideDown(250);
    });
    $('.filter-close').click(function(){
        event.preventDefault()
        $('.record-filter-windows,.record-filter-content').hide();
    });
    $('.record-option a').click(function(){
        $(this).toggleClass('active');
    });
    $('.record-filter-select .record-option').click(function(){
        event.preventDefault()
        $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
    });



     //----------------record-funds---------------------------
     $('.funds-list ul li').click(function(){
        $(this).next().slideToggle().siblings('.list-content').slideUp();
        $(this).find('.list-slidedown').toggleClass('active').parent().parent().siblings().find('.list-slidedown').removeClass('active');
        $(this).toggleClass('active').siblings().removeClass('active');

    });




    //----------------funds---------------------------
    $(function () {
        var $li = $('.funds-tab-title li');
        $($li.eq(0).addClass('active').find('a').attr('href')).siblings('.funds-inner').hide();

        $li.click(function () {
            event.preventDefault()
            $($(this).find('a').attr('href')).show().siblings('.funds-inner').hide();
            $(this).addClass('active').siblings('.active').removeClass('active');
        });
    });

    //----------------funds-popwindow---------------------------
    $('.setting-amount').click(function(){
        event.preventDefault()
        $('.pop-set-amount').fadeIn();
    });
    $('.set-cancel').click(function(){
        event.preventDefault()
        $('.pop-set-amount').fadeOut();
    });


    //----------------invite-friends---------------------------

    $(function(){
        var $li = $('.friends-title ul li');
            $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.friends-inner').hide();
        
            $li.click(function(){
                event.preventDefault()
                $($(this).find('a'). attr ('href')).show().siblings ('.friends-inner').hide();
                $(this).addClass('active'). siblings ('.active').removeClass('active');
            });
        });

    $('.invite-btn').click(function(){
        $('.invite-sharebg').fadeIn();
        $('.share-btn').addClass('active');
    });

    $('.invite-sharebg').click(function(){
        $('.invite-sharebg').fadeOut();
        $('.share-btn').removeClass('active');
    });

    //----------------invite-friends-------bonus-------------------- 

    $('.bonus-item').click(function () {
        $(this).find('.bonus-slidedown').toggleClass('active').parent().siblings().find('.bonus-slidedown').removeClass('active');
        $(this).next().slideToggle().siblings('.bonus-content').slideUp();
        $(this).toggleClass('active').siblings('.bonus-item').removeClass('active');
    });






    //message 彈出視窗--------------------------------


    $('.serviceBtn').click(function(event){
        event.preventDefault();
        $('.server_win').fadeIn();
    });
    
    //消息中心--彈出視窗關閉
    $('.service_winclose').click(function(event){
        event.preventDefault();
        $('.server_win').fadeOut();
    });



    //sign up check
    $('.agreelink p').click(function(){
        $(this).parent().toggleClass('active');

    });

    $('.eyes').click(function(){
        $(this).toggleClass('active');

    });




    
    // deposit-bank-lh

    $('#bank-send').click(function(){
        event.preventDefault()
        $('.mask').fadeIn();
    });
    $('.pop-close').click(function(){
        event.preventDefault()
        $('.mask').fadeOut();
    });

    $('.btn-cancel').click(function(){
        event.preventDefault()
        $('.amount-input input').val('');
    });

    $('.bank-text a').click(function(){
        $('.prompt-msg').slideDown(300).delay(1500).slideUp(300);
    });


    
    



});
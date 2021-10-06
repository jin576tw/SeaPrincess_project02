'use strict'


$(window).scroll(function () {

    let scrollNow = $(window).scrollTop();

   

    let fadeDown = `animate__animated animate__fadeInDown`

    let fadeIn = `animate__animated animate__fadeIn`

    let flip = `animate__animated animate__flipInX`
    let flipY = `animate__animated animate__flipInY`

    let wobble =`animate__animated animate__bounce`

    // 平板版
    if ($(window).width() <= 1024) {

        if(scrollNow >= 0){

            $('.Ship_info_content_text p').addClass(fadeDown).css('opacity','1')

        }else{

            $('.Ship_info_content_textp ').removeClass(fadeDown).css('opacity','0')

        }

        if(scrollNow >= 253){

            $('.Ship_info_team_title').addClass(flip).css('opacity','1')


        }else{

            $('.Ship_info_team_title').removeClass(flip).css('opacity','0')

        }

        if(scrollNow >= 573){

            $('.Ship_info_team_content').css('transform','translateY(0px)')


        }else{
            $('.Ship_info_team_content').css('transform','translateY(80px)')

        }

        if(scrollNow >= 689){


            $('.mask').css('opacity','1').addClass(wobble);
           

        }else{


            $('.mask').css('opacity','0').removeClass(wobble);
           


        }

        if(scrollNow >= 2281){


            $('.Ship_info_appointment').addClass(fadeIn)
           

        }else{

            $('.Ship_info_appointment').removeClass(fadeIn)


        
        }


        if(scrollNow >= 3248){


            $('.m_video').addClass('hithere')
           

        }else{

            $('.m_video').removeClass('hithere')


        
        }


        if(scrollNow >= 3581){


            $('.Tourist_outframe').addClass(flipY)
           

        }else{

            $('.Tourist_outframe').removeClass(flipY)


        
        }


    }

    //手機版
    if ($(window).width() < 768) {

        if(scrollNow >= 112){

            $('.Ship_info_content_text p').addClass(fadeDown).css('opacity','1')

        }else{

            $('.Ship_info_content_textp ').removeClass(fadeDown).css('opacity','0')

        }

        if(scrollNow >= 512){

            $('.Ship_info_team_title').addClass(flip).css('opacity','1')


        }else{

            $('.Ship_info_team_title').removeClass(flip).css('opacity','0')

        }

        if(scrollNow >= 854){

            $('.Ship_info_team_content').css('transform','translateY(0px)')


        }else{
            $('.Ship_info_team_content').css('transform','translateY(80px)')

        }


        if(scrollNow >= 971){


            $('.mask').css('opacity','1').addClass(wobble);
           

        }else{


            $('.mask').css('opacity','0').removeClass(wobble);
           


        }

        if(scrollNow >= 1959){


            $('.Ship_info_appointment').addClass(fadeIn)
           

        }else{

            $('.Ship_info_appointment').removeClass(fadeIn)


        
        }


        if(scrollNow >= 3021){


            $('.m_video').addClass('hithere')
           

        }else{

            $('.m_video').removeClass('hithere')


        
        }


        if(scrollNow >= 3299){


            $('.Tourist_outframe').addClass(flipY)
           

        }else{

            $('.Tourist_outframe').removeClass(flipY)


        
        }


       



    }

    // 網頁版 
    if ($(window).width() > 1024) {

        if(scrollNow >= 498){

            $('.Ship_info_content_text p').addClass(fadeDown).css('opacity','1')

        }else{

            $('.Ship_info_content_text p').removeClass(fadeDown).css('opacity','0')

        }

        if(scrollNow >= 750){

            $('.Ship_info_team_title').addClass(flip).css('opacity','1')


        }else{

            $('.Ship_info_team_title').removeClass(flip).css('opacity','0')

        }


        if(scrollNow >= 1096){

            $('.Ship_info_team_content').css('transform','translateY(0px)')


        }else{
            $('.Ship_info_team_content').css('transform','translateY(80px)')

        }


        if(scrollNow >= 1383){


            $('.mask').css('opacity','1').addClass(wobble);
           

        }else{


            $('.mask').css('opacity','0').removeClass(wobble);
           


        }

        if(scrollNow >= 2400){


            $('.Ship_info_appointment').addClass(fadeIn)
           

        }else{

            $('.Ship_info_appointment').removeClass(fadeIn)


        
        }

        if(scrollNow >= 2994){


            $('.m_video').addClass('hithere')
           

        }else{

            $('.m_video').removeClass('hithere')


        
        }

        if(scrollNow >= 3252){


            $('.Tourist_outframe').addClass(flipY)
           

        }else{

            $('.Tourist_outframe').removeClass(flipY)


        
        }
     
    }


})
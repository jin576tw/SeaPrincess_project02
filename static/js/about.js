'use strict'

$(document).ready(function () {

    


    // 引言視覺
    setInterval(function () {

        $('.introBg_left').css('transform',' translate(0px,0px)').css('transition','1s').css('opacity','1')

        $('.introBg_right').css('transform',' translate(0px,0px)').css('transition','1s').css('opacity','1')


    },100)

    if ($(window).width() > 767) {

        // 魚效果
        setInterval(function () {

            $('.fishIcon').addClass('FishJump')

            $('.waterIcon').addClass('WaterOut')

        
        },10)


        setInterval(function (){

            $('.fishIcon').removeClass('FishJump')

            $('.waterIcon').removeClass('WaterOut')


        },3000)

    }else{


        // 魚效果
        setInterval(function () {

            $('.fishIcon').addClass('FishJumpRWD')

            $('.waterIcon').addClass('WaterOut')

        
        },10)


        setInterval(function (){

            $('.fishIcon').removeClass('FishJumpRWD')

            $('.waterIcon').removeClass('WaterOut')


        },3000)


    }

    $('.About_intro').click(function(){


        if ($(window).width() > 767) {

            $('.fishIcon').removeClass('FishJump')

            $('.waterIcon').removeClass('WaterOut')

            setInterval(function () {

                $('.fishIcon').addClass('FishJump')
        
                $('.waterIcon').addClass('WaterOut')
        
            
            },10)

        }else{


            $('.fishIcon').removeClass('FishJumpRWD')

            $('.waterIcon').removeClass('WaterOut')

            setInterval(function () {

                $('.fishIcon').addClass('FishJumpRWD')
        
                $('.waterIcon').addClass('WaterOut')
        
            
            },10)

        }



    })

    setTimeout(() => {


        $('.About_intro_text').css('opacity','1').css('transition','0.8s')


        
    }, 1000);


  
    $(window).scroll(function () {

        let scrollNow = $(window).scrollTop();
        console.log(scrollNow);

        let titleIN = `animate__animated animate__fadeInDown`

        let fadeIn = `animate__animated animate__fadeIn`
        let fadeInUp = `animate__animated animate__fadeInUp`


        // 手機版
        if($(window).width() <= 767){


            if(scrollNow >= 186){

                $('.About_Story_text p').css('opacity','1').css('transition','0.8s')
                $('.About_Story_pic').css('opacity','1').css('transition','0.8s')
            }else{

                $('.About_Story_text p').css('opacity','0.2').css('transition','0.8s')
                $('.About_Story_pic').css('opacity','0.2').css('transition','0.8s')

            }


            if(scrollNow >= 853){

                $('.About_text_title').addClass(titleIN)


            }else{

                $('.About_text_title').removeClass(titleIN)

            }


            if(scrollNow >= 1145){

                $('.About_text_intro').addClass(fadeIn)

            }
            else{

                $('.About_text_intro').removeClass(fadeIn)

            }
            

            if(scrollNow >= 1450){

                $('.About_text_pic').addClass(fadeInUp )



            }else{

                $('.About_text_pic').removeClass(fadeInUp )

            }


            if(scrollNow >= 2211){

                $('.slogan_title p').css('transform','translateY(0px)')

                setTimeout(() => {

                    $('.slogan_box').css('opacity','1')
                    
            
                    
                }, 1000);


            }else{

                $('.slogan_title p').css('transform','translateY(50px)')

                $('.slogan_box').css('opacity','0')

            }

            


        }
        // 網站、平板
        if ($(window).width() > 767) {


            if(scrollNow >= 428){

                $('.About_Story_text p').css('opacity','1').css('transition','0.8s')
                $('.About_Story_pic').css('opacity','1').css('transition','0.8s')
            }else{

                $('.About_Story_text p').css('opacity','0.2').css('transition','0.8s')
                $('.About_Story_pic').css('opacity','0.2').css('transition','0.8s')

            }


           
          

            if(scrollNow >= 953){

                $('.About_text_title').addClass(titleIN)


            }else{

                $('.About_text_title').removeClass(titleIN)

            }

            if(scrollNow >= 1201){

                $('.About_text_intro').addClass(fadeIn)

            }
            else{

                $('.About_text_intro').removeClass(fadeIn)

            }

            if(scrollNow >= 1440){

                $('.About_text_pic').addClass(fadeInUp )



            } else{

                $('.About_text_pic').removeClass(fadeInUp )

            }
            

            if(scrollNow >= 2141){

                $('.slogan_title p').css('transform','translateY(0px)')

                setTimeout(() => {

                    $('.slogan_box').css('opacity','1')
                    
            
                    
                }, 1000);


            }else{

                $('.slogan_title p').css('transform','translateY(50px)')

                $('.slogan_box').css('opacity','0')

            }



        }

    })




})
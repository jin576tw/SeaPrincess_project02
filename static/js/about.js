'use strict'

$(document).ready(function () {

    


    // 引言視覺
    setInterval(function () {

        $('.introBg_left').css('transform',' translate(0px,0px)').css('transition','1s').css('opacity','1')

        $('.introBg_right').css('transform',' translate(0px,0px)').css('transition','1s').css('opacity','1')


    },100)


    // 魚效果
    setInterval(function () {

        $('.fishIcon').addClass('FishJump')

        $('.waterIcon').addClass('WaterOut')

       
    },10)


    setInterval(function (){

        $('.fishIcon').removeClass('FishJump')

        $('.waterIcon').removeClass('WaterOut')


    },3000)

   
    $('.About_intro').click(function(){

        $('.fishIcon').removeClass('FishJump')

        $('.waterIcon').removeClass('WaterOut')

        setInterval(function () {

            $('.fishIcon').addClass('FishJump')
    
            $('.waterIcon').addClass('WaterOut')
    
           
        },10)



    })

    setTimeout(() => {


        $('.About_intro_text').css('opacity','1').css('transition','0.8s')


        
    }, 1000);


  





})
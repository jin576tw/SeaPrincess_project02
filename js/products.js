$(document).ready(function () {



    $('.Seafood_select').on({

        click:function(){

            if ($(window).width() <  992){

                $(this).css('background-color','white').css('opacity','1')
                $(this).children('.Prouduct_select_icon').css('transform', 'scale(1.5) translateY(-5px)')

                $(this).next().css('background-color','#DDDDDD').css('opacity','0.5')
                $(this).next().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')



            }

            if ($(window).width() >= 992){

                $(this).css('background-color','white').css('opacity','1')
                $(this).children('.Prouduct_select_icon').css('transform', 'scale(1.8) translateY(-10px)')

                $(this).next().css('background-color','#DDDDDD').css('opacity','0.5')
                $(this).next().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')



            }


            $('.Seafood_select_warp').fadeIn(500)
            $('.Fishing_select_warp').fadeOut(1)
            


        }



    })

    $('.Fishing_select').on({

        click:function(){

            if ($(window).width() <  992){

                $(this).css('background-color','white').css('opacity','1')
                $(this).children('.Prouduct_select_icon').css('transform', 'scale(1.5) translateY(-5px)')

                $(this).prev().css('background-color','#DDDDDD').css('opacity','0.5')
                $(this).prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')





                
            }


            if ($(window).width() >= 992){

            $(this).css('background-color','white').css('opacity','1')
            $(this).children('.Prouduct_select_icon').css('transform', 'scale(1.8) translateY(-10px)')

            $(this).prev().css('background-color','#DDDDDD').css('opacity','0.5')
            $(this).prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')


            
            }

            $('.Seafood_select_warp').fadeOut(1)
            $('.Fishing_select_warp').fadeIn(500)



        }



    })












})
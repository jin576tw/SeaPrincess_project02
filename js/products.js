$(document).ready(function () {

    let SeafoodURL = location.href.substr(-8,9) == '?Seafood';
    let FishingURL = location.href.substr(-8,9) == '?Fishing';


    ////////////起始分頁/////////

    // 生鮮漁貨
    if(SeafoodURL){


        if ($(window).width() <  992){

            $('.Seafood_select').css('background-color','white').css('opacity','1')
            $('.Seafood_select').children('.Prouduct_select_icon').css('transform', 'scale(1.5) translateY(-5px)')

            $('.Seafood_select').prev().css('background-color','#DDDDDD').css('opacity','0.5')
            $('.Seafood_select').prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')

            
        }


        if ($(window).width() >= 992){

            $('.Seafood_select').css('background-color','white').css('opacity','1')
            $('.Seafood_select').children('.Prouduct_select_icon').css('transform', 'scale(1.8) translateY(-10px)')

            $('.Seafood_select').prev().css('background-color','#DDDDDD').css('opacity','0.5')
            $('.Seafood_select').prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')


        
        }


        $('.Seafood_select_warp').fadeIn(500)
        $('.Fishing_select_warp').fadeOut(1)


    }


    // 釣具用品
    if(FishingURL){

        if ($(window).width() <  992){

            $('.Fishing_select').css('background-color','white').css('opacity','1')
            $('.Fishing_select').children('.Prouduct_select_icon').css('transform', 'scale(1.5) translateY(-5px)')

            $('.Fishing_select').prev().css('background-color','#DDDDDD').css('opacity','0.5')
            $('.Fishing_select').prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')

            
        }


        if ($(window).width() >= 992){

            $('.Fishing_select').css('background-color','white').css('opacity','1')
            $('.Fishing_select').children('.Prouduct_select_icon').css('transform', 'scale(1.8) translateY(-10px)')

            $('.Fishing_select').prev().css('background-color','#DDDDDD').css('opacity','0.5')
            $('.Fishing_select').prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')


        
        }


        $('.Seafood_select_warp').fadeOut(1)
        $('.Fishing_select_warp').fadeIn(500)

    }


    // 生鮮漁貨分頁按鈕    
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


            let url = location.pathname + '?Seafood'
            history.pushState({
                url: url,
                title: document.title
            }, document.title, url)
            


        }



    })

    // 釣具用品分頁按鈕    
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


            let url = location.pathname + '?Fishing'
            history.pushState({
                url: url,
                title: document.title
            }, document.title, url)

        }


    })

    // 商品排序選單

    $('.item_status_warp , .item_status_list').on({

        mouseenter: function () {

            $('.listDown').css('transform','rotate(180deg)');
            $('.listUp').css('transform','rotate(0deg)')

            $('.item_status_list').fadeIn(100);
           
 
         },
 
         mouseleave: function () {
            $('.listDown').css('transform','rotate(0deg)')
            $('.listUp').css('transform','rotate(-180deg)')

            $('.item_status_list').fadeOut(100)
 
             
         }

    })

    $('.status_list').on({

        click: function () {
            let arrow = `<i class="fas fa-angle-up listUp"></i>`
           
            $('.item_status').html( $(this).text()+ arrow)
           
           
 
         }


    })














})
$(document).ready(function () {

    let check =`<i class="fas fa-check"></i>`;

    // 第一步驟成功
    $('.cart_checkout_btn').on({


        click: function(){

            $('body,html').animate({
                scrollTop: 0
            }, 1 ,'swing');

            $('.Cart_step01').fadeOut(1000)
            $('.Checkout_step02').fadeIn(500)

            $('.Checkout_Step_line').css('width','50%')

            $('.step_number01').html(check)

            $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')

            $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')
        
           
            
        }

    })







})
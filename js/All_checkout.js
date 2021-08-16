$(document).ready(function () {

  
    let bounce = `animate__bounceIn animate__animated`;

    // 第一步驟成功
    $('.cart_checkout_btn').on({


        click: function(){
           
            let check =`<i class="fas fa-check check01"></i>`;

            $('body,html').animate({
                scrollTop: 0
            }, 1 ,'swing');

            $('.Cart_step01').fadeOut(1000)
            $('.Checkout_step02').fadeIn(500)

            $('.Checkout_Step_line').css('width','50%')

            $('.step_number01').html(check)

            $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')

            $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')

            setTimeout(() => {
                $('.check01').addClass(bounce)

            }, 700);
        
           
            
        }

    })

        // 第二步驟成功
        $('.final_checkout_btn').on({

           

            click: function(){
                let check =`<i class="fas fa-check check02"></i>`;

                $('.fa-check').removeClass(bounce)

            
                $('body,html').animate({
                    scrollTop: 0
                }, 1 ,'swing');
    
                $('.Checkout_step02').fadeOut(1000)
                $('.FinishCheck_step03').fadeIn(500)
    
                $('.Checkout_Step_line').css('width','100%')
    
                $('.step_number02').html(check)
    
                $('.step_number03').css('background-color','var(--dark_blue)').css('transition','2.5s')
    
                $('.step_name03 p').css('color','var(--dark_blue)').css('transition','2.5s')

                setTimeout(() => {
                    $('.check02').addClass(bounce)
                   

                }, 800);

                setTimeout(() => {
                   
                    $('.check03').addClass(bounce)

                }, 1000);
            
               
                
            }
    
        })


    $('.cargo_info_edit').on({

        click: function(){

            $(this).parent().parent().parent().next('.checkout_info').fadeIn(100)

        }



    })

    $('.fishbox_edit').on({

        click: function(){

            $(this).parent().parent().parent().next().next('.fishbox_detail').fadeIn(100)

        }



    })



    $('.info_cancel , .checkout_info_bg ').on({

        click: function(){

            $('.checkout_info').fadeOut(100)

        }



    })
  




})
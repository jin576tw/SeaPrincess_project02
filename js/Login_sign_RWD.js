$(document).ready(function () {


    $('.login_btn_rwd').on({


        click:function(){

            location.href = "../html/index.html"

        }

    });

    
    $('.sign_btn_rwd').on({


        click:function(){

           
            $('.steps_warp h5:nth-of-type(2)').css('color','#7cafbf').siblings().css('color','rgba(0, 0, 0, 0.31)')

            $('.phone_login').fadeOut(1)
            $(".text_check").fadeIn(100)

        }

    });

    $('.sendText_btn_rwd').on({


        click:function(){

           
            $('.steps_warp h5:nth-of-type(3)').css('color','#7cafbf').siblings().css('color','rgba(0, 0, 0, 0.31)')

            $('.text_check').fadeOut(1)
            $(".data_input").fadeIn(100)

        }

    });

    $('.member_btn_rwd').on({


        click:function(){

           
            $('.steps_warp h5:nth-of-type(4)').css('color','#7cafbf').siblings().css('color','rgba(0, 0, 0, 0.31)')

            $('.data_input').fadeOut(1)
            $(".Sign_sucess").fadeIn(100)

        }

    });


    $('.Sign_sucess_rwd').on({


        click:function(){

           
            location.href = "../html/index.html"

        }

    });










})
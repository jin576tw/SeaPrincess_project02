$(document).ready(function () {


    let Oder_btn = $('.cargo_list h3')
    let Coin_btn = $('.point_list h3:nth-of-type(1)')
    let Coupon_btn = $('.point_list h3:nth-of-type(2)')
    let Point_btn = $('.point_list h3:nth-of-type(3)')
    let MemberEdit_btn = $('.user_list h3:nth-of-type(1)')
    let PasswordEdit_btn = $('.user_list h3:nth-of-type(2)')
  
    //訂單明細
    Oder_btn.on({
        
        click:function(){

            $(this).css('color','#7cafbf')
            $(this).parents().siblings().children('h3').css('color','#8c8c8c')

            $('.Member_content_title h2:nth-of-type(1)').text('訂單明細')

            $('.Order_detail').fadeIn(100).siblings('.Mcontent').fadeOut(1)

            $('.Member_Cargo_BOX').hide()

            $('body,html').animate({
                scrollTop: 0
            }, 10 ,'swing');


            // let url = location.pathname + '?Cargo'
            // history.pushState({
            //     url: url,
            //     title: document.title
            // }, document.title, url)
    


        }
        

    })

    
    //我的公主幣
    Coin_btn.on({
        
        click:function(){

            $(this).css('color','#7cafbf')
            $(this).siblings('h3').css('color','#8c8c8c')
            $(this).parents().siblings().children('h3').css('color','#8c8c8c')
            
            $('.Member_content_title h2:nth-of-type(1)').text('我的公主幣')

            $('.Fish_point').fadeIn(100).siblings('.Mcontent').fadeOut(1)

            $('.Member_Cargo_BOX').hide()

            $('body,html').animate({
                scrollTop: 0
            }, 10 ,'swing');


        

            // let url = location.pathname + '?Point'
            // history.pushState({
            //     url: url,
            //     title: document.title
            // }, document.title, url)


    
    
        }
        

    })

    //我的優惠券
    Coupon_btn.on({
        
        click:function(){

            $(this).css('color','#7cafbf')
            $(this).siblings('h3').css('color','#8c8c8c')
            $(this).parents().siblings().children('h3').css('color','#8c8c8c')
            
            $('.Member_content_title h2:nth-of-type(1)').text('我的優惠券')

            $('.Coupon_point').fadeIn(100).siblings('.Mcontent').fadeOut(1)

            $('.Member_Cargo_BOX').hide()

            $('body,html').animate({
                scrollTop: 0
            }, 10 ,'swing');




            // let url = location.pathname + '?Point'
            // history.pushState({
            //     url: url,
            //     title: document.title
            // }, document.title, url)


    
    
        }
        

    })

    // 我的集點卡
    Point_btn.on({
        
        click:function(){

            $(this).css('color','#7cafbf')
            $(this).siblings('h3').css('color','#8c8c8c')
            $(this).parents().siblings().children('h3').css('color','#8c8c8c')
            
            $('.Member_content_title h2:nth-of-type(1)').text('我的集點卡')

            $('.Point_Collection').fadeIn(100).siblings('.Mcontent').fadeOut(1)

            $('.Member_Cargo_BOX').hide()

            $('body,html').animate({
                scrollTop: 0
            }, 10 ,'swing');


    

            // let url = location.pathname + '?Point'
            // history.pushState({
            //     url: url,
            //     title: document.title
            // }, document.title, url)


    
    
        }
        

    })

    // 會員修改資料 
    MemberEdit_btn.on({
        
        click:function(){

        $(this).css('color','#7cafbf')
            
        $(this).siblings('h3').css('color','#8c8c8c');
        $(this).parents().siblings().children('h3').css('color','#8c8c8c')
        $('.Member_content_title h2:nth-of-type(1)').text('會員資料修改')


        $('.Member_edit').fadeIn(100).siblings('.Mcontent').fadeOut(1)

        $('body,html').animate({
            scrollTop: 0
        }, 10 ,'swing');


        // let url = location.pathname + '?User'
        // history.pushState({
        //     url: url,
        //     title: document.title
        // }, document.title, url)



    
    
        }
        

    })

    // 會員修改密碼 
    PasswordEdit_btn.on({
        
        click:function(){

        $(this).css('color','#7cafbf')
            
        $(this).siblings('h3').css('color','#8c8c8c');
        $(this).parents().siblings().children('h3').css('color','#8c8c8c')
        $('.Member_content_title h2:nth-of-type(1)').text('密碼修改')


        $('.Password_edit').fadeIn(100).siblings('.Mcontent').fadeOut(1)

        $('body,html').animate({
            scrollTop: 0
        }, 10 ,'swing');



        // let url = location.pathname + '?Password'
        // history.pushState({
        //     url: url,
        //     title: document.title
        // }, document.title, url)


    
    
        }
        

    })


    // 單一訂單明細
    $(".more_order , .order_detail_name , .order_detail_pic").on({
        
        click:function(){

        
        $('.Member_content_title h2:nth-of-type(1)').text('訂單明細')

        $('.Each_orderDetail').fadeIn(100).siblings('.Mcontent').fadeOut(1)

        $('body,html').animate({
            scrollTop: 0
        }, 10 ,'swing');


    

        // let url = location.pathname + '?Detail'
        // history.pushState({
        //     url: url,
        //     title: document.title
        // }, document.title, url)
    

        
    
    
        }
        

    })

        
        



  
   




    // }






})
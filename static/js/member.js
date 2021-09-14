$(document).ready(function () {

    if($(window).width() <= 768){

        // 手機版起始版面
        $(".Member_RWD_content").siblings('.Mcontent').css('display','none')
        $('.Member_content_title h2:nth-of-type(1)').css('display','none')
        $('.Member_tool_list h3').css('color','#8c8c8c')


        $('.cargo_box').on({
        
            click:function(){
    
                $('.cargo_list h3').css('color','#7cafbf')
                $('.cargo_list h3').parents().siblings().children('h3').css('color','#8c8c8c')
                $('.Member_content_title h2:nth-of-type(1)').css('display','block')
                $('.Member_content_title h2:nth-of-type(1)').text('訂單明細')
        
                $('.Order_detail').fadeIn(100).siblings('.Mcontent').fadeOut(1)

                $('.Member_RWD_content').fadeOut(1)
                $('.userName').fadeOut(1)

                $('body,html').animate({
                    scrollTop: 0
                }, 10 ,'swing');
    
            }
            
    
         })

        $('.point_box').on({
        
            click:function(){
    
                $('.point_list h3').css('color','#7cafbf')
                $('.point_list h3').parents().siblings().children('h3').css('color','#8c8c8c')
                $('.Member_content_title h2:nth-of-type(1)').css('display','block')
                $('.Member_content_title h2:nth-of-type(1)').text('我的公主幣')
        
                $('.Fish_point').fadeIn(100).siblings('.Mcontent').fadeOut(1)

                $('.Member_RWD_content').fadeOut(1)
                $('.userName').fadeOut(1)

                $('body,html').animate({
                    scrollTop: 0
                }, 10 ,'swing');
        
    
        
            }
            
    
         })

        $('.member_box').on({
        
            click:function(){
    
                $('.user_list h3:nth-of-type(1)').css('color','#7cafbf')
                $('.user_list h3:nth-of-type(1)').parents().siblings().children('h3').css('color','#8c8c8c')
                $('.Member_content_title h2:nth-of-type(1)').css('display','block')
                $('.Member_content_title h2:nth-of-type(1)').text('會員資料修改')
        
                $('.Member_edit').fadeIn(100).siblings('.Mcontent').fadeOut(1)

                $('.Member_RWD_content').fadeOut(1)
                $('.userName').fadeOut(1)

                $('body,html').animate({
                    scrollTop: 0
                }, 10 ,'swing');
        
    
        
            }
            
    
         })

    }


  

    $(".cargo_list h3 ").on({
        
        click:function(){

        $(this).css('color','#7cafbf')
        $(this).parents().siblings().children('h3').css('color','#8c8c8c')
        $('.Member_content_title h2:nth-of-type(1)').text('訂單明細')

        $('.Order_detail').fadeIn(100).siblings('.Mcontent').fadeOut(1)

        $('body,html').animate({
            scrollTop: 0
        }, 10 ,'swing');


        if($(window).width() <= 768){

            $('.Member_RWD_content').fadeOut(1)
            $('.userName').fadeOut(1)
            $('.Member_content_title h2:nth-of-type(1)').css('display','block')
            
           

        }

        let url = location.pathname + '?Cargo'
        history.pushState({
            url: url,
            title: document.title
        }, document.title, url)
    


        }
        

     })

    $(".more_order , .order_detail_name , .order_detail_pic").on({
        
        click:function(){

        
        $('.Member_content_title h2:nth-of-type(1)').text('訂單明細')

        $('.Each_orderDetail').fadeIn(100).siblings('.Mcontent').fadeOut(1)

        $('body,html').animate({
            scrollTop: 0
        }, 10 ,'swing');


        if($(window).width() <= 768){

            $('.Member_RWD_content').fadeOut(1)
            $('.userName').fadeOut(1)
            $('.Member_content_title h2:nth-of-type(1)').css('display','block')
            
           

        }
       

        let url = location.pathname + '?Detail'
        history.pushState({
            url: url,
            title: document.title
        }, document.title, url)
    

        
    
    
        }
        

     })

    $(".point_list h3").on({
        
        click:function(){

        $(this).css('color','#7cafbf')
        $(this).parents().siblings().children('h3').css('color','#8c8c8c')
        
        $('.Member_content_title h2:nth-of-type(1)').text('我的公主幣')

        $('.Fish_point').fadeIn(100).siblings('.Mcontent').fadeOut(1)

        $('body,html').animate({
            scrollTop: 0
        }, 10 ,'swing');


        if($(window).width() <= 768){

            $('.Member_RWD_content').fadeOut(1)
            $('.userName').fadeOut(1)
            $('.Member_content_title h2:nth-of-type(1)').css('display','block')


        }


        let url = location.pathname + '?Point'
        history.pushState({
            url: url,
            title: document.title
        }, document.title, url)


    
    
        }
        

     })
    $(".user_list h3:nth-of-type(1)").on({
        
        click:function(){

        $(this).css('color','#7cafbf')
            
        $(this).siblings('h3').css('color','#8c8c8c');
        $(this).parents().siblings().children('h3').css('color','#8c8c8c')
        $('.Member_content_title h2:nth-of-type(1)').text('會員資料修改')


        $('.Member_edit').fadeIn(100).siblings('.Mcontent').fadeOut(1)

        $('body,html').animate({
            scrollTop: 0
        }, 10 ,'swing');


        if($(window).width() <= 768){

            $('.Member_RWD_content').fadeOut(1)
            $('.userName').fadeOut(1)
            $('.Member_content_title h2:nth-of-type(1)').css('display','block')


        }

        let url = location.pathname + '?User'
        history.pushState({
            url: url,
            title: document.title
        }, document.title, url)



    
    
        }
        

     })

    $(".user_list h3:nth-of-type(2)").on({
        
        click:function(){

        $(this).css('color','#7cafbf')
            
        $(this).siblings('h3').css('color','#8c8c8c');
        $(this).parents().siblings().children('h3').css('color','#8c8c8c')
        $('.Member_content_title h2:nth-of-type(1)').text('密碼修改')


        $('.Password_edit').fadeIn(100).siblings('.Mcontent').fadeOut(1)

        $('body,html').animate({
            scrollTop: 0
        }, 10 ,'swing');


        if($(window).width() <= 768){

            $('.Member_RWD_content').fadeOut(1)
            $('.userName').fadeOut(1)
            $('.Member_content_title h2:nth-of-type(1)').css('display','block')


        }

        let url = location.pathname + '?Password'
        history.pushState({
            url: url,
            title: document.title
        }, document.title, url)


    
    
        }
        

     })




  
   














})
$(document).ready(function () {


    $(window).scroll(function () {

    let scrollNow = $(window).scrollTop();
    console.log('scrollTop', scrollNow);

    // 網頁版 
    if ($(window).width() >= 992) {

/* ///////導覽列////////// */
        if (scrollNow >= 225){

            $('.navbar_items img').css('width','80px').css('transition','0.3s')
        }else{
            $('.navbar_items img').css('width','140px').css('transition','0.3s')

        }

/* /////第一頁////// */

        if (scrollNow >= 132){
            
            $('.home_intro').css('opacity','1').css('transition','0.5s')

        }else{
            $('.home_intro').css('opacity','0').css('transition','0.5s')

        }


        if (scrollNow >= 529){

            $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
        }else{
            $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
        }

/* /////最新漁貨////// */
        if (scrollNow >= 579){
            $('.item_tittle').css('opacity','1').css('transition','0.5s')

        }else{
            $('.item_tittle').css('opacity','0').css('transition','0.5s')

        }

        if (scrollNow >= 733){
            $('.items_warp').css('opacity','1').css('transition','0.8s').css('transform','translateY(-20px)')

        }else{
            $('.items_warp').css('opacity','0').css('transition','0.8s').css('transform','translateY(20px)')

        }

    }

    })

////////商品列效果////////
    if ($(window).width() >= 992) {

        $(".item").on({

            mouseenter: function () {

                

                
                $(this).children().children('.item_title').css('border','solid 0.1px transparent')

                // $(this).children().children('.item_pic').children().css('transform','scale(1.2)').css('transition','0.5s');

                $(this).children().children('.add_btn').css('transform','translateY(0px)').css('transition','0.5s')


            },
            mouseleave: function () {

               

               
                $(this).children().children('.item_title').css('border','solid 0.1px rgba(173, 173, 173, 0.5)')

                // $(this).children().children('.item_pic').children().css('transform','scale(1)').css('transition','0.5s');

                $(this).children().children('.add_btn').css('transform',' translateY(60px)').css('transition','0.5s')



            }
        })

    }




})
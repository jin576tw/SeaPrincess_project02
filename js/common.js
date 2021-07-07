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
    }

    })

////////商品列效果////////
    if ($(window).width() >= 992) {

        $(".item").on({

            mouseenter: function () {

                
                $(this).children().children('.item_title').css('border','solid 0.1px transparent')

                // $(this).children().children('.item_pic').children().css('transform','scale(1.2)').css('transition','0.5s');

            },
            mouseleave: function () {

               
                $(this).children().children('.item_title').css('border','solid 0.1px rgba(173, 173, 173, 0.5)')

                // $(this).children().children('.item_pic').children().css('transform','scale(1)').css('transition','0.5s');

            

            }
        })

        $(".add_btn").on({

            mouseenter: function () {

                
                $(this).addClass('Bounce')


            },
            mouseleave: function () {


                $(this).removeClass('Bounce')



            }

        })


    }




})
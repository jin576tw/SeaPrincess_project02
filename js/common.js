$(document).ready(function () {

////////商品列效果////////


    if ($(window).width() <  992){

        $(".add_btn").on({

            click: function () {

                
                $(this).addClass('Bounce')

            }
    

        })


    }
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

    // Q&A
    if ($(window).width() <  992){

        $('.question_icon').click(function(){
            
            $( this ).toggleClass( 'minus' );
            $( this ).parent().parent('.question').toggleClass( 'answer_open_RWD' );
        })

    }

 
    if ($(window).width() >= 992){

        $('.question_icon').click(function(){
            
            $( this ).toggleClass( 'minus' );
            $( this ).parent().parent('.question').toggleClass( 'answer_open' );
        })
    }


})
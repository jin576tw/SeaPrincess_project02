$(document).ready(function () {

    let LoginURL = location.href.substr(-6,9) == '?Login';
    let SignURL = location.href.substr(-5,9) == '?Sign';


    if(LoginURL){

        $('.Login_tag').css('border-top','solid 1px rgba(23, 34, 61, 0.5)').css('border-right','solid 1px rgba(23, 34, 61, 0.5)').css('border-left','solid 1px rgba(23, 34, 61, 0.5)').css('border-bottom','solid 1px white')


        $('.Sign_tag').css('border-top','solid 1px transparent').css('border-right','solid 1px transparent').css('border-left','solid 1px transparent').css('border-bottom','solid 1px rgba(23, 34, 61, 0.5)')

        $(".Sign_content").fadeOut(1)
        $(".Login_content").fadeIn(100)

    }


    if(SignURL){

        $(this).css('border-top','solid 1px rgba(23, 34, 61, 0.5)').css('border-right','solid 1px rgba(23, 34, 61, 0.5)').css('border-left','solid 1px rgba(23, 34, 61, 0.5)').css('border-bottom','solid 1px white')

        $('.Login_tag').css('border-top','solid 1px transparent').css('border-right','solid 1px transparent').css('border-left','solid 1px transparent').css('border-bottom','solid 1px rgba(23, 34, 61, 0.5)')



        
        $(".Login_content").fadeOut(1)
        $(".Sign_content").fadeIn(100)


    }



    $('.Login_tag').on({


        click:function(){

            $(this).css('border-top','solid 1px rgba(23, 34, 61, 0.5)').css('border-right','solid 1px rgba(23, 34, 61, 0.5)').css('border-left','solid 1px rgba(23, 34, 61, 0.5)').css('border-bottom','solid 1px white')


            $('.Sign_tag').css('border-top','solid 1px transparent').css('border-right','solid 1px transparent').css('border-left','solid 1px transparent').css('border-bottom','solid 1px rgba(23, 34, 61, 0.5)')

            $(".Sign_content").fadeOut(1)
            $(".Login_content").fadeIn(100)


            let url = location.pathname + '?Login'
            history.pushState({
                url: url,
                title: document.title
            }, document.title, url)

           


        }




    })
    $('.Sign_tag').on({


        click:function(){

            $(this).css('border-top','solid 1px rgba(23, 34, 61, 0.5)').css('border-right','solid 1px rgba(23, 34, 61, 0.5)').css('border-left','solid 1px rgba(23, 34, 61, 0.5)').css('border-bottom','solid 1px white')

            $('.Login_tag').css('border-top','solid 1px transparent').css('border-right','solid 1px transparent').css('border-left','solid 1px transparent').css('border-bottom','solid 1px rgba(23, 34, 61, 0.5)')



            
            $(".Login_content").fadeOut(1)
            $(".Sign_content").fadeIn(100)

            let url = location.pathname + '?Sign'
            history.pushState({
                url: url,
                title: document.title
            }, document.title, url)



        }




    })








})
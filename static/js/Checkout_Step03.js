$(document).ready(function () {

    let Step02 = $('.Checkout_step02');
    let Step03 = $('.FinishCheck_step03')

    let StepLine = $('.Checkout_Step_line')
    let bounce = `animate__bounceIn animate__animated`;

    // 第二步驟成功
    $('.final_checkout_btn').on({

        click: function(){
            let check =`<i class="fas fa-check check02"></i>`;

            $('.fa-check').removeClass(bounce)
            

            Step02.fadeOut(1000)
            Step03.fadeIn(500)

            StepLine.css('width','100%')

            $('.step_number02').html(check)
            $('.step_number03').css('background-color','var(--dark_blue)').css('transition','2.5s')
            $('.step_name03 p').css('color','var(--dark_blue)').css('transition','2.5s')

            setTimeout(() => {
                $('.check02').addClass(bounce)
            

            }, 800);

            setTimeout(() => {
            
                $('.check03').addClass(bounce)

            }, 1000);

            // let url = location.pathname + '?step3'
            // history.pushState({
            //     url: url,
            //     title: document.title
            // }, document.title, url)

            $('body,html').animate({
                scrollTop: 0
            }, 1 ,'swing');
        
        
            
        }

    })




})
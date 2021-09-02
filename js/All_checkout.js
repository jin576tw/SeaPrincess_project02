$(document).ready(function () {


    let Step1URL = location.href.substr(-6,9) == '?step1'
    let Step2URL = location.href.substr(-6,9) == '?step2'
    let Step3URL = location.href.substr(-6,9) == '?step3'

    let Step01 = $('.Cart_step01');
    let Step02 = $('.Checkout_step02');
    let Step03 = $('.FinishCheck_step03')
    let StepLine = $('.Checkout_Step_line')


    let check =`<i class="fas fa-check check01"></i>`;
    let bounce = `animate__bounceIn animate__animated`;


    if(Step1URL){

        Step01.css('display','block')
        Step02.css('display','none')
        Step03.css('display','none')


    }

    if(Step2URL){

        Step01.css('display','none')
        Step02.fadeIn(500)
        Step03.css('display','none')


        StepLine.css('width','50%')
        $('.step_number01').html(check)
        $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')
        $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')

    


    }
       

    if(Step3URL){

        Step01.css('display','none')
        Step02.css('display','none')
        Step03.fadeIn(500)


        $('.step_number01').html(check)
        $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')
        $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')

        StepLine.css('width','100%')
        $('.step_number02').html(check)
        $('.step_number03').css('background-color','var(--dark_blue)').css('transition','2.5s')
        $('.step_name03 p').css('color','var(--dark_blue)').css('transition','2.5s')


        setTimeout(() => {
            $('.check01').addClass(bounce)
            $('.check02').addClass(bounce)
            $('.check03').addClass(bounce)
           
    
        },300)
       

    
       
    }
    
  


    // 第一步驟成功
    $('.cart_checkout_btn').on({


        click: function(){
           

            Step01.fadeOut(1000)
            Step02.fadeIn(500)

            StepLine.css('width','50%')

            $('.step_number01').html(check)

            $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')

            $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')

            setTimeout(() => {
                $('.check01').addClass(bounce)

            }, 700);
        

            let url = location.pathname + '?step2'
            history.pushState({
                url: url,
                title: document.title
            }, document.title, url)

            $('body,html').animate({
                scrollTop: 0
            }, 1 ,'swing');
           
            
        }

    })

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

                let url = location.pathname + '?step3'
                history.pushState({
                    url: url,
                    title: document.title
                }, document.title, url)

                $('body,html').animate({
                    scrollTop: 0
                }, 1 ,'swing');
            
               
                
            }
    
        })


    $('.check_logbtn').on({

        click: function(){

            location.href="../html/Login_sign.html??Login"

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
  



    // 相關商品載入
    let OtherSeafoodWarp = $('.Other_Seafood_warp')
    let OtherItemWarp = $('.Other_Item_warp')

    $.get("../JSON/Seafood.json", function (data) {

        let d = data;

        //新隨機商品資料
        let rd = []

        //商品隨機產生
        randomProuducts(4,d,rd)

        // 依照商品時間排序
        timeSort(rd)


        for(let i = 0 ; i < rd.length ;i++){ 
            // 送隨機商品上去
            OtherSeafoodWarp.append(PRODUCT(rd[i]))

        }
        



    })


    $.get("../JSON/Item.json", function (data) {

        let d = data;

        let rd = []

        randomProuducts(4,d,rd)

        // 依照商品時間排序
        timeSort(rd)

        for(let i = 0 ; i < rd.length ;i++){ 
            // 送隨機商品上去
            OtherItemWarp.append(PRODUCT_B(rd[i]))

        }



    })


})
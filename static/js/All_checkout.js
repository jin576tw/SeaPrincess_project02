$(document).ready(function () {


    // let Step1URL = location.href.substr(-6,9) == '?step1'
    // let Step2URL = location.href.substr(-6,9) == '?step2'
    // let Step3URL = location.href.substr(-6,9) == '?step3'

    let Step01 = $('.Cart_step01');
    let Step02 = $('.Checkout_step02');
    let Step03 = $('.FinishCheck_step03')
    let StepLine = $('.Checkout_Step_line')


    let check =`<i class="fas fa-check check01"></i>`;
    let bounce = `animate__bounceIn animate__animated`;


    // if(Step1URL){

    //     Step01.css('display','block')
    //     Step02.css('display','none')
    //     Step03.css('display','none')


    // }

    // if(Step2URL){

    //     Step01.css('display','none')
    //     Step02.fadeIn(500)
    //     Step03.css('display','none')


    //     StepLine.css('width','50%')
    //     $('.step_number01').html(check)
    //     $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')
    //     $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')

    


    // }
       

    // if(Step3URL){

    //     Step01.css('display','none')
    //     Step02.css('display','none')
    //     Step03.fadeIn(500)


    //     $('.step_number01').html(check)
    //     $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')
    //     $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')

    //     StepLine.css('width','100%')
    //     $('.step_number02').html(check)
    //     $('.step_number03').css('background-color','var(--dark_blue)').css('transition','2.5s')
    //     $('.step_name03 p').css('color','var(--dark_blue)').css('transition','2.5s')


    //     setTimeout(() => {
    //         $('.check01').addClass(bounce)
    //         $('.check02').addClass(bounce)
    //         $('.check03').addClass(bounce)
           
    
    //     },300)
       

    
       
    // }


    /////////////////////// 第二步驟結帳頁///////////////////

    // 勾選的商品
   let CheckProductArr = []

    // 第一步驟成功，載入商品到第二步
    $('.cart_checkout_btn').on({


        click: function(){
           
            // 抓取勾選資料
            // 生鮮商品
            let SeafoodCheck = $("input:checked[name='Seafood_check[]']");

            SeafoodCheck.each(function(){

                let checkID = $(this).parent().parent().attr('Product-ID')
                let isFood = $(this).parent().parent().attr('food')
                
                isFood == 'false' ? isFood=false : isFood = true;

                let CheckSeafoodObj = {pid:checkID,food:isFood}
             
                CheckProductArr.push(CheckSeafoodObj)
             })


            // 海鮮魚箱 
            let FishboxCheck = $("input:checked[name='Fishbox_check[]']");

            FishboxCheck.each(function(){

                let checkID = $(this).parent().parent().attr('Product-ID')
                let isfishbox = $(this).parent().parent().attr('fishbox')

                isfishbox == 'false' ? isfishbox=false : isfishbox = true;

                let CheckFishboxObj = {pid:checkID,fishbox:isfishbox}
             
                CheckProductArr.push(CheckFishboxObj)
             })


            // 釣具用品
            let ToolCheck = $("input:checked[name='Tool_check[]']");


            ToolCheck.each(function(){

               let checkID = $(this).parent().parent().attr('Product-ID')
               let isFood = $(this).parent().parent().attr('food')
               
               
               isFood == 'false' ? isFood=false : isFood = true;

               let CheckToolObj = {pid:checkID,food:isFood}
            
               CheckProductArr.push(CheckToolObj)
            })
            
            
    
            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
            

            //個別總金額
            let CheckSeafoodtotal = 0
            let CheckTooltotal = 0
            let CheckFishboxtotal = 0

            // 載入勾選商品...
            for(let i = 0 ; i < cookieArr.length  ;i++){ 

                for(let j = 0 ; j < CheckProductArr.length ;j++){ 

                    // 計算當前商品金額
                    let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price);


                    //若為生鮮商品
                    if(CheckProductArr[j].food){

                        if(CheckProductArr[j].pid == cookieArr[i].pid && cookieArr[i].food){

                            let CheckSeafood =`

                            <div class="checkout_item_list fish_item_list" Product-ID="${cookieArr[i].pid}">
                                    <div class="checkout_item_pic">
                                        <div class="checkout_item_pic_img">
                                            <img src="${cookieArr[i].Product_Pic}" alt="">
                                        </div>
                                        <div class="checkout_item_count">${cookieArr[i].count}</div>

                                    </div>
                                    <div class="checkout_item_name">
                                        <p>${cookieArr[i].Product_Name}</p>
                                    </div>
                                    <div class="checkout_item_price">
                                        <p>${nowprice}</p>
                                    </div>

                            </div>`


                            CheckSeafoodtotal+=nowprice


                            $('.CheckSeafoodWarp').append(CheckSeafood)


                        }

                       

                    //若為釣具用品
                    }else if(CheckProductArr[j].food == false){

                        if(CheckProductArr[j].pid == cookieArr[i].pid && cookieArr[i].food == false){

                            let CheckTool =`<div class="checkout_item_list tool_item_list" Product-ID="${cookieArr[i].pid}">
                                <div class="checkout_item_pic">
                                    <div class="checkout_item_pic_img">
                                        <img src="${cookieArr[i].Product_Pic}" alt="">
                                    </div>
                                    <div class="checkout_item_count">${cookieArr[i].count}</div>

                                </div>
                                <div class="checkout_item_name">
                                    <p>${cookieArr[i].Product_Name}</p>
                                    <p>AK - 5000</p>
                                </div>
                                <div class="checkout_item_price">
                                    <p>${nowprice}</p>
                                </div>

                            </div>`


                            CheckTooltotal+=nowprice

                            $('.CheckToolWarp').append(CheckTool)

                        }

                       

                    //若為海鮮魚箱
                    }else if(CheckProductArr[j].fishbox){

                        if(CheckProductArr[j].pid == cookieArr[i].pid && cookieArr[i].fishbox){


                            let CheckFishbox =`


                                <div class="checkout_item_list fishbox_item_list">
                                    <div class="checkout_item_pic">
                                        <div class="checkout_item_pic_img">
                                            <img src="${cookieArr[i].Product_Pic}" alt="">
                                        </div>
                                        <div class="checkout_item_count">${cookieArr[i].count}</div>

                                    </div>
                                    <div class="checkout_item_name">
                                        <p>${cookieArr[i].Product_Name}</p>
                                    </div>
                                    <div class="checkout_item_price">
                                        <p>${nowprice}</p>
                                    </div>

                                </div>
                        
                            
                            `

                            CheckFishboxtotal+=nowprice
                            $('.CheckFishboxWarp').append( CheckFishbox)
                          

                        }


                    }
                    

                }

            }

           
            // 生鮮漁獲金額
            $('.fish_item_price_total p:nth-of-type(2)').text( CheckSeafoodtotal)

            // 海鮮魚箱金額
            $('.fishbox_item_price_total p:nth-of-type(2)').text( CheckFishboxtotal)

            // 釣具用品金額
            $('.fishing_item_price_total p:nth-of-type(2)').text( CheckTooltotal)

         
            // 總金額小計
            let CheckFinalTotal = CheckSeafoodtotal+CheckFishboxtotal+CheckTooltotal
            $('.total_detail p:nth-of-type(2)').text(CheckFinalTotal)




            // 判斷最後結帳欄位
            function finalfilter(arr){

                let fishbox =  arr.filter ((p) => p.fishbox == true)
                let seafood =  arr.filter ((p) => p.food == true)
                let item=  arr.filter ((p) => p.food == false)

                // 若生鮮食品為空
                if(seafood.length == 0 ){

                    $('.fish_checkout').hide()
                }else{

                    $('.fish_checkout').show()

                }

                // 若釣具用品為空
                if(item.length == 0  ){

                    $('.tool_checkout').hide()
                }else{

                    $('.tool_checkout').show()

                }


                //若海鮮魚箱為空
                if(fishbox.length == 0 ){

                    $('.fishbox_checkout').hide()
                }else{

                    $('.fishbox_checkout').show()

                }


            }


            finalfilter(CheckProductArr)


            Step01.fadeOut(1000)
            Step02.fadeIn(500)

            StepLine.css('width','50%')

            $('.step_number01').html(check)

            $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')

            $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')

            setTimeout(() => {
                $('.check01').addClass(bounce)

            }, 700);
        

            // let url = location.pathname + '?step2'
            // history.pushState({
            //     url: url,
            //     title: document.title
            // }, document.title, url)

            $('body,html').animate({
                scrollTop: 0
            }, 1 ,'swing');
           
            
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


    $('.check_logbtn').on({

        click: function(){

            location.href="./Login_sign.html??Login"

        }



    })

  
  



    // 相關商品載入
    let OtherSeafoodWarp = $('.Other_Seafood_warp')
    let OtherItemWarp = $('.Other_Item_warp')

    $.get("./static/JSON/Seafood.json", function (data) {

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


    $.get("./static/JSON/Item.json", function (data) {

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
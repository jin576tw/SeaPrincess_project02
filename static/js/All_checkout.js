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


    // 載入結帳頁商品
    function CheckProduct(arr){

        let isFood = arr.food;


        // 計算當前商品金額
        let nowprice = parseInt(arr.count) * parseInt(arr.Product_Price);


        if(isFood){

            Item_left= ``

        // 商品庫存小於100顯示商品庫存
        if(arr.Product_Left <= 100){

            Item_left= `<div class="Item_left">
                            <h4>${arr.Product_Left}</h4>
                        </div>`

            
        }else{


            Item_left= ``
            

        }
        
        let seafood_items_list = `

            <div class="Items_list seafood_items_list">

                <div class="Items_list_content Items_list_head">
                    <input type="checkbox" name="Item_check" id="" class="Item_check">
                    <div class="Items_pic">
                        <img src="${arr.Product_Pic}" alt="">
                    </div>
                </div>

                <div class="Items_list_detail">
                    <div class="Items_list_content Items_name">
                        <h3>${arr.Product_Name}</h3>
                    </div>

                    <div class="Items_list_detail_tool">
                        <div class="Items_list_content Items_list_count">
                            
                            <div class="count_warp">

                                <div class="Counter">
                                    <div class="countBtn countBtn_minus">
                                        <i class="fas fa-minus"></i>
                                    </div>
                                    <div class="countNum">${arr.count}</div>
                                    <div class="countBtn countBtn_plus">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                    
                                </div>`+Item_left+`</div>

                        </div>
                        <div class="Items_list_content Items_list_price">
                            <p>${nowprice}</p>
                        </div>
                        <div class="Items_list_content Items_list_delete">
                            <i class="far fa-trash-alt"></i>
                            
                        </div>
                    </div>


                </div>
                

            </div>
            
            `

            $('.Seafood_items_warp').append(seafood_items_list)

        }else if(arr.fishbox){


            let fishbox_items_list =`

                <div class="Items_list fishbox_items_list">

                <div class="Items_list_content Items_list_head">
                    <input type="checkbox" name="Item_check" id="" class="Item_check">
                    <div class="Items_pic">
                        <img src="${arr.Product_Pic}" alt="">
                    </div>
                </div>

                <div class="Items_list_detail">
                    <div class="Items_list_content Items_name">
                        <h3>${arr.Product_Name}</h3>
                        <p>(下一頁可修改客製資料)</p>
                    </div>

                    <div class="Items_list_detail_tool">
                        <div class="Items_list_content Items_list_count">

                            <div class="count_warp">

                                <div class="Counter">
                                    <div class="countBtn countBtn_minus">
                                        <i class="fas fa-minus"></i>
                                    </div>
                                    <div class="countNum">${arr.count}</div>
                                    <div class="countBtn countBtn_plus">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                        <div class="Items_list_content Items_list_price">
                            <p>${nowprice}</p>
                        </div>
                        <div class="Items_list_content Items_list_delete">
                            <i class="far fa-trash-alt"></i>
                            
                        </div>
                    </div>


                </div>
                

            </div>
            `

            $('.fishbox_items_warp').append(fishbox_items_list)

        }else if(!isFood){

              // 釣具型號選擇
            let Item_type = `<option>請選擇商品種類</option>`;

            for(let j = 0 ; j < arr.Product_type.length ;j++){ 

                let optiStr = `<option>${arr.Product_type[j]}</option>`
    
                Item_type+=optiStr
    
            }


            let tool_items_list=`

                <div class="Items_list tool_items_list">

                    <div class="Items_list_content Items_list_head">
                        <input type="checkbox" name="Item_check" id="" class="Item_check">
                        <div class="Items_pic">
                            <img src="${arr.Product_Pic}" alt="">
                        </div>
                    </div>

                    <div class="Items_list_detail">
                        <div class="Items_list_content Items_name">
                            <h3>${arr.Product_Name}</h3>
                            <select class="Items_type">`+Item_type+`</select>
                        </div>

                        <div class="Items_list_detail_tool">
                            <div class="Items_list_content Items_list_count">

                                <div class="Counter">
                                    <div class="countBtn countBtn_minus">
                                        <i class="fas fa-minus"></i>
                                    </div>
                                    <div class="countNum">${arr.count}</div>
                                    <div class="countBtn countBtn_plus">
                                        <i class="fas fa-plus"></i>
                                    </div>
                                </div>

                            </div>
                            <div class="Items_list_content Items_list_price">
                                <p>${nowprice}</p>
                            </div>
                            <div class="Items_list_content Items_list_delete">
                                <i class="far fa-trash-alt"></i>
                                
                            </div>
                        </div>


                    </div>
                    

                </div> `


            $('.tool_items_warp').append(tool_items_list)

        }



    }


    // 判斷商品欄位是否出現
    function checkfilter(arr){


    let fishbox =  arr.filter ((p) => p.fishbox == true)
    let seafood =  arr.filter ((p) => p.food == true)
    let item=  arr.filter ((p) => p.food == false)


        // 若生鮮食品為空
        if(seafood.length == 0 ){

            $('.fish_items').css('display','none');
        }else{

            $('.fish_items').css('display','block');

        }

        // 若釣具用品為空
        if(item.length == 0  ){

            $('.tool_items').css('display','none');
        }else{

            $('.tool_items').css('display','block');

        }


        //若海鮮魚箱為空
        if(fishbox.length == 0 ){

            $('.fishbox_items').css('display','none');
        }else{

            $('.fishbox_items').css('display','block');

        }



    }


    

    let CHECKTOTAL = $('.total_sum p:nth-of-type(2)')
    let FINALTOTAL = $('.total_money p:nth-of-type(2)')


    if( $.cookie('Cart') == null){


        //購物車空狀態
        $('.Cart_items_empty').css('display','flex')

        // 商品欄位狀態
        $('.fish_items').css('display','none');
        $('.fishbox_items').css('display','none');
        $('.tool_items').css('display','none');


    }else{


        let cookieStr = $.cookie('Cart');
        let cookieArr = JSON.parse(cookieStr);


        $('.Cart_items_empty').css('display','none')

        // 判斷結帳商品欄狀態
        checkfilter(cookieArr)

        if(cookieStr){

            let total_price = 0

            // 第一步商品載入
            for(let i = 0 ; i < cookieArr.length ;i++){ 
    
                 // 計算當前商品金額
                let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price);
                total_price += nowprice;
    
    
                // 商品載入....
                CheckProduct(cookieArr[i])
    
            }
    
    
            // 小計金額
            CHECKTOTAL.text(total_price)
    
            let final_price = parseInt(CHECKTOTAL.text()) - 150
    
    
            // 合計金額
            FINALTOTAL.text(final_price)
           
            
    
        }
    

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
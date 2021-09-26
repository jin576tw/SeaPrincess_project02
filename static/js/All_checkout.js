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

   let isPass = true

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

                CheckSeafoodObj = {pid:checkID,food:isFood}
             
                CheckProductArr.push(CheckSeafoodObj)
             })


            // 海鮮魚箱 
            let FishboxCheck = $("input:checked[name='Fishbox_check[]']");

            FishboxCheck.each(function(){

                let checkID = $(this).parent().parent().attr('Product-ID')
                let isfishbox = $(this).parent().parent().attr('fishbox')

                isfishbox == 'false' ? isfishbox=false : isfishbox = true;

                CheckFishboxObj = {pid:checkID,fishbox:isfishbox}
             
                CheckProductArr.push(CheckFishboxObj)
             })


            // 釣具用品
            let ToolCheck = $("input:checked[name='Tool_check[]']");


            ToolCheck.each(function(){

               let checkID = $(this).parent().parent().attr('Product-ID')
               let isFood = $(this).parent().parent().attr('food')
               
               
               isFood == 'false' ? isFood=false : isFood = true;

         
                //抓取選擇商品種類
                let Alltype = $(this).parent().next().children('.Items_name').children('select[name="Items_Alltype"]')

                let selected = Alltype.children('option:selected').text()

                
                let CheckToolObj = {pid:checkID,food:isFood,type:selected}

                

                CheckProductArr.push(CheckToolObj)

                
              
            })

            
            // 檢查是否選擇釣具種類
            let isCheckPass  = function(arr){

                let checkPass = arr.filter ((p) => p.type )

                for(let i = 0 ; i < checkPass.length ;i++){ 

                    let  isCheckType = checkPass[i].type


                    if(isCheckType == "請選擇商品種類"){

                            alert('尚未選擇商品種類')

                            isPass = false
                            
                            break;

                    }
                    
                    if(isCheckType != "請選擇商品種類"){

                            isPass= true;

                    }

                }
            }

            isCheckPass(CheckProductArr)


            // 若勾選商品為空
            if(CheckProductArr.length == 0){

                isPass = false
                alert('請勾選商品')

            }

           
            // 是否通過結帳第一步驟
            if(!isPass){

                // 若未通空清空陣列
                CheckProductArr = []



            }else{

            
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
                                        <p>${CheckProductArr[j].type}</p>
                                        
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
                            


                                /////載入修改魚箱資訊///////

                                 // 料理習慣
                                let cooktype = cookieArr[i].Product_cook.join('、')
                                
                                //魚箱選填項目
                                let fisboxMessage = ``

                                if( cookieArr[i].Product_message == ''){

                                    fisboxMessage = ``
                            
                                }else{
                                    fisboxMessage = `<p>選填：${cookieArr[i].Product_message}</p>`
                                }


                                
                                //魚箱資訊內容
                                let FishboxInfo = `<div class="cagro_fishbox_info"  fishbox_pid="${cookieArr[i].pid}">
                              
                                <div class="cargo_list cargo_custom_info">
                                    <h3>客製訊息</h3>
                                    <div class="cargo_info_text">
                                        <div class="fishbox_Infotext">
                                            <p>客製組合預算：${cookieArr[i].Product_Price}元</p>
                                            <p>食用人數：${cookieArr[i].Product_qty}</p>
                                            <p>料理習慣：${cooktype}</p>`
                                            +fisboxMessage+`</div>

                                        <div class="fishbox_edit">
                                            <i class="fas fa-pen-alt"></i>
                                        </div>  
                                        
                                    </div>
                                </div>`

                                // 修改魚箱選項
                                let Editfishbox =`<div class="checkout_info fishbox_detail" fishbox_pid="${cookieArr[i].pid}">
                                    <div class="checkout_info_bg"></div>
                                    <div class="checkout_info_warp">
                                        <div class="checkout_info_top">
                                            <i class="fas fa-times info_cancel"></i>
                                        </div>

                                        <!-- 修改魚箱選項 -->
                                        <div class="checkout_info_content">
                                            <div class="checkout_info_list">
                                                <h3>客製組合預算<span>*</span></h3>
                                                <div class="fishbox_select_wrap fishbox_pice_select">
                                
                                                    <div class="fishbox_btn ">
                                                        <label><input type="radio" name="fishbox_pice" value="2000" required>2000</label>
                                                    </div>
                                
                                                    <div class="fishbox_btn ">
                                                        <label><input type="radio" name="fishbox_pice" value="3000" required>3000</label>
                                                    </div>
                                
                                                    <div class="fishbox_btn ">
                                                        <label><input type="radio" name="fishbox_pice" value="4000" required>4000</label>
                                                    </div>
                                
                                                    <div class="fishbox_btn ">
                                                        <label><input type="radio" name="fishbox_pice" value="5000" required>5000</label>
                                                    </div>
                                                </div>
                                
                                            </div>
                                
                                            <div class="checkout_info_list">
                                                <h3>食用人數<span>*</span></h3>
                                                <div class="fishbox_select_wrap fishbox_qty_select">
                                
                                        
                                                    <div class="fishbox_btn ">
                                                        <label><input type="radio" name="fishbox_qty" value="1-2人" required>1-2人</label>
                                                    </div>
                                
                                                    <div class="fishbox_btn ">
                                                        <label><input type="radio" name="fishbox_qty" value="3-4人" required>3-4人</label>
                                                    </div>
                                
                                                    <div class="fishbox_btn ">
                                                        <label><input type="radio" name="fishbox_qty" value="5-6人" required>5-6人</label>
                                                    </div>
                                
                                                    <div class="fishbox_btn ">
                                                        <label><input type="radio" name="fishbox_qty" value="6人以上" >6人以上</label>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                
                                            <div class="checkout_info_list">
                                                <h3>料理習慣 (可複選)</h3>
                                                <div class="fishbox_select_wrap fishbox_cook_select">
                                
                                                    <div class="fishbox_btn">
                                                        <label><input type="checkbox" name="fishbox_cook[]" value="清蒸">清蒸</label> 
                                                       
                                
                                                    </div>
                                                    <div class="fishbox_btn">
                                                        
                                                        <label><input type="checkbox" name="fishbox_cook[]" value="煮湯">煮湯</label> 
                                
                                                    </div>
                                                    <div class="fishbox_btn">
                                                        <label><input type="checkbox" name="fishbox_cook[]" value="乾煎(紅燒)">乾煎(紅燒)</label> 
                                                    </div>
                                
                                                    <div class="fishbox_btn">
                                                        <label><input type="checkbox" name="fishbox_cook[]" value="鹽烤">鹽烤</label> 
                                                    </div>
                                
                                                    
                                                </div>
                                            </div>
                                
                                            <div class="checkout_info_list">
                                                <h3>可選填想配入的品項，若無現貨會再通知您。</h3>
                                                <textarea name="fishbox_message"rows="6"cols="40" id="fishbox_message"></textarea>
                                
                                               
                                            </div>

                                        </div>
            
                                    

                                        <div class="check_info_bottom">
                                            <button class="info_confirm">確認</button>
            
                                        </div>

                                    </div>
                                

                                    

                                </div>
                                </div>`
                                
                               

                                $('.cagro_fishboxes_warp').append(FishboxInfo+Editfishbox)
                              
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




                // 判斷最後結帳欄位狀態
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

///////////////////////////////////////////跳轉畫面//////////////////////////////////////////////
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
            
            
            
        }

    })


  
    //修改魚箱選項
    let CagroFishboxes = $(".cagro_fishboxes_warp")

    CagroFishboxes.on("click",".fishbox_edit ",function(){

   
        $(this).parent().parent().next('.fishbox_detail').fadeIn(100)



    })


    // 選單功能畫面
    let CheckoutWarp = $('.Checkout_warp')

    CheckoutWarp.on("click",".info_cancel , .checkout_info_bg ",function(){

        $('.checkout_info').fadeOut(100);
    

    })


    CheckoutWarp.on("click",'.cargo_info_edit',function(){

        $(this).parent().parent().next('.checkout_info').fadeIn(100)

    })
    

    //生鮮物流方式
    let Seafood_deliver = $('#All_Seafood_deliver')

    Seafood_deliver.change(function(){


        let deliver_method =  $(this).children('option:selected')


        let deliver= $('#seafood_deliver')//填入收件地址
        let store =$('#seafood_store')//填入超商地址

        // 物流方式選擇
        if(deliver_method.val() == '0'){

            $('#Seafood_fee').hide()
            $('#Seafood_arrive').hide()

            deliver.hide()
            store.hide()
            

        }else if(deliver_method.val() == '120'){

            $('#Seafood_fee').show()
            $('#Seafood_fee p:nth-of-type(2)').text(deliver_method.val())

            $('#Seafood_arrive').show()


            deliver.show()
            store.hide()
            

        }else if(deliver_method.val() == '60'){

            $('#Seafood_fee').show()
            $('#Seafood_fee p:nth-of-type(2)').text(deliver_method.val())

            $('#Seafood_arrive').hide()

            deliver.hide()
            store.show()
        


        }
        

    })


    //海鮮魚箱物流方式
    let Fishbox_deliver = $('#All_Fishbox_deliver')

    Fishbox_deliver.change(function(){


        let deliver_method =  $(this).children('option:selected')


        let deliver= $('#fishbox_deliver')//填入收件地址
        let store =$('#fishbox_store')//填入超商地址

        // 物流方式選擇
        if(deliver_method.val() == '0'){

            $('#Fishbox_fee').hide()
            $('#Fishbox_arrive').hide()

           
            deliver.hide()
            store.hide()
            

        }else if(deliver_method.val() == '120'){

            $('#Fishbox_fee').show()
            $('#Fishbox_fee p:nth-of-type(2)').text(deliver_method.val())

            $('#Fishbox_arrive').show()


            deliver.show()
            store.hide()
            

        }else if(deliver_method.val() == '60'){

            $('#Fishbox_fee').show()
            $('#Fishbox_fee p:nth-of-type(2)').text(deliver_method.val())

            $('#Fishbox_arrive').hide()

            deliver.hide()
            store.show()
        


        }
        

    })

    
    // 釣具用品物流方式
    let Tool_deliver = $('#All_Tool_deliver')

    Tool_deliver.change(function(){


        let deliver_method =  $(this).children('option:selected')


        let deliver= $('#tool_deliver')//填入收件地址
        let store =$('#tool_store')//填入超商地址

        // 物流方式選擇
        if(deliver_method.val() == '0'){

            $('#Tool_fee').hide()
          

           
            deliver.hide()
            store.hide()
            

        }else if(deliver_method.val() == '120'){

            $('#Tool_fee').show()
            $('#Tool_fee p:nth-of-type(2)').text(deliver_method.val())

           


            deliver.show()
            store.hide()
            

        }else if(deliver_method.val() == '60'){

            $('#Tool_fee').show()
            $('#Tool_fee p:nth-of-type(2)').text(deliver_method.val())

            

            deliver.hide()
            store.show()
        


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
'use strict'
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
            
            isFood == 'false' ? isFood = false : isFood = true;

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

        
            //抓取選擇商品種類
            let Alltype = $(this).parent().next().children('.Items_name').children('select[name="checkItems_Alltype"]')

            let selected = Alltype.children('option:selected').val()

            
            let CheckToolObj = {pid:checkID,food:isFood,type:selected}

            

            CheckProductArr.push(CheckToolObj)

            
            
        })

        
        
        // 檢查是否選擇釣具種類
        let isCheckPass  = function(arr){

            let checkPass = arr.filter((p) => p.type == '' )

            if(checkPass.length >0){

                alert('尚未選擇商品種類')

                isPass = false


            }else{

                isPass= true;

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

                        

                        if(CheckProductArr[j].pid == cookieArr[i].pid && cookieArr[i].Selected_type == CheckProductArr[j].type){


                            let tid = CheckProductArr[j].type

                            
                            let CheckTool =`<div class="checkout_item_list tool_item_list" Product-ID="${cookieArr[i].pid}">
                                <div class="checkout_item_pic">
                                    <div class="checkout_item_pic_img">
                                        <img src="${cookieArr[i].Product_Pic}" alt="">
                                    </div>
                                    <div class="checkout_item_count">${cookieArr[i].count}</div>

                                </div>
                                <div class="checkout_item_name">
                                    <p>${cookieArr[i].Product_Name}</p>
                                    <p>${cookieArr[i].Product_type[tid]}</p>
                                    
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

                                <div class="checkout_item_list fishbox_item_list" Product-ID="${cookieArr[i].pid}">
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

                        
                                    <div class="checkout_info_content">
                                        <div class="checkout_info_list">
                                            <h3>客製組合預算<span>*</span></h3>
                                            <div class="fishbox_select_wrap fishbox_pice_select">
                                            
                                                <div class="fishbox_btn">
                                                    <label><input type="radio" name="fishbox_pice" value="2000" required >2000</label>
                                                </div>
                                                <div class="fishbox_btn">
                                                    <label><input type="radio" name="fishbox_pice" value="3000" required >3000</label>
                                                </div>
                                                <div class="fishbox_btn">
                                                    <label><input type="radio" name="fishbox_pice" value="4000" required >4000</label>
                                                </div>
                                                <div class="fishbox_btn">
                                                    <label><input type="radio" name="fishbox_pice" value="5000" required >5000</label>
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
                                                    <label><input type="radio" name="fishbox_qty" value="5-6人" required >5-6人</label>
                                                </div>
                                            <div class="fishbox_btn ">
                                                    <label><input type="radio" name="fishbox_qty" value="6人以上" required>6人以上</label>
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
                                                    
                                                    <label><input type="checkbox" name="fishbox_cook[]" value="煮湯" >煮湯</label> 
                            
                                                </div>
                                                <div class="fishbox_btn">
                                                    <label><input type="checkbox" name="fishbox_cook[]" value="乾煎(紅燒)" >乾煎(紅燒)</label> 
                                                </div>
                            
                                                <div class="fishbox_btn">
                                                    <label><input type="checkbox" name="fishbox_cook[]" value="鹽烤">鹽烤</label> 
                                                </div>
                            
                                                
                                            </div>
                                        </div>
                            
                                        <div class="checkout_info_list">
                                            <h3>可選填想配入的品項，若無現貨會再通知您。</h3>
                                            <textarea name="fishbox_message"rows="6"cols="40" id="fishbox_message">${cookieArr[i].Product_message}</textarea>
                            
                                            
                                        </div>

                                    </div>
        
                                

                                    <div class="check_info_bottom">
                                        <button class="info_confirm" id="box_edited">確認</button>
        
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


            

            // 計算運費
            // 生鮮漁獲運費
            let SeafoodFee = parseInt($('#Seafood_fee p:nth-of-type(2)').text())

            if(CheckSeafoodtotal == 0){

                SeafoodFee = 0
            }

            // 海鮮魚箱運費
            let FishboxFee =  parseInt($('#Fishbox_fee p:nth-of-type(2)').text())

            if(CheckFishboxtotal == 0){

                FishboxFee = 0
            }

            // 釣具用品運費
            let ToolFee =  parseInt($('#Tool_fee p:nth-of-type(2)').text())

            if(CheckTooltotal == 0){

                ToolFee = 0
            }


            //冷凍運費
            let FreezeFee =  SeafoodFee+FishboxFee
                        
            if( FreezeFee == 240){

                FreezeFee = 120//海鮮和魚箱算在一起
            }

            
            // 折扣計算
            // 運費欄位
            let TotalFee = 0
            let CheckFee = $('.fee_detail p:nth-of-type(2)')

            // 冷凍貨物金額
            let CheckFreezeTotal = CheckSeafoodtotal+ CheckFishboxtotal

            //達成冷凍、釣具優惠
            if(CheckFreezeTotal >= 2000 && CheckTooltotal>=1500){

                $('.fee_detail_info li').css('color','var(--orange)')

                CheckFee.text(0).css('color','var(--grey)').css('text-decoration','line-through')

                
            //達成冷凍優惠
            }else if(CheckFreezeTotal >= 2000){

                
                FreezeFee = 0 

                TotalFee = FreezeFee+ ToolFee


                if(TotalFee == 0){

                    CheckFee.text(0).css('color','var(--grey)').css('text-decoration','line-through')
                }
                CheckFee.text(TotalFee)

                $('.fee_detail_info li:nth-of-type(1)').css('color','var(--orange)')

                
            //達成釣具優惠        
            }else if(CheckTooltotal>=1500){

                ToolFee = 0

                TotalFee = FreezeFee+ ToolFee

                if(TotalFee == 0){

                    CheckFee.text(0).css('color','var(--grey)').css('text-decoration','line-through')
                }

                CheckFee.text(TotalFee)

                $('.fee_detail_info li:nth-of-type(2)').css('color','var(--orange)')

            }else{


                TotalFee = FreezeFee+ ToolFee

                CheckFee.text(TotalFee)


            }
            


            let OrderPrice = CheckFinalTotal + TotalFee;


            let FinalOrderPrice =  $('.final_total_price p:nth-of-type(2)')
            

            FinalOrderPrice.text( OrderPrice)

            
            

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





//修改魚箱選項載入
let CagroFishboxes = $(".cagro_fishboxes_warp")
CagroFishboxes.on("click",".fishbox_edit ",function(){

    
    // 魚箱跳出
    $(this).parent().parent().next('.fishbox_detail').fadeIn(100)

    // 魚箱id
    let fid = parseInt($(this).parent().parent().parent().attr('fishbox_pid'))

    // 魚箱價格
    let boxPrice = $(this).parent().parent().next('.fishbox_detail').children('.checkout_info_warp').children('.checkout_info_content').children('.checkout_info_list').children('.fishbox_pice_select').children().children().children()

    // 魚箱人數
    let boxQty = $(this).parent().parent().next('.fishbox_detail').children('.checkout_info_warp').children('.checkout_info_content').children().children('.fishbox_qty_select').children().children().children()

    // 魚箱烹煮方式
    let boxCook =$(this).parent().parent().next('.fishbox_detail').children('.checkout_info_warp').children('.checkout_info_content').children().children('.fishbox_cook_select').children().children().children()

    // 載入勾選項目
    let cookieStr = $.cookie('Cart');
    let cookieArr = JSON.parse(cookieStr);
                            
    for(let i = 0 ; i < cookieArr.length ;i++){ 


        if(cookieArr[i].fishbox && cookieArr[i].pid == fid){

        // 魚箱價格載入
        boxPrice.each(function(){


            if($(this).val() == cookieArr[i].Product_Price){


                $(this).prop("checked",true)
            };

        
        })


        // 魚箱人數載入
        boxQty.each(function(){

            if($(this).val() == cookieArr[i].Product_qty){


            $(this).prop("checked",true)
            
            };

    
        })


            // 魚箱烹煮方式載入
        boxCook.each(function(){

            

            for(let j = 0 ; j < cookieArr[i].Product_cook.length ;j++){ 


            if($(this).val() == cookieArr[i].Product_cook[j]){

                $(this).prop("checked",true)
            
            };


            }
            
        })

        break

        }

    }
    
    
                    

})


// 修改魚箱內容
CagroFishboxes.on("click","#box_edited",function(){

    // 編輯魚箱價錢
    let editPrice = $(this).parent().prev().children().children('.fishbox_pice_select').children().children().children('input:checked').val()


    // 編輯魚箱人數
    let editQty = $(this).parent().prev().children().children('.fishbox_qty_select').children().children().children('input:checked').val()


    // 編輯魚箱料理方式
    let editCook = $(this).parent().prev().children().children('.fishbox_cook_select').children().children().children('input:checked')

    // 魚箱料理方式array
    let editCookArr = []
    editCook.each(function(){

    editCookArr.push($(this).val())
    
    })

    // 編輯魚箱訊息
    let editMessage =$(this).parent().prev().children().children('textarea').val()


    // 魚箱ｉｄ
    let fid =$(this).parent().parent().parent().attr('fishbox_pid')

    

    let fisboxMessage =  ``

    if(editMessage == ''){


    fisboxMessage = ``


    }else{

    fisboxMessage =`<p>選填：${editMessage}</p>`


    }
    

    // 視覺更新內容
    let editContent =  `

    <p>客製組合預算：${editPrice}元</p>
    <p>食用人數：${editQty}</p>
    <p>料理習慣：${editCookArr.join('、')}</p>`
    +fisboxMessage+`</div>
    `

    let fishbox_Infotext = $(this).parent().parent().parent().prev().children('.cargo_info_text').children('.fishbox_Infotext')

    fishbox_Infotext.html(editContent)
    

    let cookieStr = $.cookie('Cart');
    let cookieArr = JSON.parse(cookieStr);


    let newFishboxToal = 0 

    for(let i = 0 ; i < cookieArr.length ;i++){ 


    if(cookieArr[i].fishbox && cookieArr[i].pid == fid){

        

        cookieArr[i].Product_Price = editPrice

        cookieArr[i].Product_qty =  editQty

        cookieArr[i].Product_cook = editCookArr

        cookieArr[i].Product_message = editMessage 



    }



    if(cookieArr[i].fishbox){


        
        const nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price);


        newFishboxToal+=nowprice

        
    }



    }

//   更新項目金額
    $('.fishbox_item_list').each(function(){


    if($(this).attr('product-id') == fid ){


        $(this).children('.checkout_item_price').children('p').text(editPrice)

    

    }

    

    })



    //計算總金額
    const oldFishbox = parseInt($('.fishbox_item_price_total p:nth-of-type(2)').text())

    const oldtotalPrice = parseInt($('.total_detail p:nth-of-type(2)').text())
    
    const newToalPrice = oldtotalPrice - oldFishbox + newFishboxToal;


    //小計
    $('.total_detail p:nth-of-type(2)').text(newToalPrice)

    const fee = parseInt($('.fee_detail p:nth-of-type(2)').text())
    
    const NewOrderPrice = newToalPrice + fee

    //訂單總金額
    $('.final_total_price p:nth-of-type(2)').text(NewOrderPrice)


    // 海鮮魚箱金額
    $('.fishbox_item_price_total p:nth-of-type(2)').text(newFishboxToal);
    

    $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
    
    $('.checkout_info').fadeOut(100);

    alert('魚箱修改完成')

        

})


// 選單功能畫面
let CheckoutWarp = $('.Checkout_warp')

CheckoutWarp.on("click",".info_cancel , .checkout_info_bg ",function(){

    $('.checkout_info').fadeOut(100);


})

CheckoutWarp.on("click",'.cargo_info_edit',function(){

    $(this).parent().parent().next('.checkout_info').fadeIn(100)

})



    // 填入/修改資料
    CheckoutWarp.on("click",'#checkSeafoodInfo,#checkfishboxInfo,#checkToolInfo',function(){


    let isPass = true;

    // 收件人姓名
    let InfoName =$(this).parent().prev().children('.checkout_info_name').children('input[name="info_name"]').val()

    if(InfoName == ''){
        alert('請填入收件姓名')
        isPass = false
    }

    // 收件人聯絡電話
    let InfoPhone =$(this).parent().prev().children('.checkout_info_name').children('input[name="info_phone"]').val()


    if(InfoPhone == ''){
        alert('請填入聯絡號碼')
        isPass = false
    }

    // 送貨地址
    let Deliver_address = $(this).parent().prev().children('.select_deliver').children('.info_address_warp')


    //送貨城市
    let Deliver_city = Deliver_address.children('select[name="All_city"]').children('option:selected').val()

    if(Deliver_city == ''){
        alert('請填入完整資料')
        isPass = false
    }
    

        //送貨區域
    let Deliver_location = Deliver_address.children('select[name="All_location"]').children('option:selected').val()

    
    if(Deliver_location == ''){
        alert('請填入完整資料')
        isPass = false
    }

    // 送貨詳細地址
    let Deliver_detail = $(this).parent().prev().children().next().children('input[name="info_address"]').val()


    if(Deliver_detail == ''){
        alert('請填入完整資料')
        isPass = false
        
    }
    
        // 收件人資料
        let CheckInfo = $(this).parent().parent().parent().prev().children('.cargo_info_text').children('.address_Infotext')
    

    //輸出成標籤
    function InfoOutput(val){

        if(val == ''){

            val = ``

            return val
        }else{

            val = `<p>${val}</p>`

            return val
        }
    }


    
    if(isPass){

        // 載入修改資料
        let CheckInfoName =  InfoOutput(InfoName);

        let CheckInfoPhone = InfoOutput(InfoPhone);

        
        let CheckAddress = InfoOutput(Deliver_city+Deliver_location+Deliver_detail)


        let CheckInfo_content = CheckInfoName +CheckInfoPhone+CheckAddress 

        CheckInfo.html(CheckInfo_content)


        $('.checkout_info').fadeOut(100);


    }


    // //送貨國家
    // let Deliver_country = Deliver_address.children('select[name="ALL_country"]').children('option:selected').val()

    
    // if(Deliver_country == ''){
    //     alert('請填入完整資料')
    //     isPass = false
    // }else{
    //     isPass = true

    // }

    // // 選擇超商門市
    // let Store_address = $(this).parent().prev().children().next().next().children('.info_address_warp')


    // // 選擇超商門市城市
    // let Store_city = Store_address.children('select[name="All_StoreCity"]').children('option:selected').val()

    // // 選擇超商門市區域
    // let Store_region = Store_address.children('select[name="All_StoreRegion"]').children('option:selected').val()

    // // 選擇超商門市街道
    // let Store_Street = Store_address.children('select[name="All_StoreStreet"]').children('option:selected').val()


    // // 選擇超商門市名稱
    // let Store_name = $(this).parent().prev().children().next().children('input[name="info_store_address"]').val()

    
    
})

    


//生鮮物流方式
let Seafood_deliver = $('#All_Seafood_deliver')

    Seafood_deliver.change(function(){


    let deliver_method =  $(this).children('option:selected')


        // 宅配
        if(deliver_method.val() == '120'){

        // $('#Seafood_fee').show()
        $('#Seafood_fee p:nth-of-type(2)').text(deliver_method.val())

        $('#Seafood_arrive').show()


        // deliver.show()
        // store.hide()
        

    }

    // let deliver= $('#seafood_deliver')//填入收件地址
    // let store =$('#seafood_store')//填入超商地址

    // 物流方式選擇
    // 自取
    // if(deliver_method.val() == '0'){

    //     $('#Seafood_fee').hide()
    //     $('#Seafood_arrive').hide()

    //     deliver.hide()
    //     store.hide()
        

    // }
        
    
    // if(deliver_method.val() == '60'){

    //     // $('#Seafood_fee').show()
    //     $('#Seafood_fee p:nth-of-type(2)').text(deliver_method.val())

    //     $('#Seafood_arrive').hide()

    //     // deliver.hide()
    //     // store.show()
    


    // }
    

})




//海鮮魚箱物流方式
let Fishbox_deliver = $('#All_Fishbox_deliver')


Fishbox_deliver.change(function(){


    let deliver_method =  $(this).children('option:selected')


    //冷凍宅配
    if(deliver_method.val() == '120'){

        // $('#Fishbox_fee').show()
        $('#Fishbox_fee p:nth-of-type(2)').text(deliver_method.val())

        $('#Fishbox_arrive').show()


        // deliver.show()
        // store.hide()
        

    
    }


    // let deliver= $('#fishbox_deliver')//填入收件地址
    // let store =$('#fishbox_store')//填入超商地址

    // 物流方式選擇
    // 自取
    // if(deliver_method.val() == '0'){

    //     $('#Fishbox_fee').hide()
    //     $('#Fishbox_arrive').hide()

        
    //     deliver.hide()
    //     store.hide()
        

    // }
    
    //  //超商宅配
    // if(deliver_method.val() == '60'){

    //     // $('#Fishbox_fee').show()
    //     $('#Fishbox_fee p:nth-of-type(2)').text(deliver_method.val())

    //     $('#Fishbox_arrive').hide()

    //     // deliver.hide()
    //     // store.show()
    


    // }
    

})


// 釣具用品物流方式
let Tool_deliver = $('#All_Tool_deliver')

Tool_deliver.change(function(){


    let deliver_method =  $(this).children('option:selected')

    //冷凍宅配
    if(deliver_method.val() == '120'){

        // $('#Tool_fee').show()
        $('#Tool_fee p:nth-of-type(2)').text(deliver_method.val())

        // deliver.show()
        // store.hide()
        
    } 

    // let deliver= $('#tool_deliver')//填入收件地址
    // let store =$('#tool_store')//填入超商地址

    // 物流方式選擇
    //自取
    // if(deliver_method.val() == '0'){

    //     $('#Tool_fee').hide()
        
    //     deliver.hide()
    //     store.hide()
        

    // } 

    
    //超商宅配
    // if(deliver_method.val() == '60'){

    //     // $('#Tool_fee').show()
    //     $('#Tool_fee p:nth-of-type(2)').text(deliver_method.val())

    

    //     // deliver.hide()
    //     // store.show()
    


    // }
    

})



// 運費優惠顯示
$('.fee_detail .fa-exclamation-circle').on({

    mouseenter: function () {

        $('.fee_detail_info').fadeIn(100)

        
    },
    mouseleave: function () {

        $('.fee_detail_info').fadeOut(100)


        
    }



})

// 使用點數
$('#select_coupon').change(function(){


    let CouponSelected = $('input[name="fishPoint_select"]')

    let Point =$('input[name="fishPoint_input"]').val()


    let isPass = true
    let discount = Math.floor(parseInt(Point)* 0.1)
    
    let number_check = 	/^[0-9]*$/;


    let FinalOrderPrice =  $('.final_total_price p:nth-of-type(2)')
    

    if(CouponSelected.prop("checked")){

        if(Point == ''){

            isPass = false
            alert('請輸入數字')

            CouponSelected.prop("checked",false)


        
        }

    
        if(!number_check.test(Point)){

            isPass = false
            alert('請輸入數字')

            CouponSelected.prop("checked",false)


        }


        if(isPass){


            let PointDiscount = `<div class="payment_detail payment_discount">
                                <p>公主幣折抵</p>
                                <p>${discount}</p>
                            </div>`


            $('.payment_detail_warp').append(PointDiscount)



            FinalOrderPrice.text( parseInt(FinalOrderPrice.text()) - discount)

        }


    }else{

        $('.payment_discount').remove()


        CheckFinalTotal = parseInt($('.total_detail p:nth-of-type(2)').text())

        TotalFee = parseInt($('.fee_detail p:nth-of-type(2)').text())

        let OrderPrice = CheckFinalTotal + TotalFee;

        FinalOrderPrice.text(OrderPrice)

    }

    
})



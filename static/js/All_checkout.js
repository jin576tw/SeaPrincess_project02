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
    let GETPOINT = $('.total_point p:nth-of-type(2)')
    let FINALTOTAL = $('.total_money p:nth-of-type(2)')


    if( $.cookie('Cart') == null){


        //結帳頁空狀態
        $('.Cart_items_empty').css('display','flex')

        // 商品欄位狀態
        $('.fish_items').css('display','none');
        $('.fishbox_items').css('display','none');
        $('.tool_items').css('display','none');

        $('.cart_checkout_btn').attr('disabled', true).css('background-color','var(--grey)')


    }else{


         // 啟動結帳按鈕
         $('.cart_checkout_btn').attr('disabled', false).css('background-color','#5aa700')

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

            // 點數計算
            let getpoint = total_price * 0.1

            //優惠點數
            GETPOINT.text(getpoint)
    

            // 合計金額
            FINALTOTAL.text(total_price)
           
            
    
    
           
        
    
        }
    

    }
   

    // 刪除結帳項目
    $('.Items_warps').on("click",".list_delete",function(){


        // 節點刪除
        let checkProuduct = $(this).parent().parent().parent().parent()
        let checkProuductID = parseInt(checkProuduct.attr('Product-ID'))

        let isfood = checkProuduct.attr('food')

        let isfishbox = checkProuduct.attr('fishbox')
        


        checkProuduct.remove()//視覺刪除
        alert('商品已刪除')


        let cookieStr = $.cookie('Cart');
        let cookieArr = JSON.parse(cookieStr);


        for(let i = 0 ; i < cookieArr.length ;i++){

            function deleteCheck(arr){

                let sum = parseInt($('.navbar_shoplist_count').text())//抓結帳頁現在數量

                let sum_RWD = parseInt($('.shoplist_count_RWD').text())//抓結帳頁RWD現在數量


                let oldtotal_price = parseInt( CHECKTOTAL.text())


                let nowsum = sum - parseInt(arr[i].count) //結帳頁現在數量減去刪除數量
                $('.navbar_shoplist_count').text(nowsum)//刪除後數量

                let nowsumRWD = sum_RWD - parseInt(arr[i].count) //RWD結帳頁現在數量減去刪除數量
                $('.navbar_shoplist_count').text(nowsumRWD)//RWD刪除後數量
                

                let delete_price = parseInt(arr[i].count) *  parseInt(arr[i].Product_Price)

                let newtototal_price = oldtotal_price - delete_price;


                CHECKTOTAL.text(newtototal_price)//刪除後總金額

                // 點數計算
                let getpoint = newtototal_price * 0.1
    
                //優惠點數
                GETPOINT.text(getpoint)
    
                // 合計金額
                FINALTOTAL.text(newtototal_price)
                    

                arr.splice(i,1);//刪除

            

                if( nowsum <= 0 ||  nowsumRWD <= 0){ //刪除後數量小於0，計數器消失
                    $('.navbar_shoplist_count').css('display','none');
                    $('.shoplist_count_RWD').css('display','none');

                    $('.cart_checkout_btn').attr('disabled', true).css('background-color','var(--grey)')

                }else{

                    $('.navbar_shoplist_count').text(nowsum)
                    $('.shoplist_count_RWD').text(nowsumRWD)

                }

            }

            // 判斷為海鮮
            if(isfood == 'true'){

                if( checkProuductID == cookieArr[i].pid && cookieArr[i].food){

                
                    deleteCheck(cookieArr)

                }
            
            
            //判斷為釣具
            }else if(isfood == 'false'){


                if( checkProuductID == cookieArr[i].pid && cookieArr[i].food == false){
                  
                    deleteCheck(cookieArr)
                 

                }

            //判斷為魚箱
            }else if(isfishbox == 'true'){

                if( checkProuductID == cookieArr[i].pid && cookieArr[i].fishbox){
                    
                    deleteCheck(cookieArr)
                }



            }



        }

        //判斷數組為空
        if( cookieArr.length == 0){

            $.removeCookie('Cart');

            $('.Cart_items_empty').css('display','flex')//顯示目前沒有商品提示
            

            // $('.Cart_list_total').css('display','none')
            // $('.checkout_btn').attr('disabled', true).css('background-color','var(--grey)')

        }else{
            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
            
            
            
        }

        checkfilter(cookieArr)


    })


    //計算器
    //加＋＋
    $('.Items_warps').on("click",".countBtn_plus ",function(){


         //當前所在的ID
         let checkProuduct = $(this).parent().parent().parent().parent().parent().parent()
         let checkProuductID = parseInt(checkProuduct.attr('Product-ID'))
 
         let isfood = checkProuduct.attr('food')
 
         let isfishbox = checkProuduct.attr('fishbox')
         

         let cookieStr = $.cookie('Cart');
         let cookieArr = JSON.parse(cookieStr);
       

         for(let i = 0 ; i <  cookieArr.length ;i++){

            // 判斷為海鮮
            if(isfood == 'true'){

                if( checkProuductID == cookieArr[i].pid && cookieArr[i].food){


                    let oldtotal_price = parseInt( CHECKTOTAL.text())//未變化前總金額

                    let old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price)////未變化前商品金額

                    let raw_price = oldtotal_price - old_price // 除了變化的商品金額以外的總金額

                    let Item_over = parseInt(cookieArr[i].count) >= parseInt(cookieArr[i].Product_Left)
                    //判斷商品是否超過庫存

                    if(Item_over){
                        alert('數量超過庫存')
                        $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
                        break;
            
                    }else{
            
                        cookieArr[i].count++;//計算器數量++
            
                        let sum = parseInt($('.navbar_shoplist_count').text()) //抓navbar現在數量
            
                        let sum_RWD = parseInt($('.shoplist_count_RWD').text()) //抓navbar RWD現在數量
            
                    
                        sum++ ; //navbar數量＋＋
            
                        sum_RWD++ //navbarRWD數量＋＋
            
                        $(this).prev().text(cookieArr[i].count)//更新計算器數量
                    
                        $('.navbar_shoplist_count').text(sum)//更新navbar數量
                        $('.shoplist_count_RWD').text(sum_RWD++)//更新navbar數量
            
                        
                    
            
                        let newprice = cookieArr[i].Product_Price
                        * cookieArr[i].count; //新商品金額
            
            
                        let newtototal_price = raw_price + newprice; //新商品總金額
                    
                        $(this).parent().parent().parent().next().children('p').text(newprice);
            
                        CHECKTOTAL.text(newtototal_price);

                        // 點數計算
                        let getpoint = newtototal_price * 0.1

                        //優惠點數
                        GETPOINT.text(getpoint)
                        
                       
                        FINALTOTAL.text(newtototal_price)
                        
                    
            
                        $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
            
            
                    }
            
                    
                    break;
                
                   

                }
            
            
            //判斷為釣具
            }else if(isfood == 'false'){


                if( checkProuductID == cookieArr[i].pid && cookieArr[i].food == false){

                    let oldtotal_price = parseInt( CHECKTOTAL.text())//未變化前總金額

                    let old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price)////未變化前商品金額

                    let raw_price = oldtotal_price - old_price // 除了變化的商品金額以外的總金額

                    let Item_over = parseInt(cookieArr[i].count) >= parseInt(cookieArr[i].Product_Left)
                    //判斷商品是否超過庫存

                    if(Item_over){
                        alert('數量超過庫存')
                        $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
                        break;
            
                    }else{
            
                        cookieArr[i].count++;//計算器數量++
            
                        let sum = parseInt($('.navbar_shoplist_count').text()) //抓navbar現在數量
            
                        let sum_RWD = parseInt($('.shoplist_count_RWD').text()) //抓navbar RWD現在數量
            
                    
                        sum++ ; //navbar數量＋＋
            
                        sum_RWD++ //navbarRWD數量＋＋
            
                        $(this).prev().text(cookieArr[i].count)//更新計算器數量
                    
                        $('.navbar_shoplist_count').text(sum)//更新navbar數量
                        $('.shoplist_count_RWD').text(sum_RWD++)//更新navbar數量
            
                        
                    
            
                        let newprice = cookieArr[i].Product_Price
                        * cookieArr[i].count; //新商品金額
            
            
                        let newtototal_price = raw_price + newprice; //新商品總金額
                    
                        $(this).parent().parent().parent().next().children('p').text(newprice);
            
                        CHECKTOTAL.text(newtototal_price);

                        // 點數計算
                        let getpoint = newtototal_price * 0.1

                        //優惠點數
                        GETPOINT.text(getpoint)
                        
                        FINALTOTAL.text(newtototal_price)
                        
                    
            
                        $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
            
            
                    }
            
                    
                    break;
                  
                   
                 

                }

            //判斷為魚箱
            }else if(isfishbox == 'true'){

                if( checkProuductID == cookieArr[i].pid && cookieArr[i].fishbox){


                    console.log();
                    let oldtotal_price = parseInt( CHECKTOTAL.text())//未變化前總金額

                    let old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price)////未變化前商品金額

                    let raw_price = oldtotal_price - old_price // 除了變化的商品金額以外的總金額

                    let Item_over = parseInt(cookieArr[i].count) >= parseInt(cookieArr[i].Product_Left)
                    //判斷商品是否超過庫存

                    if(Item_over){
                        alert('數量超過庫存')
                        $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
                        break;
            
                    }else{
            
                        cookieArr[i].count++;//計算器數量++
            
                        let sum = parseInt($('.navbar_shoplist_count').text()) //抓navbar現在數量
            
                        let sum_RWD = parseInt($('.shoplist_count_RWD').text()) //抓navbar RWD現在數量
            
                    
                        sum++ ; //navbar數量＋＋
            
                        sum_RWD++ //navbarRWD數量＋＋
            
                        $(this).prev().text(cookieArr[i].count)//更新計算器數量
                    
                        $('.navbar_shoplist_count').text(sum)//更新navbar數量
                        $('.shoplist_count_RWD').text(sum_RWD++)//更新navbar數量
            
                        
                    
            
                        let newprice = cookieArr[i].Product_Price
                        * cookieArr[i].count; //新商品金額
            
            
                        let newtototal_price = raw_price + newprice; //新商品總金額
                    
                        $(this).parent().parent().parent().next().children('p').text(newprice);
            
                        CHECKTOTAL.text(newtototal_price);

                        // 點數計算
                        let getpoint = newtototal_price * 0.1

                        //優惠點數
                        GETPOINT.text(getpoint)

                        FINALTOTAL.text(newtototal_price)
                        
                    
            
                        $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
            
            
                    }
            
                    
                    break;
                    
                   
                }

            }

         }


    })

    //減--
    $('.Items_warps').on("click",".countBtn_minus ",function(){


         //當前所在的ID
         let checkProuduct = $(this).parent().parent().parent().parent().parent().parent()
         let checkProuductID = parseInt(checkProuduct.attr('Product-ID'))
 
         let isfood = checkProuduct.attr('food')
 
         let isfishbox = checkProuduct.attr('fishbox')
        
         
         let cookieStr = $.cookie('Cart');
         let cookieArr = JSON.parse(cookieStr);

         for(let i = 0 ; i < cookieArr.length ;i++){ 

            if(isfood == 'true'){

                if( checkProuductID == cookieArr[i].pid && cookieArr[i].food){

                    let oldtotal_price = parseInt( CHECKTOTAL.text())//未變化前總金額

                    let old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price)////未變化前商品金額
            
                    let raw_price = oldtotal_price - old_price// 除了變化的商品金額以外的總金額
            
                    cookieArr[i].count--;
            
                    let sum = parseInt($('.navbar_shoplist_count').text())
                    sum-- ;
            
                    let sum_RWD = parseInt($('.shoplist_count_RWD').text())
                    sum_RWD-- ;
            
                    $(this).next().text(cookieArr[i].count)//現在商品數量
            
                    $('.navbar_shoplist_count').text(sum)
                    $('.shoplist_count_RWD').text(sum_RWD)
            
            
                    //計算器數量效果變化
                    let still_left = parseInt(cookieArr[i].Product_Left) >  parseInt(cookieArr[i].count)
            
                    if(still_left){
            
                        let countBtn_plus = $(this).next().next()
                        $(countBtn_plus).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
            
                    }
                    else{
            
                        let countBtn_plus = $(this).next().next()
                        $(countBtn_plus).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
            
                    }
            
                    if(cookieArr[i].count <= 0){
                        checkProuduct.remove()
                        alert('已刪除商品')
                        let delete_price = oldtotal_price - cookieArr[i].Product_Price
                        
                        $('.Cart_list_total').children('p').text(delete_price)
            
                        cookieArr.splice(i,1);//刪除指定資料
            
                        // 顯示結帳頁內狀態
                        checkfilter(cookieArr)
            
                        if(sum == 0 || sum_RWD == 0){
            
                            $.removeCookie('Cart');
                            $('.Cart_items_empty').css('display','flex')//顯示目前沒有商品提示
            
                            $('.cart_checkout_btn').attr('disabled', true).css('background-color','var(--grey)')
            
                            $('.shoplist_count_RWD').css('display','none')
                            $('.navbar_shoplist_count').css('display','none')
                           
                            break;
            
                        }else{
                            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
                            checkfilter(cookieArr)
            
                            break;
                        }
                        
                        
                        
                        
            
                    }else{
                        $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
            
                    }
            
            
                    let newprice = cookieArr[i].Product_Price * cookieArr[i].count//新商品金額
            
                    let newtototal_price = raw_price + newprice;//新商品總金額
            
            
                    $(this).parent().parent().parent().next().children('p').text(newprice)
                    
                    CHECKTOTAL.text(newtototal_price);

                    
                    // 點數計算
                    let getpoint = newtototal_price * 0.1

                    //優惠點數
                    GETPOINT.text(getpoint)

                    // 合計金額
                    FINALTOTAL.text(newtototal_price)
                   
                    
                    break;
        
                
                  
        
                }
            
            
            }else if(isfood == 'false'){
        
        
                if( checkProuductID == cookieArr[i].pid && cookieArr[i].food == false){

                    let oldtotal_price = parseInt( CHECKTOTAL.text())//未變化前總金額

                    let old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price)////未變化前商品金額
            
                    let raw_price = oldtotal_price - old_price// 除了變化的商品金額以外的總金額
            
                    cookieArr[i].count--;
            
                    let sum = parseInt($('.navbar_shoplist_count').text())
                    sum-- ;
            
                    let sum_RWD = parseInt($('.shoplist_count_RWD').text())
                    sum_RWD-- ;
            
                    $(this).next().text(cookieArr[i].count)//現在商品數量
            
                    $('.navbar_shoplist_count').text(sum)
                    $('.shoplist_count_RWD').text(sum_RWD)
            
            
                    //計算器數量效果變化
                    let still_left = parseInt(cookieArr[i].Product_Left) >  parseInt(cookieArr[i].count)
            
                    if(still_left){
            
                        let countBtn_plus = $(this).next().next()
                        $(countBtn_plus).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
            
                    }
                    else{
            
                        let countBtn_plus = $(this).next().next()
                        $(countBtn_plus).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
            
                    }
            
                    if(cookieArr[i].count <= 0){
                        checkProuduct.remove()
                        alert('已刪除商品')
                        let delete_price = oldtotal_price - cookieArr[i].Product_Price
                        
                        $('.Cart_list_total').children('p').text(delete_price)
            
                        cookieArr.splice(i,1);//刪除指定資料
            
                        // 顯示結帳頁內狀態
                        checkfilter(cookieArr)
            
                        if(sum == 0 || sum_RWD == 0){
            
                            $.removeCookie('Cart');
                            $('.Cart_items_empty').css('display','flex')//顯示目前沒有商品提示
            
                            $('.cart_checkout_btn').attr('disabled', true).css('background-color','var(--grey)')
                           
            
                            $('.shoplist_count_RWD').css('display','none')
                            $('.navbar_shoplist_count').css('display','none')
                           
                            break;
            
                        }else{
                            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
            
                            break;
                        }
                        
                        
                        
                        
            
                    }else{
                        $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
            
                    }
            
            
                    let newprice = cookieArr[i].Product_Price * cookieArr[i].count//新商品金額
            
                    let newtototal_price = raw_price + newprice;//新商品總金額
            
            
                    $(this).parent().parent().parent().next().children('p').text(newprice)
                    
                    CHECKTOTAL.text(newtototal_price);

                   // 點數計算
                   let getpoint = newtototal_price * 0.1

                   //優惠點數
                   GETPOINT.text(getpoint)

                   // 合計金額
                   FINALTOTAL.text(newtototal_price)
                    
                    break;
        
                    
                    
        
                }
        
        
            }else if(isfishbox == 'true'){
        
                if( checkProuductID == cookieArr[i].pid && cookieArr[i].fishbox){

                    let oldtotal_price = parseInt( CHECKTOTAL.text())//未變化前總金額

                    let old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price)////未變化前商品金額
            
                    let raw_price = oldtotal_price - old_price// 除了變化的商品金額以外的總金額
            
                    cookieArr[i].count--;
            
                    let sum = parseInt($('.navbar_shoplist_count').text())
                    sum-- ;
            
                    let sum_RWD = parseInt($('.shoplist_count_RWD').text())
                    sum_RWD-- ;
            
                    $(this).next().text(cookieArr[i].count)//現在商品數量
            
                    $('.navbar_shoplist_count').text(sum)
                    $('.shoplist_count_RWD').text(sum_RWD)
            
            
                    //計算器數量效果變化
                    let still_left = parseInt(cookieArr[i].Product_Left) >  parseInt(cookieArr[i].count)
            
                    if(still_left){
            
                        let countBtn_plus = $(this).next().next()
                        $(countBtn_plus).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
            
                    }
                    else{
            
                        let countBtn_plus = $(this).next().next()
                        $(countBtn_plus).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
            
                    }
            
                    if(cookieArr[i].count <= 0){
                        checkProuduct.remove()
                        alert('已刪除商品')
                        let delete_price = oldtotal_price - cookieArr[i].Product_Price
                        
                        $('.Cart_list_total').children('p').text(delete_price)
            
                        cookieArr.splice(i,1);//刪除指定資料
            
                        // 顯示結帳頁內狀態
                        checkfilter(cookieArr)
            
                        if(sum == 0 || sum_RWD == 0){
            
                            $.removeCookie('Cart');
                            $('.Cart_items_empty').css('display','flex')//顯示目前沒有商品提示
            
                            $('.cart_checkout_btn').attr('disabled', true).css('background-color','var(--grey)')
            
                            $('.shoplist_count_RWD').css('display','none')
                            $('.navbar_shoplist_count').css('display','none')
                           
                            break;
            
                        }else{
                            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
            
                            break;
                        }
                        
                        
                        
                        
            
                    }else{
                        $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
            
                    }
            
            
                    let newprice = cookieArr[i].Product_Price * cookieArr[i].count//新商品金額
            
                    let newtototal_price = raw_price + newprice;//新商品總金額
            
            
                    $(this).parent().parent().parent().next().children('p').text(newprice)
                    
                    CHECKTOTAL.text(newtototal_price);
                    
                    // 點數計算
                    let getpoint = newtototal_price * 0.1

                    //優惠點數
                    GETPOINT.text(getpoint)

                    // 合計金額
                    FINALTOTAL.text(newtototal_price)
                                

                    break;
                    
                    
        
                }
        
        
        
            }
        

            


        }






    })
    
    
    //計算器效果
    $('.Items_warps').on("mousedown mouseup",".countBtn_plus , .countBtn_minus",function(){

        $(this).toggleClass('countBtn_color').css('transition','0.3s')
    
    })



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
$(document).ready(function () {

 /* ///////導覽列////////// */
       
      
        //////navbar購物車功能////
        if($.cookie("Cart") == null){

            //cookie若無資料，顯是購物車為空
            $('.navbar_shoplist_count').css('display','none')
            $('.Cart_list_total').css('display','none')
            $('.list_item_empty').css('display','flex')
           


        
        }else{

            $('.list_item_empty').css('display','none');
            $('.Cart_list_total').css('display','block');
            
            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
            let sum = 0;


            for(let i = 0 ; i < cookieArr.length;i++){
                sum += cookieArr[i].count;
            }

            $('.navbar_shoplist_count').text(sum)//購物車數量



            // 載入cookie中的商品
            if(cookieStr){

                for(let i = 0 ; i < cookieArr.length ; i++){

                        let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price);

                        let Cart_list_item = `
                        <div class="Cart_list_item " Item-ID= "${cookieArr[i].pid}">
                            <div class="list_item_pic">
                                <img src="${cookieArr[i].Item_pic}" alt="">
                            </div>
                
                            <div class="list_item_intro">
                                <div class="list_item_title">
                                    <h1>${cookieArr[i].Item_title}</h1>
                                </div>
                
                
                                <div class="list_intro_count d-flex">
                    
                                    <div class="list_countBtn_warp d-flex">
                                        <div class="countBtn countBtn_add">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                        <div class="list_count">${cookieArr[i].count}</div>
                                        <div class="countBtn countBtn_minus">
                                            <i class="fas fa-minus"></i>
                                        </div>
                                    </div>

                                    <div class="list_intro_price">
                                        <p>${nowprice}</p>
                                    </div>

                                    <div class="item_delete">
                                        <i class="far fa-trash-alt "></i>
                                    </div>
                                </div>
                                
                            </div>
                        </div> `;
    
    
                        
                        $('.list_item_warps').append(Cart_list_item);
            
                }

            }

        
        }


        //加入購物車
        $(".add_btn").on({


            click: function(){

                $('.list_item_warps').empty();//清空新加入商品

            
                let cookieStr = $.cookie('Cart');
                let cookieArr = JSON.parse(cookieStr);

               
                
                for(let i = 0 ; i < cookieArr.length ; i++){

                    let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price);

                    let Cart_list_item = `
                        <div class="Cart_list_item " Item-ID= "${cookieArr[i].pid}">
                            <div class="list_item_pic">
                                <img src="${cookieArr[i].Item_pic}" alt="">
                            </div>
                
                            <div class="list_item_intro">
                                <div class="list_item_title">
                                    <h1>${cookieArr[i].Item_title}</h1>
                                </div>
                
                
                                <div class="list_intro_count d-flex">
                    
                                    <div class="list_countBtn_warp d-flex">
                                        <div class="countBtn countBtn_add">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                        <div class="list_count">${cookieArr[i].count}</div>
                                        <div class="countBtn countBtn_minus">
                                            <i class="fas fa-minus"></i>
                                        </div>
                                    </div>

                                    <div class="list_intro_price">
                                        <p>${nowprice}</p>
                                    </div>

                                    <div class="item_delete">
                                        <i class="far fa-trash-alt "></i>
                                    </div>
                                </div>

                            </div>
                        </div> `;

                        $('.list_item_warps').append(Cart_list_item);
    
                     }
            
            }

            

        });



        //刪除項目
        ///append架構無法使用功能，須根據append父層下指令
        $(".list_item_warps").on("click",".item_delete",function(){

            // 節點刪除
            let $navItem = $(this).parent().parent().parent()
            let navItemID = $navItem.attr('Item-ID')

            $navItem.remove()//視覺刪除
            alert('商品已刪除')


            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);

            for(let i = 0 ; i <  cookieArr.length ;i++){

                if(parseInt(cookieArr[i].pid) == parseInt(navItemID)){

                    let $sum = parseInt($('.navbar_shoplist_count').text())//抓購物車現在數量
                   
                   
                    $nowsum = $sum - cookieArr[i].count; //購物車現在數量減去刪除數量
                    $('.navbar_shoplist_count').text($nowsum)//刪除後數量

                    cookieArr.splice(i,1);//刪除

                    if( $nowsum <= 0){ //刪除後數量小於0，計數器消失
                        $('.navbar_shoplist_count').css('display','none');

                    }

                    break;
                }

            }

    
           
            //判斷數組為空
            if( cookieArr.length == 0){

                $.removeCookie('Cart');

                let empty = `<p class="list_item_empty">目前購物車為空</p>`
                $(".list_item_warps").append(empty)//顯示目前沒有商品提示
                
                $('.Cart_list_total').css('display','none')

            }else{
                $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
                
                
            }
            
         });

         //計算器
         //加
         $(".list_item_warps").on("click",".countBtn_add ",function(){

            //當前所在的ID
            $navItem = $(this).parent().parent().parent().parent();
            let navItemID = $navItem.attr('Item-ID')

   
            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
            

            for(let i = 0 ; i <  cookieArr.length ;i++){

                if(parseInt(cookieArr[i].pid) == parseInt(navItemID)){
                    cookieArr[i].count++;

                    let sum = parseInt($('.navbar_shoplist_count').text())
                    sum++ ;

                    $(this).next().text(cookieArr[i].count)
                    $('.navbar_shoplist_count').text(sum)

    
                    $newprice = cookieArr[i].Item_price
                    * cookieArr[i].count

                
                    $(this).parent().next().children('p').text($newprice)

                    $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
    
                    break;

        
                }

               

            }

         })



        //減
         $(".list_item_warps").on("click",".countBtn_minus ",function(){

            //當前所在的ID
            $navItem = $(this).parent().parent().parent().parent()
            let navItemID = $navItem.attr('Item-ID')

     

            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
            

            for(let i = 0 ; i <  cookieArr.length ;i++){

                if(parseInt(cookieArr[i].pid) == parseInt(navItemID)){
                    cookieArr[i].count--;

                    let sum = parseInt($('.navbar_shoplist_count').text())
                    sum-- ;

                    $(this).prev().text(cookieArr[i].count)
                    $('.navbar_shoplist_count').text(sum)

                    

                    if(cookieArr[i].count <= 0){
                        $navItem.remove()
                        alert('已刪除商品')
                        cookieArr.splice(i,1);//刪除

                        if(sum == 0){

                            $.removeCookie('Cart');
                            let empty = `<p class="list_item_empty">目前購物車為空</p>`
                            $(".list_item_warps").append(empty)//顯示目前沒有商品提示
                            $('.navbar_shoplist_count').css('display','none')
                            $('.Cart_list_total').css('display','none')

                        }else{
                            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
                        }
                        
                        
                       
                        

                    }else{
                        $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})

                    }


                    $newprice = cookieArr[i].Item_price
                    * cookieArr[i].count

                    $(this).parent().next().children('p').text($newprice)
                    
                    break;
        
                }

            }

         })





         //計算器效果
         $(".list_item_warps").on("mousedown mouseup",".countBtn_add , .countBtn_minus",function(){

            $(this).toggleClass('countBtn_color').css('transition','0.3s')
    
         })

         














       
        
   
         /////購物車按鈕效果/////
    
        //手機版
        if ($(window).width() < 480) {
            
    
            $('.navbar_icon_shoplist').click(function(){
                
                $('.Cart_list_bar').toggleClass('RWD_open_shoplist').css('opacity','0.9');

                
    
            })
        }
        
        // 網頁版
        if ($(window).width() >= 480) {
    
            $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
    
    
            $('.navbar_icon_shoplist').click(function(){
    
                $('.Cart_list').fadeIn(100);
                $('.Cart_list_bar').css('transform','translateX(0px)').css('transition','0.5s')
                

            })
    
            $('.cancle_btn').click(function(){
                
    
                $('.Cart_list').fadeOut(100);
                $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
                
    
            })
            $('.Cart_bg').click(function(){
               
    
                $('.Cart_list').fadeOut(100);
                $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
              
                
    
            })
    
   
    
        }
         
        

        
      
       
        // navbar視覺
        //手機版
        $('.navbar_RWD_icon').click(function(){
            
            $('.navbar_RWD_items').toggleClass('RWD_open');
            
    
        });
    
    
        $(window).scroll(function () {
    
        let scrollNow = $(window).scrollTop();
        // console.log('scrollTop', scrollNow);
    
    
        if ($(window).width() <  992){
    
            if (scrollNow >= 400){
    
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.3s')
            }else{
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.1s')
    
                
    
            }
    
        }
    
        // 網頁版 
        if ($(window).width() >= 992) {
    
       
            if (scrollNow >= 706){
    
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.3s')
            }else{
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.1s')
    
                
    
            }
       
            if (scrollNow >= 1000){
    
                $('.navbar_Logo').css('width','80px').css('transition','0.3s')
            }else{
                $('.navbar_Logo').css('width','140px').css('transition','0.1s')
    
                
    
            }
        }
    
        })
    
       
    
        
})
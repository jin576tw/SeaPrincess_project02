$(document).ready(function () {

///////////////////加入購物車/////////////

$(".add_btn").on({

    click: function(){

        // 顯示navbar數量 
        $('.navbar_shoplist_count').css('display','flex').addClass('Bounce');

        
        // 商品名稱
        let itemTitle = $(this).next().next().children().children().text()

        //商品圖片
        let itemPic = $(this).next().children().children().attr('src')


        //商品價格
        let itemPrice = $(this).parent().next().children('p:nth-of-type(1)').text()

        // 商品ID
        let itemID = $(this).parent().parent().attr('Item-ID')



        let arr =[{Item_title:itemTitle,Item_pic:itemPic,Item_price:itemPrice,pid:itemID,count:1}]
        //商品名稱、商品圖片、商品價格、商品ID、商品數量

        let test


        // let Cart_list_item = `
        //             <div class="Cart_list_item " Item-ID= "${cookieArr[i].pid}">
        //                 <div class="list_item_pic">
        //                     <img src="${cookieArr[i].Item_pic}" alt="">
        //                 </div>
            
        //                 <div class="list_item_intro">
        //                     <div class="list_item_title">
        //                         <h1>${cookieArr[i].Item_title}</h1>
        //                 </div>
            
            
        //                 <div class="list_intro_count d-flex">
            
        //                     <div class="list_countBtn_warp d-flex">
        //                         <div class="countBtn countBtn_add">
        //                             <i class="fas fa-plus"></i>
        //                         </div>
        //                         <div class="list_count">${cookieArr[i].count}</div>
        //                         <div class="countBtn countBtn_minus">
        //                             <i class="fas fa-minus"></i>
        //                         </div>
        //                     </div>
        //                     <div class="list_intro_price">
        //                         <p>${cookieArr[i].Item_price}</p>
        //                     </div>
        //                         <i class="far fa-trash-alt"></i>
        //                     </div>
        //                 </div>
        //             </div> `


        if($.cookie('Cart') == null ){

            // 第一次加入
            $.cookie('Cart',JSON.stringify(arr),{expire : 1})

        }else{

            // 若不是第一次加入
            let cookieStr = $.cookie('Cart')
            let cookieArr = JSON.parse(cookieStr);//先轉成物件

            let same = false //假設沒有添加過商品 

            // 通過迴圈判斷是否符合重復,若有，增加數量
            for(let i =0 ; i < cookieArr.length; i++){
                if(itemID == cookieArr[i].pid){
                    same = true;
                    cookieArr[i].count++;
                    break;
                }

            }

            if(!same){
                cookieArr.push({Item_title:itemTitle,Item_pic:itemPic,Item_price:itemPrice,pid:itemID,count:1})
            }

            // 將數據存回cookie 
            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})


        }   



        //navbar購物車數量
        if($.cookie("Cart") == null){

            $('.navbar_shoplist_count').css('display','none');
            $('.Cart_list_total').css('display','none');
            $('.list_item_empty').css('display','flex');
            
        
        }else{

            $('.list_item_empty').css('display','none')
            $('.Cart_list_total').css('display','block');
            
            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
            let sum = 0;


            for(let i = 0 ; i < cookieArr.length;i++){
                sum += cookieArr[i].count;
                $('.list_count').text(cookieArr[i].count)
            }

            $('.navbar_shoplist_count').text(sum)
           
                

        
        }




        let cookieStr = $.cookie('Cart');
        let cookieArr = JSON.parse(cookieStr);
        console.log(cookieArr);
        
    
        for(let i = 0 ; i < cookieArr.length;i++){

            let same = false //假設沒有添加過商品 

            // 通過迴圈判斷是否符合重復,若有，增加數量
           
                if(itemID == cookieArr[i].pid){
                    same = true;
                    cookieArr[i].count++;
                    break;

                }else{
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
                                <p>${cookieArr[i].Item_price}</p>
                            </div>
                                <i class="far fa-trash-alt"></i>
                            </div>
                        </div>
                    </div> `
        
                   
        
                    $('.list_item_warps').append(Cart_list_item);

                }

            

            



           

        }
       


    
        //cookie字串轉回物件
        let ItemsArr = JSON.parse($.cookie('Cart'))
        console.log(ItemsArr);
        // console.log(cookieArr.length);
    
 

    },

    // 加入購物車效果
    mouseenter: function () {
        $(this).addClass('Bounce')
    },
    mouseleave: function () {
        $(this).removeClass('Bounce')
    }

})







































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

                

            },
            mouseleave: function () {

               
                $(this).children().children('.item_title').css('border','solid 0.1px rgba(173, 173, 173, 0.5)')

                

            

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
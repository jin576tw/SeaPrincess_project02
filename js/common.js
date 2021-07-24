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
            //商品名稱、商品圖片、商品價格、商品ID、商品數量初始值

        

            //寫入cookie
            if($.cookie('Cart') == null ){

                // 第一次加入
                $.cookie('Cart',JSON.stringify(arr),{expire : 1})

            }else{

                // 抓cookie購物車資料
                let cookieStr = $.cookie('Cart')


                // 若不是第一次加入
                let cookieArr = JSON.parse(cookieStr);//先轉成物件

                let same = false //假設沒有添加過商品 


                
                // 通過迴圈判斷是否符合重復
                // 若有，增加數量
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


                $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})


            }   

    

            //navbar購物車
            if($.cookie("Cart") == null){

                //cookie若無資料，顯是購物車為空
                $('.navbar_shoplist_count').css('display','none')
                $('.Cart_list_total').css('display','none')
                $('.list_item_empty').css('display','flex')



            }else{

                $('.list_item_empty').css('display','none');
                $('.Cart_list_total').css('display','block');
                
                // 抓cookie購物車資料
                let cookieStr = $.cookie('Cart');
                let cookieArr = JSON.parse(cookieStr);
                let sum = 0;


                for(let i = 0 ; i < cookieArr.length;i++){
                    sum += cookieArr[i].count;
                }

                $('.navbar_shoplist_count').text(sum)


            }


       
        

        },

        // 加入購物車效果
        mouseenter: function () {
            $(this).addClass('Bounce')
        },
        mouseleave: function () {
            $(this).removeClass('Bounce')
        }

    })


    // $('.item_delete').on({

    //     click:function(){
            
    //         // 節點刪除

    //         let $navItem = $(this).parent().parent().parent()
    //         let navItemID = $navItem.attr('Item-ID')

    //         $navItem.remove()


    //         console.log(navItemID)


    //     }


    // })



    ////////商品列效果////////
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
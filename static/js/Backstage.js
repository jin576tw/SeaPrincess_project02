'use strict'


if($(window).width() < 768){


    $('#RWD_btn').click(function(){


        $('.Backstage_bar').toggleClass('RWD_Backstage_barOpnen')
       
       
       
       
       })
}


/////////////////////////// 後台訂單載入///////////////////////
$.get("./static/JSON/Order.json", function (data) {

    let d = data

    for(let i = 0 ; i < d.length ;i++){ 

        const OD_seafood = d[i].OD_Seafood

        const OD_fishbox = d[i].OD_Fishbox

        const OD_Item = d[i].OD_Item


        // 付款方式
        let payMenetWay =``

        if(d[i].creadit_paid == true){

            payMenetWay = `信用卡付款`
       
        }else{

            payMenetWay = `貨到付款`

        }
        

        // 出貨狀態
        function OD_status(s){


            if(s == '取消'){


                return`<h4 class="finishNotice">${s}</h4>`


            }else if(s == '待出貨'){



                return`<h4 class="orderNotice">${s}</h4>`


            }else if(s == null){


                return`<h4 class="finishNotice">/</h4>`


            }else{
                
                return`<h4>${s}</h4>`
            
            
            }
            



        }


        // 付款狀態
        function OD_payStatus(s){

            if(s == '未付款' || s == '貨到付款'){

                return`<h4 class="paymentNotice">${s}</h4>`

            }else if(s == '取消'){

                return`<h4 class="finishNotice">${s}</h4>`

            }else if(s == null){


                return`<h4 class="finishNotice">/</h4>`

            }else{

                return`<h4>${s}</h4>`

            }



        }


        // 送貨壯態
        function OD_cargoStatus(s){


            if(s == '運送中'){

                return`<h4 class="cargoNotice">${s}</h4>`

            }else if(s == null){


                return`<h4 class="finishNotice">/</h4>`



            }else if(s == '取消' || s== '已完成'){

                return`<h4 class="finishNotice">${s}</h4>`

            }else{

                return`<h4>${s}</h4>`

            }


        }


        // 優先出貨
        function ShipFirst(s){

            if(s){

                return `<div class="first_ship ShipFirst">
                            <i class="fas fa-clipboard"></i>
                        </div>`

            }else{

                return `<div class="first_ship">
                            <i class="fas fa-clipboard"></i>
                        </div>`


            }

        }
       
    
        let OrederList =`<div class="Manage_list" OD_id="${d[i].OD_id}">

            <div class="list_top" id="list_info">
                <div class="ListInfo" id="list_infoNum">
                <h4>${d[i].OD_name}</h4>
                <h5>${d[i].OD_time}</h5>
                </div>
                <div class="ListInfo" id="list_infoName">
                    <h4>${d[i].OD_customerInfo[0].name}</h4>
                    <h4>${d[i].OD_customerInfo[0].phone}</h4>
                </div>
                <div class="ListInfo" id="list_infoPrice">
                    <h4>${payMenetWay}</h4>
                    <h4>${number_format(d[i].OD_totalPrice)}</h4>
                </div>

            </div>
            <div class="list_top" id="list_seafood">
                <div class="ListItem" id="list_status">`
                +OD_status(OD_seafood.status)+
                `</div>
                <div class="ListItem" id="list_payStatus">`
                +OD_payStatus(OD_seafood.payStatus)+
                `</div>
                <div class="ListItem" id="list_cargoStatus">`
                + OD_cargoStatus(OD_seafood.cargoStatus)+
                `</div>
            </div>
            <div class="list_top" id="list_fishbox">
                <div class="ListItem" id="list_status">`
                +OD_status(OD_fishbox.status)+
                `</div>
                <div class="ListItem" id="list_payStatus">`
                +OD_payStatus(OD_fishbox.payStatus)+
                `</div>
                <div class="ListItem" id="list_cargoStatus">`
                +OD_cargoStatus(OD_fishbox.cargoStatus)+
                `</div>
            </div>
            <div class="list_top" id="list_item">
                <div class="ListItem" id="list_status">`
                +OD_status(OD_Item.status)+
                `</div>
                <div class="ListItem" id="list_payStatus">`
                +OD_payStatus(OD_Item.payStatus)+
                `</div>
                <div class="ListItem" id="list_cargoStatus">`
                +OD_cargoStatus(OD_Item.cargoStatus)+
                `</div>
            </div>
            <div class="list_top" id="list_note">`+


                ShipFirst(d[i].deliver_first)
            
                +`<button class="order_detail">詳情</button>


            </div>

            
        </div>`


        $('#Order_list_warp').append(OrederList)
   

    }
    

   



})

/////////////////////////// 客戶資料載入///////////////////////////
$.get("./static/JSON/Member.json", function (data) {


    let d = data

    for(let i = 0 ; i <d.length  ;i++){


        function levelCheck(level){

            if(level == ''){


                return '非會員'
            }else{


                return level
            }


        }


        let ClientList = 
        `<div class="Client_list" pid="${d[i].pid}">

            <div class="C_Item" id="clientName">
                <h4>${d[i].name}</h4>
                
            </div>

            <div class="C_Item" id="clientEmail">

                <h4>${d[i].member_email}</h4>

            </div>
        

            <div class="C_Item" id="clientLevel">

                <h4>${levelCheck(d[i].member_level)}</h4>
            </div>

            <div class="C_Item" id="clientODcount">

                <h4>0</h4>
        

            </div>

            <div class="C_Item" id="clientPcount">


                <h4>0</h4>
                

            </div>
            <div class="C_Item" id="clientCoin">

                
                <h4>0</h4>


            </div>

        
        

            <div class="C_Item" id="clientPoint">

                <h4>0</h4>

            </div>


            <div class="C_Item" id="#clientMore">

                <button class="client_detail">詳情</button>


            </div>

            


        </div>`


        $('#Client_list_warp').append(ClientList)

       
    
    }


})

 //客戶累積金額
 // 抓取訂單相同會員id的訂單資料
 $.get("./static/JSON/Order.json", function (order) {

     $('.Client_list').each(function(){


    
         let pid = parseInt($(this).attr('pid'))


         let AC_Pirce = 0 

         let OrderArr = []

         for(let j = 0 ; j < order.length ;j++){

            if(pid == order[j].pid){

                
                OrderArr.push(order[j])
               
                AC_Pirce+=order[j].OD_totalPrice

                $(this).children('#clientPcount').children('h4').text(number_format(AC_Pirce))

                // 抓取訂單數量
                $(this).children('#clientODcount').children('h4').text(OrderArr.length)



            }
         
        }

        
     })



 })


  //客戶累積公主幣
 // 抓取訂單相同會員id的訂單資料
 $.get("./static/JSON/Coin.json", function (coin) {


     $('.Client_list').each(function(){


        let pid = parseInt($(this).attr('pid'))

         let AC_Coin = 0 

         for(let j = 0 ; j < coin.length ;j++){


             if(pid == coin[j].pid){


                 AC_Coin += coin[j].coin_num

                 
                 $(this).children('#clientCoin').children('h4').text(AC_Coin)
             
                 
             }

          }


        

     })




 })


  //客戶累積點數
  // 抓取訂單相同會員id的訂單資料
 $.get("./static/JSON/Point.json", function (Point) {


     $('.Client_list').each(function(){


        let pid = parseInt($(this).attr('pid'))

         let AC_Point = 0 
         for(let j = 0 ; j < Point.length ;j++){


             if(pid == Point[j].pid){


                 AC_Point += Point[j].point_num

                 
                 $(this).children('#clientPoint').children('h4').text(AC_Point)
             
                 
             }

          }


        

     })




 })



//////////////////////////後台項目選擇/////////////////////////
//訂單管理
$('.Backstage_bar_list li:nth-of-type(1)').click(function(){


    $('.Order_Manage').fadeIn(100).siblings('.B_content').fadeOut(1)

    $(this).addClass('list_up').siblings('li').removeClass('list_up')


})


// 訂單詳情
$('#Order_list_warp').on('click','.order_detail',function(){



    $('.Each_orderDetail').fadeIn(100).siblings('.B_content').fadeOut(1)
    $('.Order_Manage').hide()


    const OD_id = parseInt($(this).parent().parent().attr('od_id'))

    $.get("./static/JSON/Order.json", function (data) {

        let d = data

        // function Orderfiler(){

        // }

        for(let i = 0 ; i < d.length ;i++){ 

            if(OD_id == d[i].OD_id){

                // 訂單資訊
                // 商品小計
                $('.od_price').children('h4:nth-of-type(2)').text( number_format(d[i].OD_price))

                // 公主幣折抵
                $('.od_point').children('h4:nth-of-type(2)').text( number_format(d[i].OD_discount))

                //運費折抵
                $('.od_fee').children('h4:nth-of-type(2)').text( number_format(d[i].OD_fee))

                // 總金額
                $('.od_total').children('h4:nth-of-type(2)').text( number_format(d[i].OD_totalPrice))


                const SeafoodEmpty = JSON.stringify(d[i].OD_Seafood)=== '{}';
                const ItemEmpty = JSON.stringify(d[i].OD_Item)=== '{}';
                const FishboxEmpty = JSON.stringify(d[i].OD_Fishbox)=== '{}';
                
                // 判斷欄位出現
                if(SeafoodEmpty){


                    $('#Seafood_ODbox').hide()
                    $('#Seafood_infoUser').hide()
                    $('#SendSeafood').hide()
                    $('#Seafood_EachDetail').hide()



                }else{

                    $('#Seafood_ODbox').show()
                    $('#Seafood_infoUser').show()
                    $('#SendSeafood').show()
                    $('#Seafood_EachDetail').show()



                }
                if(ItemEmpty){


                    $('#Item_ODbox').hide()
                    $('#Item_infoUser').hide()
                    $('#SendItem').hide()
                    $('#Item_EachDetail').hide()


                }else{

                    $('#Item_ODbox').show()
                    $('#Item_infoUser').show()
                    $('#SendItem').show()
                    $('#Item_EachDetail').show()



                }
                if(FishboxEmpty){


                    $('#Fishbox_ODbox').hide()
                    $('#Fishbox_infoUser').hide()
                    $('#Sendfishbox').hide()
                    $('#Fishbox_EachDetail').hide()


                }else{

                    $('#Fishbox_ODbox').show()
                    $('#Fishbox_infoUser').show()
                    $('#Sendfishbox').show()
                    $('#Fishbox_EachDetail').show()



                }



                // 收件資訊
                const CustomerInfo = d[i].OD_customerInfo
                   
                for(let j = 0 ; j < CustomerInfo.length ;j++){ 


                    if(CustomerInfo[j].food){

                        

                        $('#Seafood_infoUser').children('.infoUser_detail').children('h4:nth-of-type(1)').text(CustomerInfo[j].name)

                        $('#Seafood_infoUser').children('.infoUser_detail').children('h4:nth-of-type(2)').text(CustomerInfo[j].phone)

                        $('#Seafood_infoUser').children('.infoUser_detail').children('h4:nth-of-type(3)').text(CustomerInfo[j].address)
                        

                    }else if(CustomerInfo[j].food == false){


                    
                        $('#Item_infoUser').children('.infoUser_detail').children('h4:nth-of-type(1)').text(CustomerInfo[j].name)

                        $('#Item_infoUser').children('.infoUser_detail').children('h4:nth-of-type(2)').text(CustomerInfo[j].phone)

                        $('#Item_infoUser').children('.infoUser_detail').children('h4:nth-of-type(3)').text(CustomerInfo[j].address)
                        

                        

                    }else if(CustomerInfo[j].fishbox == true){



                        $('#Fishbox_infoUser').children('.infoUser_detail').children('h4:nth-of-type(1)').text(CustomerInfo[j].name)

                        $('#Fishbox_infoUser').children('.infoUser_detail').children('h4:nth-of-type(2)').text(CustomerInfo[j].phone)

                        $('#Fishbox_infoUser').children('.infoUser_detail').children('h4:nth-of-type(3)').text(CustomerInfo[j].address)
                        

                        

                    }



                    



                }


                    

                function paymentInfo(payment){

                    if(payment){

                        return '信用卡安全加密付款'
                    }else{

                        return '貨到付款'

                    }



                }
                
               
                // 付款資訊
                $('.OD_info_payment').children('h4').text(paymentInfo(d[i].creadit_paid))
              

                
                const OD_seafood = d[i].OD_Seafood

                const OD_fishbox = d[i].OD_Fishbox
        
                const OD_Item = d[i].OD_Item
                
            
                // 配送資訊
                $('#SendSeafood').children('h4:nth-of-type(3)').text(OD_seafood.shipment_time)
                $('#SendSeafood').children('.cargoID').children('h4').text(OD_seafood.shipment_number)

                $('#Sendfishbox').children('h4:nth-of-type(3)').text(OD_fishbox.shipment_time)
                $('#Sendfishbox').children('.cargoID').children('h4').text(OD_fishbox.shipment_number)

                $('#SendItem').children('h4:nth-of-type(3)').text(OD_Item.shipment_time)
                $('#SendItem').children('.cargoID').children('h4').text(OD_Item.shipment_number)



                
                

                // 訂單明細內容
                const Seafood_EachDetail = $('#Seafood_EachDetail').children('.cargo_detail_warp')

                const Item_EachDetail = $('#Item_EachDetail').children('.cargo_detail_warp')

                const Fishbox_EachDetail = $('#Fishbox_EachDetail').children('.cargo_detail_warp')

                // 初始化
                Seafood_EachDetail.empty()
                Item_EachDetail.empty()
                Fishbox_EachDetail.empty()



                function MessageCheck(message){

                    if(message == ""){

                        return ``

                    }else{

                        return `備註：${message}`

                    }

                }
               

                // 收件備註
                $('#Seafood_EachDetail').children('.detail_title').children('h5').text(MessageCheck( OD_seafood.message))

                $('#Item_EachDetail').children('.detail_title').children('h5').text(MessageCheck( OD_Item.message))

                $('#Fishbox_EachDetail').children('.detail_title').children('h5').text(MessageCheck( OD_fishbox.message))
                 

                // 生鮮魚貨明細載入
                if(!SeafoodEmpty){

                    $.get("./static/JSON/Seafood.json", function (product) {

                        let p = product 
                    
                        for(let i = 0 ; i < OD_seafood.items.length  ;i++){ 
                            for(let j = 0 ; j < p.length  ;j++){ 


                                if(OD_seafood.items[i].tid == p[j].pid){

                                    const nowprice = OD_seafood.items[i].count * p[j].price

                                    // console.log(nowprice);
                                    
                                    let detail_list = `
                                    <div class="cargo_detail_list" tid="${OD_seafood.items[i].tid}">
                                        <div class="cargo_detail_head">
                                            <div class="cargo_detail_pic">
                                                <img src="${p[j].pic[0]}" alt="">
                                            </div>
                                            <div class="cargo_detail_name">
                                                <h3>${p[j].name}</h3>
                                
                                            </div>

                                        </div>
                                        <div class="cargo_detail_bottom">
                                            <div class="cargo_detail_count">
                                                <h3>${OD_seafood.items[i].count}</h3>
                                            </div>
                                            <div class="cargo_detail_price">
                                                <h3>${nowprice}</h3>
                                            </div>

                                        </div>
                                    </div>`



                                    Seafood_EachDetail.append(detail_list);


                                }



                            }
                        }
                        

                        
                    })

                }
                

                // 釣具用品明細載入
                if(!ItemEmpty){
                    $.get("./static/JSON/Item.json", function (product) {

                        let p =  product
    
                        for(let i = 0 ; i < OD_Item.items.length  ;i++){ 
                            for(let j = 0 ; j < p.length  ;j++){ 
    
    
                                if( OD_Item.items[i].tid == p[j].pid){
    
                                    const nowprice =  OD_Item.items[i].count * p[j].price
    
                                    // console.log(nowprice);
                                    
                                    let detail_list = `
                                    <div class="cargo_detail_list" tid="${OD_Item.items[i].tid}">
                                        <div class="cargo_detail_head">
                                            <div class="cargo_detail_pic">
                                                <img src="${p[j].pic[0]}" alt="">
                                            </div>
                                            <div class="cargo_detail_name">
                                                <h3>${p[j].name}</h3>
                                                <h4>${OD_Item.items[i].type}</h4>
                                            </div>
    
                                        </div>
                                        <div class="cargo_detail_bottom">
                                            <div class="cargo_detail_count">
                                                <h3>${ OD_Item.items[i].count}</h3>
                                            </div>
                                            <div class="cargo_detail_price">
                                                <h3>${nowprice}</h3>
                                            </div>
    
                                        </div>
                                    </div>`
    
    
    
                                    Item_EachDetail.append(detail_list);
    
    
                                }
    
    
    
                             }
                        }
    
    
    
                    })


                }
                
                
                // 海鮮魚箱明細載入
                if(!FishboxEmpty){

                    for(let i = 0 ; i < OD_fishbox.items.length  ;i++){ 

                        // 料理習慣
                        const cooktype = OD_fishbox.items[i].cook.join('、')
    
              
                        // 魚箱資訊
                        const box_detail =`${OD_fishbox.items[i].price}元 / ${OD_fishbox.items[i].qty} / ${cooktype} / ${OD_fishbox.items[i].boxMessage}`
    
    
    
                        const nowprice =  OD_fishbox.items[i].count * OD_fishbox.items[i].price
    
                        // console.log(nowprice);
                        
                        let detail_list = `
                        <div class="cargo_detail_list" tid="${OD_fishbox.items[i].tid}">
                            <div class="cargo_detail_head">
                                <div class="cargo_detail_pic">
                                    <img src="${OD_fishbox.items[i].pic}" alt="">
                                </div>
                                <div class="cargo_detail_name">
                                    <h3>${OD_fishbox.items[i].name}</h3>
                                    <h4>${box_detail}</h4>
                                </div>
    
                            </div>
                            <div class="cargo_detail_bottom">
                                <div class="cargo_detail_count">
                                    <h3>${ OD_fishbox.items[i].count}</h3>
                                </div>
                                <div class="cargo_detail_price">
                                    <h3>${nowprice}</h3>
                                </div>
    
                            </div>
                        </div>`
    
    
    
                        Fishbox_EachDetail.append(detail_list);
    
    
    
    
    
    
                    }
    

                }
               
                
                  




               
            
            }



        }



    })





    


})


// 訂單修改收件人
$('.editInfo_btn').click(function(){

    $(this).parent().next('.checkout_info').fadeIn(100)


})





// 客戶管理
$('.Backstage_bar_list li:nth-of-type(2)').click(function(){


    $('.Client_Manage').fadeIn(100).siblings('.B_content').fadeOut(1)

    $(this).addClass('list_up').siblings('li').removeClass('list_up')


    



})


// 客戶詳情
$('#Client_list_warp').on('click','.client_detail',function(){


    $('.Each_clientManage').fadeIn(100).siblings('.B_content').fadeOut(1)

    

})


// 客戶紀錄選擇
// 訂單記錄 
$('.Client_Content_title h4:nth-of-type(1)').click(function(){


    $(this).addClass('title_up').siblings('h4').removeClass('title_up')

    $('.order_detail_content').fadeIn(100).siblings('.CR_content').fadeOut(1)



})
// 公主幣紀錄
$('.Client_Content_title h4:nth-of-type(2)').click(function(){


    $(this).addClass('title_up').siblings('h4').removeClass('title_up')

    $('.coin_detail_content').fadeIn(100).siblings('.CR_content').fadeOut(1)



})
// 集點紀錄
$('.Client_Content_title h4:nth-of-type(3)').click(function(){


    $(this).addClass('title_up').siblings('h4').removeClass('title_up')

    $('.point_detail_content').fadeIn(100).siblings('.CR_content').fadeOut(1)



})


// 修改客戶資料
$('.editClientName').click(function(){

    $(this).next('.checkout_info').fadeIn(100)

})

//人工加公主幣
$('#editAddCoin').click(function(){

    $(this).next('.checkout_info').fadeIn(100)

})


//人工加幣
$('#editAddPoint').click(function(){

    $(this).next('.checkout_info').fadeIn(100)

})








/////////////

// 取消填入
$('.checkout_info_bg').click(function(){

    $('.checkout_info').fadeOut(100);


})

$('.info_cancel').click(function(){

    $('.checkout_info').fadeOut(100);


})


// 優先出貨
$('#Order_list_warp').on('click','.first_ship',function(){


    $(this).toggleClass('ShipFirst')


})

'use strict'



if($(window).width() < 768){


    $('#RWD_btn').click(function(){


        $('.Backstage_bar').toggleClass('RWD_Backstage_barOpnen')
       
       
       
       
       })
}

// 後台項目選擇
//訂單管理
$('.Backstage_bar_list li:nth-of-type(1)').click(function(){


    $('.Order_Manage').fadeIn(100).siblings('.B_content').fadeOut(1)

    $(this).addClass('list_up').siblings('li').removeClass('list_up')

})

// 訂單詳情
$('#Order_list_warp').on('click','.order_detail',function(){



    $('.Each_orderDetail').fadeIn(100).siblings('.B_content').fadeOut(1)
    $('.Order_Manage').hide()



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

    $('.Client_Manage').hide()

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


$('.editClientName').click(function(){

    $(this).next('.checkout_info').fadeIn(100)

})

$('#editAddCoin').click(function(){

    $(this).next('.checkout_info').fadeIn(100)

})

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
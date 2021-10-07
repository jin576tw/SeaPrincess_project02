'use strict'

// 圖片編輯
let DataPic01 ={}



// 選擇圖片
$('#filed01').change(function(){
    
    let file = $('#filed01').get(0).files[0];
   
    let reader = new FileReader();
   
    reader.readAsDataURL(file);
    

    reader.onload=function(e){
    

        // 圖片資料
        DataPic01 = e
       
        // 顯示圖片
        // console.log( DataPic01);
        $('#imgshow01').get(0).src = e.target.result;

    }

})




// 送出編輯
function save(){



    // 支付編輯
    let contentEdit = CKEDITOR.instances.content.getData()


    let CounterMin = $('input[name="Min_Edit"]').val()
    let CounterSec = $('input[name="Sec_Edit"]').val()
   


    //編輯資料
    let EditDATA = {
       
        "CheckCode": DataPic01,//二维码上传
        "CheckContent": contentEdit,//支付編輯
        "CheckMin":CounterMin,
        "CheckSec":CounterSec,
       
    }



    console.log( EditDATA );
    let  EditStr = JSON.stringify(EditDATA)

   



    $.ajax({
        type: "post",
        url: "",
        async: false,   
        dataType: "json",
        data: EditStr,
        contentType: 'application/json; charset=UTF-8',
        complete: function (obj) {

           alert('编辑成功')
        }

    })
   
    
}



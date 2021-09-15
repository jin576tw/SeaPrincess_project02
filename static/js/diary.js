'use strict'

$(document).ready(function () {
    $.get("./static/JSON/diary.json", function (data) {


        let d = data


        // 依照先後排序
        timeSort(d)

        for(let i = 0 ; i < d.length ;i++){ 


            $('.Diary_content').append(Blog_artical(d[i]))


        }

        

       









    })

})
'use strict'

$(document).ready(function () {
    $.get("./static/JSON/diary.json", function (data) {


        let d = data
        for(let i = 0 ; i < d.length ;i++){ 


            $('.Diary_artical_content').append(Blog_artical(d[i]))


        }

        

       









    })

})
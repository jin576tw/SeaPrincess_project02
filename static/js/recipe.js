'use strict'

$(document).ready(function () {
    $.get("./static/JSON/recipe.json", function (data) {


        let d = data


        // 依照先後排序
        timeSort(d)
        for(let i = 0 ; i < d.length ;i++){ 


            $('.Recipe_content').append(Blog_artical_B(d[i]))


        }

        

       









    })

})
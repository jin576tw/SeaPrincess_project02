'use strict'

$(document).ready(function () {
    $.get("./static/JSON/recipe.json", function (data) {


        let d = data
        for(let i = 0 ; i < d.length ;i++){ 


            $('.recipe_articale_warp').append(Blog_artical_B(d[i]))


        }

        

       









    })

})
'use strict'

let RecipeContent = $('.Recipe_content')

$(document).ready(function () {
    $.get("./static/JSON/recipe.json", function (data) {


        let d = data

        // 依照先後排序
        timeSort(d)
       


        if ($(window).width() <= 1024){

            $('#Recipe_page').pagination({
                dataSource: data,
                pageSize: 4,
               
                callback: function(data, pagination) {
    
    
                    RecipeContent.empty()
    
            
                    for(let i = 0 ; i < d.length ;i++){ 
    
    
                        RecipeContent.append(Blog_artical(d[i]))
    
                    }
    
                }
            })


            

        }else{

            $('#Recipe_page').pagination({
                dataSource: data,
                pageSize: 16,
               
                callback: function(data, pagination) {
    
    
                    RecipeContent.empty()
    
            
                    for(let i = 0 ; i < d.length ;i++){ 
    
    
                        RecipeContent.append(Blog_artical(d[i]))
    
                    }
    
                }
            })

        }
        
        
       









    })

})
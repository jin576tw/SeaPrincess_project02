'use strict'

let DiaryContent =  $('.Diary_content')
$(document).ready(function () {
    $.get("./static/JSON/diary.json", function (data) {


        let d = data


        // 依照先後排序
        timeSort(d)




        if ($(window).width() <= 1024){

            $('#Diary_page').pagination({
                dataSource: data,
                pageSize: 4,
               
                callback: function(data, pagination) {
    
    
                    DiaryContent.empty()
    
            
                    for(let i = 0 ; i < d.length ;i++){ 
    
    
                        DiaryContent.append(Blog_artical(d[i]))
    
                    }
    
                }
            })


        }else{

            $('#Diary_page').pagination({
                dataSource: data,
                pageSize: 16,
               
                callback: function(data, pagination) {
    
    
                    DiaryContent.empty()
    
            
                    for(let i = 0 ; i < d.length ;i++){ 
    
    
                        DiaryContent.append(Blog_artical(d[i]))
    
                    }
    
                }
            })

        }

        
        

       


        

       









    })

})
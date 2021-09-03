'use strict'

$(document).ready(function () {
    $.get("../JSON/diary.json", function (data) {


        let d = data
        for(let i = 0 ; i < d.length ;i++){ 


          


            function Blog_artical(a) {

                 // 文章標籤
                 let TagList =``
                 for(let j =0 ;j < d[i].tag.length ; j++){

                    let articleTag = 
                    `<div class="artical_tag p-0">
                        <div class="artical_tag_outline"><p>${d[i].tag[j]}</p></div>
                    </div>`

                    TagList += articleTag;
                    // DairyTag.append(articleTag)


                }




                //文章ID三位數
                function articleID(a) {

                    if(a.aid < 10){ 

                        let num ='00'+a.aid;

                        return num

                    }
                    else if(a.aid < 100){

                        let num ='0'+a.aid;

                        return num

                    }else{
                        let num = a.aid
                        return num

                    }

                }

                let ArticleID = articleID(a)
               
            
                let Blog_artical =`
                <div class="Blog_artical diary_artical col-lg-4 col-md-4 col-12 p-0">

                        <div class="Blog_artical_pic">
                            <a href="../html/articale_diary.html?D&&aid=`+ArticleID 
                            +
                            `">
                                <img src="${a.content.img01[0]}" alt="">
                            </a>
                        </div>
        
                       
                        <div class="Blog_artical_title">
                            <a href="../html/articale_diary.html?D&&aid=`+ArticleID +`">
                            <p>${a.title}</p>
                            </a>
                        </div>
                        <div class="Blog_artical_author">
                            <div class="artical_author_pic">
                                <i class="fas fa-user-circle"></i>
                            </div>
                            <div class="artical_author_name">
                               ${a.user}
                            </div>
                        </div>
                        <div class="Blog_artical_tags Tags_list m-0 ">`+TagList+`</div>
                    </div>`;


                return Blog_artical

            
            }


        //    console.log( Blog_artical(d[i]) )


            $('.Diary_artical_content').append(Blog_artical(d[i]))


        }

        

       









    })

})
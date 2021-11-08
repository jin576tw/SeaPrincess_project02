$(document).ready(function () {


    let DairyURL =  location.href.substr(-10,1) == "D";

    let ArticleContent = $('.articale_contnet_warp')

    let ArticleTITLE = $('.articale_title h1')

    let ArticleTime = $('.articale_time')

    let WriterPic = $('.writer_pic')
    let WriterName = $('.writer_name h5')

    // let ArticleTag = $('.each_artical_tags')


    // 海上日誌
    if(DairyURL){

        $.get("./static/JSON/diary.json", function (data) {

            let d = data;
            let DairyID = parseInt(location.href.substr(-3,3));

            for(let i = 0 ; i < d.length ;i++){ 

                if(d[i].aid ==DairyID){

                    // 文章標題    
                    ArticleTITLE.text(d[i].title) 

                    //文章建立時間
                    function changeTime(t) {
                        // 時間轉換格式
                        let time = t.create_at

                        let newtime = time.replace("-", "/").replace("-", "/");

                        return `<i class="far fa-calendar-alt"></i>`+newtime

                    
                    }
                    
        
                    ArticleTime.html(changeTime(d[i]))  
                    
                    // 文章作者
                    WriterName.text(d[i].user)


                    // // 文章標籤
                    // for(let j =0 ;j < d[i].tag.length ; j++){

                    //     let articleTag = 
                    //     `<div class="artical_tag  p-0">
                    //         <div class="artical_tag_outline"><p>${d[i].tag[j]}</p></div>
                    //     </div>`

                    //     ArticleTag.append(articleTag)


                    // }

                
                ////////////文章段落////////////

                let Article = d[i].content
                  
                ArticleContent.html(Article)


                }
            
            }

        })

    }else{

        $('.Articale_title_text h1').text('料理食譜')


        $.get("./static/JSON/recipe.json", function (data) {

            let d = data

            let RecipeID = parseInt(location.href.substr(-3,3));

            for(let i = 0 ; i < d.length ;i++){

                if(d[i].aid ==RecipeID){


                    // 文章標題    
                    ArticleTITLE.text(d[i].title) 

                   //文章建立時間
                   function changeTime(t) {
                       
                    // 時間轉換格式
                    let time = t.create_at

                    let newtime = time.replace("-", "/").replace("-", "/");

                    return `<i class="far fa-calendar-alt"></i>`+newtime

                
                    }
                    
        
                    ArticleTime.html(changeTime(d[i]))  
                    
                    // 文章作者
                    WriterName.text(d[i].user)



                    // // 文章標籤
                    // for(let j =0 ;j < d[i].tag.length ; j++){

                    //     let articleTag = 
                    //     `<div class="artical_tag  p-0">
                    //         <div class="artical_tag_outline"><p>${d[i].tag[j]}</p></div>
                    //     </div>`

                    //     ArticleTag.append(articleTag)


                    // }

                    ////////////食譜段落////////////

                    let Article = d[i].content

                    // 食譜輸出
                    ArticleContent.html(Article)





                }

            }
        })








    }









})
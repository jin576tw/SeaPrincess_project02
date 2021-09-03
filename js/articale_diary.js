

$(document).ready(function () {


    let DairyURL =  location.href.substr(-10,1) == "D";

    let ArticleContent = $('.articale_contnet_warp')

    let ArticleTITLE = $('.articale_title h1')

    let ArticleTime = $('.main_article_time')

    let ArticleTag = $('.each_artical_tags')


    // 海上日誌
    if(DairyURL){

        $.get("../JSON/diary.json", function (data) {

            let d = data;
            let DairyID = parseInt(location.href.substr(-3,3));

            for(let i = 0 ; i < d.length ;i++){ 

                if(d[i].aid ==DairyID){

                    // 文章標題    
                    ArticleTITLE.text(d[i].title) 

                    //文章建立時間
                    let Articletime =``

                    function changeTime(t) {
                        // 時間轉換格式
                        let time = t.create_at

                        let newtime = time.replace("-", "/").replace("-", "/");

                        Articletime = `<i class="far fa-calendar-alt"></i>`+newtime

                    
                    }
                    
                    changeTime(d[i])

                    ArticleTime.html(Articletime)    


                    // 文章標籤
                    for(let j =0 ;j < d[i].tag.length ; j++){

                        let articleTag = 
                        `<div class="artical_tag  p-0">
                            <div class="artical_tag_outline"><p>${d[i].tag[j]}</p></div>
                        </div>`

                        ArticleTag.append(articleTag)


                    }

                
                ////////////文章段落////////////

                    let Article = (a) => {
                        
                        function ArticalePic(img,detail) {

                            let a_pic = ``

                            if(img == ''){

                                a_pic = ``

                            }else{

                                for(let j = 0; j<img.length ; j++){

                                    let pic_str = `<div class="articale_pic">
                                                    <img src="${img[j]}" alt="">
                                                    </div>`

                                    a_pic += pic_str;

                                    
                                }

                            }

                            let a_detail =``

                        
                            if(detail == ''){

                                a_detail =``

                            }else{

                                a_detail = `
                                <div class="articale_pic_detail articale_pic_detail01 ">
                                    <i class="fas fa-caret-up"></i>
                                    ${detail}
                                </div>
                    
                                `;

                            }
                            


                            let ArticalePic =`<div class="articale_pic_warp col-lg-12 col-12 ">`+a_pic+a_detail+`</div>`


                            return ArticalePic
                            
                        }

                        function ArticaleText(text) {

                            let text_content =``

                            if(text == ' ' ){

                                text_content =``

                            }else{

                                for(let j = 0 ; j < text.length  ;j++){ 

                                    textStr =text[j];
                    
                                    text_content +=  textStr
                                
                                }

                            }

                            let ArticaleText = `<div class="articale_text  col-lg-12 col-12">`+text_content+`</div>`;

                            return ArticaleText

                            
                        }

                        function MoreArticale(more) {

                            let more_read = ``

                            if(more == ''){

                            }else{

                                more_read = `<div class="more_articale          col-lg-12 col-11 pl-5">
                                        <p>延伸閱讀：<span>${more}}</p>
                                </div>`


                            }
                            
                            return more_read
                            
                        }
                        

                        let ArticleContnet = a.content

                        let img01  = ArticleContnet.img01;
                        let detail01  = ArticleContnet.img01_detail;
                        let text01 = ArticleContnet.p01
                        let more01 =  ArticleContnet.more01

                    
                        let paragraph01 =  ArticalePic(img01,detail01) + ArticaleText(text01)+MoreArticale(more01)


                        let img02  = ArticleContnet.img02;
                        let detail02  = ArticleContnet.img02_detail;
                        let text02 = ArticleContnet.p02
                        let more02 =  ArticleContnet.more02

                    
                        let paragraph02 =  ArticalePic(img02,detail02) + ArticaleText(text02)+MoreArticale(more02)


                        let img03  = ArticleContnet.img03;
                        let detail03  = ArticleContnet.img03_detail;
                        let text03 = ArticleContnet.p03
                        let more03 =  ArticleContnet.more03

                    
                        let paragraph03 =  ArticalePic(img03,detail03) + ArticaleText(text03)+MoreArticale(more03)

                        

                        let Article = paragraph01 + paragraph02 + paragraph03;
                        
                    
                        return Article;
                
                    }

                    ArticleContent.append(Article(d[i]))


                }
            
            }

        })

    }else{

        $.get("../JSON/recipe.json", function (data) {

            let d = data

            let RecipeID = parseInt(location.href.substr(-3,3));

            for(let i = 0 ; i < d.length ;i++){

                if(d[i].aid ==RecipeID){



                    // 文章標題    
                    ArticleTITLE.text(d[i].title) 

                    //文章建立時間
                    let Articletime =``

                    function changeTime(t) {
                        // 時間轉換格式
                        let time = t.create_at

                        let newtime = time.replace("-", "/").replace("-", "/");

                        Articletime = `<i class="far fa-calendar-alt"></i>`+newtime

                    
                    }

                    changeTime(d[i])

                    ArticleTime.html(Articletime)  



                    // 文章標籤
                    for(let j =0 ;j < d[i].tag.length ; j++){

                        let articleTag = 
                        `<div class="artical_tag  p-0">
                            <div class="artical_tag_outline"><p>${d[i].tag[j]}</p></div>
                        </div>`

                        ArticleTag.append(articleTag)


                    }

                    ////////////食譜段落////////////


                    let Article = (a) => {

                        
                 
                        let Rcontent = a.content

                        let Recipeintro = ``

                        if(Rcontent.img_intro ==''){

                            Recipeintro = ``


                        }else{

                            for(let j = 0 ; j < Rcontent.img_intro.length ;j++){ 

                                introStr=`<p>${Rcontent.img_intro[j]}</p>`

                                Recipeintro +=introStr

                            }
                        
                        }


                        let RecipePic=`
                        <div class="Recipe_pic_warp col-lg-12 col-12">
                                <div class="Recipe_pic">
                                    <img src="${Rcontent.img[0]}" alt="">
                                </div>

                                <div class="Recipe_pic_detail">`+Recipeintro+`</div>
                        </div>`

                        let ingredient = Rcontent.ingredient;

                        function  RecipeForm(params) {

                            let Form =`
                            <div class="recipe_form recipe_form01">
                                <div class="recipe_form_title">
                                  <h2>${Rcontent.ingredient.name[0]}</h2>
                                </div>
                                <div class="recipe_form_content row">
                                    <div class="recipe_form_list col-lg-6 col-md-6 col-12">
                                        <h3>魷魚</h3>
                                        <h3>100g</h3>
                                    </div>
                                    <div class="recipe_form_list col-lg-6 col-md-6 col-12">
                                        <h3>老薑片</h3>
                                        <h3>3片</h3>
                                    </div>
                                    <div class="recipe_form_list col-lg-6 col-md-6 col-12">
                                        <h3>米酒</h3>
                                        <h3>1大匙</h3>
                                    </div>
                                    <div class="recipe_form_list col-lg-6 col-md-6 col-12">
                                        <h3>蒜末</h3>
                                        <h3>1大匙</h3>
                                    </div>
                                    <div class="recipe_form_list col-lg-6 col-md-6 col-12">
                                        <h3>蔥末</h3>
                                        <h3>2大匙</h3>
                                    </div>
                                    <div class="recipe_form_list col-lg-6 col-md-6 col-12">
                                        <h3>辣椒末</h3>
                                        <h3>適量</h3>
                                    </div>
                                </div>
                            </div>
    
                            `
                            
                        }
                       




                        ArticleContent.append(RecipePic)





                    }


                    
                    Article(d[i])





                }

            }
        })








    }









})
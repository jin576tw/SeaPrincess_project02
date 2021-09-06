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

                    // 文章架構function 
                    let Article = (a) => {
                        
                        // 文章圖片架構function
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

                        // 文章文字框架構function
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

                        // 延伸閱讀架構function
                        function MoreArticale(more) {

                            let more_read = ``

                            if(more == ''){

                            }else{

                                more_read = `<div class="more_articale  col-lg-12 col-11 pl-5">
                                        <p>延伸閱讀：<span>${more}}</p>
                                </div>`


                            }
                            
                            return more_read
                            
                        }
                        
                        // 抓取海上日誌內容
                        let ArticleContnet = a.content

                        // 抓取第一段圖片/圖片說明/文字內容/延伸閱讀
                        let img01  = ArticleContnet.img01;
                        let detail01  = ArticleContnet.img01_detail;
                        let text01 = ArticleContnet.p01
                        let more01 =  ArticleContnet.more01

                        // 第一段全部內容
                        let paragraph01 =  ArticalePic(img01,detail01) + ArticaleText(text01)+MoreArticale(more01)


                         // 抓取第二段圖片/圖片說明/文字內容/延伸閱讀
                        let img02  = ArticleContnet.img02;
                        let detail02  = ArticleContnet.img02_detail;
                        let text02 = ArticleContnet.p02
                        let more02 =  ArticleContnet.more02

                    
                        //第二段全部內容
                        let paragraph02 =  ArticalePic(img02,detail02) + ArticaleText(text02)+MoreArticale(more02)


                       // 抓取第三段圖片/圖片說明/文字內容/延伸閱讀
                        let img03  = ArticleContnet.img03;
                        let detail03  = ArticleContnet.img03_detail;
                        let text03 = ArticleContnet.p03
                        let more03 =  ArticleContnet.more03

                        // 第三段全部內容
                        let paragraph03 =  ArticalePic(img03,detail03) + ArticaleText(text03)+MoreArticale(more03)

                        
                        // 全部段落整合
                        let Article = paragraph01 + paragraph02 + paragraph03;
                        
                    
                        return Article;
                
                    }

                    // 文章輸出
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

                    // 食譜架構function 
                    let Article = (a) => {

                        // 統整食譜資料
                        let RECIPE= a.content


                        // 食譜圖片架構    
                        function RecipePic(a){

                            // 食譜圖片介紹
                            let Recipeintro = ``

                            if(a.img_intro ==''){

                                Recipeintro = ``


                            }else{

                                for(let j = 0 ; j < a.img_intro.length ;j++){ 

                                    introStr=`<p>${a.img_intro[j]}</p>`

                                    Recipeintro +=introStr

                                }
                            
                            }

                            // 食譜圖片產生
                            let r_pic=`
                            <div class="Recipe_pic_warp col-lg-12 col-12">
                                    <div class="Recipe_pic">
                                        <img src="${a.img[0]}" alt="">
                                    </div>

                                    <div class="Recipe_pic_detail">`+Recipeintro+`</div>
                            </div>`


                            return r_pic
                        }

                        
                        // 食譜原料表格架構
                        function RecipeForm(a){

                            let Ingred = a.ingredient;
                        
                            let AllForm =``

                            for(let j = 0 ; j < Ingred.name.length ;j++){ 

                                let List =``
                                for(let k = 0 ; k < Ingred.list[j].item.length; k++){


                                    let listStr = ` <div class="recipe_form_list col-lg-6 col-md-6 col-12">
                                            <h3>${Ingred.list[j].item[k]}</h3>
                                            <h3>${Ingred.list[j].count[k]}</h3>
                                        </div>`
    

                                    List +=listStr

                                }

                            
                                let Form =`<div class="recipe_form">
                                <div class="recipe_form_title">
                                <h2>${Ingred.name[j]}</h2>
                                </div>
                                <div class="recipe_form_content row">`+List+`</div>
                                </div>`


                                AllForm += Form

                            
                            }


                            return AllForm

                        }


                        //食譜步驟
                        function RecipeSteps(a) {

                            let Steps = a.step;
                        
                            let Allstep = ``

                            for(let j = 0 ; j < Steps.stepName.length ;j++){ 

                                // 步驟圖片
                                let StepPic =``;
                                if(Steps.stepPic[j] == ""){

                                    StepPic =`` ;

                                }else{

                                    StepPic =`<div class="recipe_step_pic">
                                                <img src="${Steps.stepPic[j]}" alt="">
                                            </div> ` ;

                                }

                                // 步驟介紹
                                let StepIntro = ``;
                                if(Steps.stepIntro[j] == ""){

                                    StepIntro = ``;

                                }else{

                                    StepIntro = `<p>${Steps.stepIntro[j]}</p>`;

                                }


                                // 單一步驟架構
                                let stepStr = ` <div class="recipe_step">
                                <div class="recipe_step_title">
                                    <h3><span>${j+1}.</span>${Steps.stepName[j]}</h3>
                                </div>
                                <div class="recipe_step_content">`+StepIntro+StepPic+`</div>
                                </div>`

                               
                                Allstep +=stepStr;

                                
    
                            }

                            let StepWarp =`<div class="recipe_steps_warp">`+Allstep+`</div>`

                            return StepWarp;
                            
                        }
                        
                        let Article = RecipePic(RECIPE) +RecipeForm(RECIPE) +RecipeSteps(RECIPE)

                    
                        return Article;


                    }

                    // 食譜輸出
                    ArticleContent.append(Article(d[i]))





                }

            }
        })








    }









})


$(document).ready(function () {


    $.get("../JSON/diary.json", function (data) {


        let d = data;
        let DairyID = parseInt(location.href.substr(-3,3));

        let DairyTITLE = $('.articale_title h1')

        let DairyTime = $('.main_article_time')

        let DairyTag = $('.each_artical_tags')

        let DairyContent = $('.articale_contnet_warp')

        for(let i = 0 ; i < d.length ;i++){ 

            if(d[i].aid ==DairyID){

            
                // 文章標題    
                DairyTITLE.text(d[i].title) 

                //文章建立時間
                let Articletime =``

                function changeTime(t) {
                    // 時間轉換格式
                    let time = t.create_at

                    let newtime = time.replace("-", "/").replace("-", "/");

                    Articletime = `<i class="far fa-calendar-alt"></i>`+newtime

                
                }
                
                changeTime(d[i])

                DairyTime.html(Articletime)    


                // 文章標籤
                for(let j =0 ;j < d[i].tag.length ; j++){

                    let articleTag = 
                    `<div class="artical_tag  p-0">
                        <div class="artical_tag_outline"><p>${d[i].tag[j]}</p></div>
                    </div>`

                    DairyTag.append(articleTag)


                }

             
            ////////////文章段落////////////

                function Article(a) {
                    
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

                DairyContent.append(Article(d[i]))






            }
        
        }


    })









})
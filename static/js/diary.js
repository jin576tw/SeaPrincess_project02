'use strict'

let DiaryContent =  $('.Diary_content')

$.get("./static/JSON/diary.json", function (data) {


    let d = data

    // 依照先後排序
    timeSort(d)


    // 主要文章
    // 主要文章標籤
    let TagList =``
    for(let j =0 ;j < d[0].tag.length ; j++){

        let articleTag = 
        `<div class="artical_tag p-0">
            <div class="artical_tag_outline"><p>${d[0].tag[j]}</p></div>
        </div>`
        

        TagList += articleTag;

    }

    $('.main_artical_tags').html(TagList)


    // 隱藏超過標題
    const OverTitle = (p) =>{

        const len = 38

        if(p.length > len){

            let newTitle = p.substring(0,len-1)+"..."

            return newTitle

        }else{

            return p

        }

    }


    $('.main_content h2').text(OverTitle(d[0].title))

    $('.main_artical_pic img').attr('src',d[0].cover)


    //主要文章文章ID三位數
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

    // 主要文章文章連結
    const link = `./articale.html?D&&aid=${articleID(d[0])}`

    $('.main_artical_content_outline a').attr('href',link)


    // 抓取文章內容
    const fetchIntro = (text) =>{

        // 空格正規表達式
        const space =/<p[^>]*>[\s|&nbsp;]*<\/p>/g

        // 去掉空格
        const newtext= text.replace(space,"")

        // 去掉空格後第一個<p>標籤
        const P_index =  newtext.search('<p>')

       

        if ($(window).width() < 1024){
            

            const Fetch = newtext.substr(P_index+3,80)+"..."

            return Fetch

        }else{

            const Fetch = newtext.substr(P_index+3,110)+"..."

            return Fetch

        }


       


    }

    let more = `<small><a href="${link}">繼續閱讀</a></small>`

    $('.main_content p').text(fetchIntro(d[0].content)).append(more)

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


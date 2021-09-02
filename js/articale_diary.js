

$(document).ready(function () {


    $.get("../JSON/diary.json", function (data) {


        let d = data;
        let DairyID = parseInt(location.href.substr(-3,3));

        let DairyTITLE = $('.articale_title h1')

        let DairyTime = $('.new_artical_date')

        for(let i = 0 ; i < d.length ;i++){ 

            if(d[i].aid ==DairyID){

            
                DairyTITLE.text(d[i].title) 


                let articletime = `<i class="far fa-calendar-alt"></i>`+d[i].create_at

                DairyTime.html(articletime)



                for(let j =0 ;j < d[i].tag.length ; j++){

                    let articleTag = 
                    `<div class="artical_tag  p-0">
                        <div class="artical_tag_outline"><p>${d[i].tag[j]}</p></div>
                    </div>`

                    $('.each_artical_tags').append(articleTag)


                }

             
               


                
                console.log(d[i].tag[0]);

            // console.log($('.new_artical_date').text());







            }
        
        }


    })









})
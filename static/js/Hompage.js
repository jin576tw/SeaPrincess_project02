$(document).ready(function () {


    
    $(window).scroll(function () {  

        let scrollNow = $(window).scrollTop();
        

        let pulse = `animate__animated animate__pulse`

        let fadeIn = `animate__animated animate__fadeIn`

        let titleIn = `animate__animated animate__fadeInDown`

        let flip = `animate__animated animate__flipInX`


        let RightIn = `animate__animated animate__fadeInRight`
       

/* ///////////第一頁//////////// */

  // 平板版
        if ($(window).width() <= 1024) {

            if (scrollNow >= 63){
                
               
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0.2').css('transition','0.5s')
    
            }
    
            let pulse = `animate__animated animate__pulse`

            if (scrollNow >= 296){

                

                $('.intro_btn_icon').addClass(pulse ).css('opacity','1').css('transition','0.8s')

            }else{

                $('.intro_btn_icon').removeClass(pulse ).css('opacity','0.2').css('transition','0.8s')

            }
    
            if (scrollNow >= 526){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }

        }

        //手機版
        if ($(window).width() < 768) {
            if (scrollNow >= 36){
                
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0.2').css('transition','0.5s')
    
            }


            if (scrollNow >= 335){

                

                $('.intro_btn_icon').addClass(pulse ).css('opacity','1').css('transition','0.8s')

            }else{

                $('.intro_btn_icon').removeClass(pulse ).css('opacity','0.2').css('transition','0.8s')

            }
    
    
            if (scrollNow >= 575){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }

            


        }

      

        // 網頁版 
        if ($(window).width() > 1024) {

            if (scrollNow >= 91){
                
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0.2').css('transition','0.5s')
    
            }
    


           

            if (scrollNow >= 385){

               
                $('.intro_btn_icon').addClass(pulse).css('opacity','1').css('transition','0.8s')


                

            }else{

       

                $('.intro_btn_icon').removeClass(pulse ).css('opacity','0.2').css('transition','0.8s')
            }
    
            if (scrollNow >= 774){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }
        }

        


/* //////////最新漁貨////////// */

    

        // 平板版
        if ($(window).width() <= 1024) {

            if (scrollNow >= 588){
                $('.SeafoodProduct_tittle').css('opacity','1').css('transition','0.5s')


                $('.SeafoodProduct_tittle').css('opacity','1')
    
            }else{
                $('.SeafoodProduct_tittle').css('opacity','0.2').css('transition','0.5s')
    
            }


            if(scrollNow >= 1825){


                $('.ItemProduct_tittle').css('opacity','1').css('transition','0.5s')

            }else{

                $('.ItemProduct_tittle').css('opacity','0.2').css('transition','0.5s')
            }


            if(scrollNow >= 650){

                $('.homeSeafood_warp').css('transform','translateY(0px)').css('opacity','1')

            }else{

                $('.homeSeafood_warp').css('transform','translateY(50px)').css('opacity','0.2')


            }
            if(scrollNow >= 1850){

                $('.homeItem_warp').css('transform','translateY(0px)').css('opacity','1')


            }else{

                $('.homeItem_warp').css('transform','translateY(50px)').css('opacity','0.2')


            }
    
           


           
        }

         // 手機版
         if ($(window).width() < 768) {


            
            if(scrollNow >= 665){


                $('.SeafoodProduct_tittle').css('opacity','1').css('transition','0.5s')

            }else{

                $('.SeafoodProduct_tittle').css('opacity','0.2').css('transition','0.5s')
            }

            if(scrollNow >= 668){

                $('.homeSeafood_warp').css('transform','translateY(0px)').css('opacity','1')

            }else{

                $('.homeSeafood_warp').css('transform','translateY(50px)').css('opacity','0.2')


            }
            
            if(scrollNow >= 2070){


                $('.ItemProduct_tittle').css('opacity','1').css('transition','0.5s')

            }else{

                $('.ItemProduct_tittle').css('opacity','0.2').css('transition','0.5s')
            }


            if(scrollNow >= 2130){

                $('.homeItem_warp').css('transform','translateY(0px)').css('opacity','1')


            }else{

                $('.homeItem_warp').css('transform','translateY(50px)').css('opacity','0.2')


            }


            

           

        }

        

        // 網頁版
        if ($(window).width() > 1024) {


            if (scrollNow >= 882){
                $('.SeafoodProduct_tittle').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.SeafoodProduct_tittle').css('opacity','0.2').css('transition','0.5s')
    
            }


            if(scrollNow >= 1864){


                $('.ItemProduct_tittle').css('opacity','1').css('transition','0.5s')

            }else{

                $('.ItemProduct_tittle').css('opacity','0.2').css('transition','0.5s')
            }

            if(scrollNow >= 923){

                $('.homeSeafood_warp').css('transform','translateY(0px)').css('opacity','1')

            }else{

                $('.homeSeafood_warp').css('transform','translateY(50px)').css('opacity','0.2')


            }
            if(scrollNow >= 1900){

                $('.homeItem_warp').css('transform','translateY(0px)').css('opacity','1')


            }else{

                $('.homeItem_warp').css('transform','translateY(50px)').css('opacity','0.2')


            }
    
            
    
        }

    ////海釣包船資訊

   
     // 平板版
     if($(window).width() <= 1024) {
        if(scrollNow >= 3223){

            $('.Tourist_page_title').addClass(titleIn)


        }else{

            $('.Tourist_page_title').removeClass(titleIn)

        }

        if(scrollNow >= 3354){

            $('.Tourist_page_intro').css('opacity','1').css('transition','0.8s')




        }else{

            $('.Tourist_page_intro').css('opacity','0').css('transition','0.8s')


        }

        if(scrollNow >= 3523){

            $('.Tourist_page_pic').addClass(flip).css('opacity','1')


        }else{
            $('.Tourist_page_pic').removeClass(flip).css('opacity','0.2')
            
        }

        if(scrollNow >= 3877){

            $('.Blog_Page').addClass(RightIn).css('opacity','1')
            
            setTimeout(function(){

                $('.intro_text_content').addClass(fadeIn).css('opacity','1')

            },500)
           

        }else{
            $('.Blog_Page').removeClass(RightIn).css('opacity','0')
            $('.intro_text_content').removeClass(fadeIn).css('opacity','0')
            

        }

        // 加入line社團
        if(scrollNow >= 5203){

            $('.LineGroup_page_content').addClass(pulse)



        }else{

            $('.LineGroup_page_content').removeClass(pulse)

        }

     }

       // 手機版
       if($(window).width() < 768) {
        if(scrollNow >= 3587){

            $('.Tourist_page_title').addClass(titleIn)


        }else{

            $('.Tourist_page_title').removeClass(titleIn)

        }

        if(scrollNow >= 3800){

            $('.Tourist_page_intro').css('opacity','1').css('transition','0.8s')




        }else{

            $('.Tourist_page_intro').css('opacity','0').css('transition','0.8s')


        }

        if(scrollNow >= 3915){

            $('.Tourist_page_pic').addClass(flip).css('opacity','1')


        }else{
            $('.Tourist_page_pic').removeClass(flip).css('opacity','0.2')
            
        }

        if(scrollNow >= 4303){

            $('.Blog_Page').addClass(RightIn).css('opacity','1')
            
            setTimeout(function(){

                $('.intro_text_content').addClass(fadeIn).css('opacity','1')

            },500)
           

        }else{
            $('.Blog_Page').removeClass(RightIn).css('opacity','0')
            $('.intro_text_content').removeClass(fadeIn).css('opacity','0')
            

        }

        // 加入line社團
        if(scrollNow >= 5684){

            $('.LineGroup_page_content').addClass(pulse)



        }else{

            $('.LineGroup_page_content').removeClass(pulse)

        }

    }


     // 網頁版
     if ($(window).width() > 1024) {

        if(scrollNow >= 2933){

            $('.Tourist_page_title').addClass(titleIn)


        }else{

            $('.Tourist_page_title').removeClass(titleIn)

        }


        if(scrollNow >= 3071){

            $('.Tourist_page_intro').css('opacity','1').css('transition','0.8s')




        }else{

            $('.Tourist_page_intro').css('opacity','0').css('transition','0.8s')


        }


        if(scrollNow >= 3198){

            $('.Tourist_page_pic').addClass(flip).css('opacity','1')


        }else{
            $('.Tourist_page_pic').removeClass(flip).css('opacity','0.2')
            
        }

        if(scrollNow >= 3746){

            $('.Blog_Page').addClass(RightIn).css('opacity','1')
            

            setTimeout(function(){

                $('.intro_text_content').addClass(fadeIn).css('opacity','1')

            },500)
           

        }else{

           
            $('.Blog_Page').removeClass(RightIn).css('opacity','0')
            $('.intro_text_content').removeClass(fadeIn).css('opacity','0')
            

        }


        // 加入line社團
        if(scrollNow >= 5090){

            $('.LineGroup_page_content').addClass(pulse)



        }else{

            $('.LineGroup_page_content').removeClass(pulse)

        }

     }




    
    })
 
    $('.view_more_btn').on({

        mouseenter: function () {

            $(this).css('color','var(--light_blue)')  
        
            $(this).find("p").css('border-bottom','solid 0.5px var(--light_blue)').css('transition','0.5s')

            $(this).find(".fa-caret-down").css('transform','scale(1.2) translateY(5px)').css('transition','0.5s')

        },
        mouseleave: function () {

        
            $(this).css('color','rgba(29, 30, 30, 0.55)')

           $(this).find("p").css('border-bottom','solid 0.5px rgba(29, 30, 30, 0.55)').css('transition','0.5s')

           $(this).find(".fa-caret-down").css('transform','scale(1) translateY(0px)').css('transition','0.5s')
        

        }



    })

    let HOMESEAFOOD = $('.homeSeafood_warp')
    let HOMEITEM = $('.homeItem_warp')

    $.get("./static/JSON/Seafood.json", function (data) {

        let d = data;

        //新隨機商品資料
        let rd = []

        //商品隨機產生
        randomProuducts(8,d,rd)

        // 依照商品時間排序
        timeSort(rd)


        for(let i = 0 ; i < rd.length ;i++){ 
            // 送隨機商品上去
            HOMESEAFOOD.append(PRODUCT(rd[i]))

        }
        



    })


    $.get("./static/JSON/Item.json", function (data) {

        let d = data;

        let rd = []

        randomProuducts(8,d,rd)

        // 依照商品時間排序
        timeSort(rd)

        for(let i = 0 ; i < rd.length ;i++){ 
            // 送隨機商品上去
            HOMEITEM.append(PRODUCT_B(rd[i]))

        }



    })







})
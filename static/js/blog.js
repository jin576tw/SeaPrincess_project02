'use strict'

let DairyList = $('#Diary_list');
let RecipeList = $('#Recipe_list')

$.get("./static/JSON/diary.json", function (data) {

    let d = data;

    let rd = []

    randomProuducts(4,d,rd)

    // 依照商品時間排序
    timeSort(rd)

    for(let i = 0 ; i < rd.length ;i++){ 

        // 文章載入
        DairyList.append(Blog_artical(rd[i]))


        

    }


})

$.get("./static/JSON/recipe.json", function (data) {

    let d = data;

    let rd = []

    randomProuducts(4,d,rd)

    // 依照商品時間排序
    timeSort(rd)

    for(let i = 0 ; i < rd.length ;i++){ 

        // 食譜載入
        RecipeList.append(Blog_artical_B(rd[i]))


        

    }


})
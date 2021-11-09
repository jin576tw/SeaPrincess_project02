"use strict";

let RecipeContent = $(".Recipe_content");

$(document).ready(function () {
  $.get("./static/JSON/recipe.json", function (data) {
    let d = data;

    // 依照先後排序
    timeSort(d);

    // 選擇一頁幾筆資料
    const per = 12;

    // 分頁初始值第一頁
    let RecipeArticle = pagination(d, per, 1);

    for (let i = 0; i < RecipeArticle.length; i++) {

      RecipeContent.append(Blog_artical_B(RecipeArticle[i]));

    }

    // 選擇分頁
    $(".ptn_warp").on("click", ".ptn", function () {

      RecipeContent.empty();

      let nowPage = parseInt($(this).attr("value"));

      let nowContent = pagination(d, per, nowPage);

      for (let i = 0; i < nowContent.length; i++) {
        RecipeContent.append(Blog_artical_B(nowContent[i]));
      }

      $("body,html").animate(
        {
          scrollTop: $("#Diary_articale").offset().top,
        },
        1,
        "swing"
      );
    });

    // 上一頁分頁
    $(".prev").click(function () {

      let nowPage = parseInt($(".ptnActive").attr("value"));

      if (nowPage == 1) {
        $(this).attr("disabled", true);
      } else {
        RecipeContent.empty();

        $(this).attr("disabled", false);

        let nowContent = pagination(d, per, nowPage - 1);

        for (let i = 0; i < nowContent.length; i++) {
          RecipeContent.append(Blog_artical_B(nowContent[i]));
        }
      }

      $("body,html").animate(
        {
          scrollTop: $("#Diary_articale").offset().top,
        },
        1,
        "swing"
      );

    });

    // 下一頁分頁
    $(".next").click(function () {
        
      const maxPage = Math.ceil(d.length / per);

      let nowPage = parseInt($(".ptnActive").attr("value"));

      if (nowPage == maxPage) {
        $(this).attr("disabled", true);
      } else {
        RecipeContent.empty();

        $(this).attr("disabled", false);

        let nowContent = pagination(d, per, nowPage + 1);

        for (let i = 0; i < nowContent.length; i++) {
          RecipeContent.append(Blog_artical_B(nowContent[i]));
        }
      }

      $("body,html").animate(
        {
          scrollTop: $("#Diary_articale").offset().top,
        },
        1,
        "swing"
      );
    });
  });
});

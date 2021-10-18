"use strict";
// 判斷商品欄位是否出現
function checkfilter(arr) {
  let fishbox = arr.filter((p) => p.fishbox == true);
  let seafood = arr.filter((p) => p.food == true);
  let item = arr.filter((p) => p.food == false);

  // 若生鮮食品為空
  if (seafood.length == 0) {
    $(".fish_items").css("display", "none");
  } else {
    $(".fish_items").css("display", "block");
  }

  // 若釣具用品為空
  if (item.length == 0) {
    $(".tool_items").css("display", "none");
  } else {
    $(".tool_items").css("display", "block");
  }

  //若海鮮魚箱為空
  if (fishbox.length == 0) {
    $(".fishbox_items").css("display", "none");
  } else {
    $(".fishbox_items").css("display", "block");
  }
}

let CHECKTOTAL = $(".total_sum p:nth-of-type(2)");
let GETPOINT = $(".total_point p:nth-of-type(2)");
let FINALTOTAL = $(".total_money p:nth-of-type(2)");

// 點數計算
function PointCalc(p) {
  return p * 0.1;
}

if ($.cookie("Cart") == null) {
  //結帳頁空狀態
  $(".Cart_items_empty").css("display", "flex");

  // 商品欄位狀態
  $(".fish_items").css("display", "none");
  $(".fishbox_items").css("display", "none");
  $(".tool_items").css("display", "none");

  $(".cart_checkout_btn")
    .attr("disabled", true)
    .css("background-color", "var(--grey)");
} else {
  // 啟動結帳按鈕
  $(".cart_checkout_btn")
    .attr("disabled", false)
    .css("background-color", "#5aa700");

  let cookieStr = $.cookie("Cart");
  let cookieArr = JSON.parse(cookieStr);

  $(".Cart_items_empty").css("display", "none");

  // 判斷結帳商品欄狀態
  checkfilter(cookieArr);

  if (cookieStr) {
    // 第一步商品載入
    for (let i = 0; i < cookieArr.length; i++) {
      // 商品載入....
      CheckProduct(cookieArr[i]);
    }
  }
}

/////////////////////////////勾選商品/////////////////////////////////

let Seafood_check = $("input[name='Seafood_check[]']");
let Tool_check = $("input[name='Tool_check[]']");
let Fishbox_check = $("input[name='Fishbox_check[]']");

let Seafood_checkAll = $("#Seafood_CheckAll");
let Tool_checkAll = $("#Tool_CheckAll");
let Fishbox_checkAll = $("#Fishbox_checkAll");

// 總金額初始值
let total_price = 0;

// 勾選商品function
function ProductChecked(check, checkAll) {
  check.each(function () {
    let isCheck = $(this).prop("checked");

    let ProductPrice = parseInt(
      $(this)
        .parent()
        .next()
        .children(".Items_list_detail_tool")
        .children(".Items_list_price")
        .children("p")
        .text()
    );

    if (isCheck) {
      total_price += ProductPrice;
    }
  });

  // 取消/加入勾選
  check.change(function () {
    let isCheck = $(this).prop("checked");

    let ProductPrice = parseInt(
      $(this)
        .parent()
        .next()
        .children(".Items_list_detail_tool")
        .children(".Items_list_price")
        .children("p")
        .text()
    );

    if (!isCheck) {
      total_price -= ProductPrice;

      CHECKTOTAL.text(total_price);
      GETPOINT.text(PointCalc(total_price));
      FINALTOTAL.text(total_price);
    } else {
      total_price += ProductPrice;

      CHECKTOTAL.text(total_price);
      GETPOINT.text(PointCalc(total_price));
      FINALTOTAL.text(total_price);
    }

    // 生鮮食材判斷全選
    if (
      $("input:checked[name='Seafood_check[]']").length ==
      $("input[name='Seafood_check[]']").length
    ) {
      Seafood_checkAll.prop("checked", true);
    } else {
      Seafood_checkAll.prop("checked", false);
    }

    // 客製鮮魚箱判斷全選
    if (
      $("input:checked[name='Fishbox_check[]']").length ==
      $("input[name='Fishbox_check[]']").length
    ) {
      Fishbox_checkAll.prop("checked", true);
    } else {
      Fishbox_checkAll.prop("checked", false);
    }

    // 釣具判斷全選
    if (
      $("input:checked[name='Tool_check[]']").length ==
      $("input[name='Tool_check[]']").length
    ) {
      Tool_checkAll.prop("checked", true);
    } else {
      Tool_checkAll.prop("checked", false);
    }
  });

  checkAll.change(function () {
    let isChecked = $(this).prop("checked");

    if (isChecked) {
      check.each(function () {
        let ProductPrice = parseInt(
          $(this)
            .parent()
            .next()
            .children(".Items_list_detail_tool")
            .children(".Items_list_price")
            .children("p")
            .text()
        );

        $(this).prop("checked", true);

        total_price += ProductPrice;

        CHECKTOTAL.text(total_price);
        GETPOINT.text(PointCalc(total_price));
        FINALTOTAL.text(total_price);
      });
    } else {
      check.each(function () {
        let ProductPrice = parseInt(
          $(this)
            .parent()
            .next()
            .children(".Items_list_detail_tool")
            .children(".Items_list_price")
            .children("p")
            .text()
        );

        $(this).prop("checked", false);

        total_price -= ProductPrice;

        CHECKTOTAL.text(total_price);
        GETPOINT.text(PointCalc(total_price));
        FINALTOTAL.text(total_price);
      });
    }
  });
}

// 輸出商品功能
ProductChecked(Seafood_check, Seafood_checkAll);
ProductChecked(Tool_check, Tool_checkAll);
ProductChecked(Fishbox_check, Fishbox_checkAll);

// 取勾選商品金額
CHECKTOTAL.text(total_price);
GETPOINT.text(PointCalc(total_price));
FINALTOTAL.text(total_price);

////////////////////////////商品增刪加減//////////////////////////

// 刪除結帳項目
$(".Items_warps").on("click", ".list_delete", function () {
  // 節點刪除
  let checkProuduct = $(this).parent().parent().parent().parent();
  let checkProuductID = parseInt(checkProuduct.attr("Product-ID"));

  let isfood = checkProuduct.attr("food");

  let isfishbox = checkProuduct.attr("fishbox");

  checkProuduct.remove(); //視覺刪除
  alert("商品已刪除");

  let cookieStr = $.cookie("Cart");
  let cookieArr = JSON.parse(cookieStr);

  for (let i = 0; i < cookieArr.length; i++) {
    function deleteCheck(arr) {
      let sum = parseInt($(".navbar_shoplist_count").text()); //抓結帳頁現在數量

      let sum_RWD = parseInt($(".shoplist_count_RWD").text()); //抓結帳頁RWD現在數量

      let oldtotal_price = parseInt(CHECKTOTAL.text());

      let nowsum = sum - parseInt(arr[i].count); //結帳頁現在數量減去刪除數量
      $(".navbar_shoplist_count").text(nowsum); //刪除後數量

      let nowsumRWD = sum_RWD - parseInt(arr[i].count); //RWD結帳頁現在數量減去刪除數量
      $(".navbar_shoplist_count").text(nowsumRWD); //RWD刪除後數量

      let delete_price =
        parseInt(arr[i].count) * parseInt(arr[i].Product_Price);

      let newtototal_price = oldtotal_price - delete_price;

      CHECKTOTAL.text(newtototal_price); //刪除後總金額

      //優惠點數
      GETPOINT.text(PointCalc(newtototal_price));

      // 合計金額
      FINALTOTAL.text(newtototal_price);

      arr.splice(i, 1); //刪除

      if (nowsum <= 0 || nowsumRWD <= 0) {
        //刪除後數量小於0，計數器消失
        $(".navbar_shoplist_count").css("display", "none");
        $(".shoplist_count_RWD").css("display", "none");

        $(".cart_checkout_btn")
          .attr("disabled", true)
          .css("background-color", "var(--grey)");
      } else {
        $(".navbar_shoplist_count").text(nowsum);
        $(".shoplist_count_RWD").text(nowsumRWD);
      }
    }

    // 判斷為海鮮
    if (isfood == "true") {
      if (checkProuductID == cookieArr[i].pid && cookieArr[i].food) {
        deleteCheck(cookieArr);
      }

      //判斷為釣具
    } else if (isfood == "false") {
      if (checkProuductID == cookieArr[i].pid && cookieArr[i].food == false) {
        deleteCheck(cookieArr);
      }

      //判斷為魚箱
    } else if (isfishbox == "true") {
      if (checkProuductID == cookieArr[i].pid && cookieArr[i].fishbox) {
        deleteCheck(cookieArr);
      }
    }
  }

  //判斷數組為空
  if (cookieArr.length == 0) {
    $.removeCookie("Cart");

    $(".Cart_items_empty").css("display", "flex"); //顯示目前沒有商品提示

    // $('.Cart_list_total').css('display','none')
    // $('.checkout_btn').attr('disabled', true).css('background-color','var(--grey)')
  } else {
    $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });
  }

  checkfilter(cookieArr);
});

// 選擇釣具型號
$(".Items_warps").on(
  "change",
  'select[name="checkItems_Alltype"]',
  function () {
    //當前所在的ID
    let checkProuduct = $(this).parent().parent().parent();
    let checkProuductID = parseInt(checkProuduct.attr("Product-ID"));

    // 型號ID
    let tid = checkProuduct.attr("Selected-ID");

    //選擇型號ID
    let selectedID = $(this).children("option:selected").val();

    let cookieStr = $.cookie("Cart");
    let cookieArr = JSON.parse(cookieStr);

    //  找尋相同型號、合併在一起
    let same = false;

    for (let i = 0; i < cookieArr.length; i++) {
      // 若相同id、相同型號
      if (
        selectedID == cookieArr[i].Selected_type &&
        cookieArr[i].pid == checkProuductID
      ) {
        same = true;

        let SameItemCount = parseInt(
          $(this)
            .parent()
            .next()
            .children(".Items_list_count")
            .children(".count_warp")
            .children(".Counter")
            .children(".countNum")
            .text()
        );

        // 合併數量
        cookieArr[i].count += SameItemCount;
      }
    }

    // 當有相同
    if (same) {
      for (let i = 0; i < cookieArr.length; i++) {
        if (
          cookieArr[i].pid == checkProuductID &&
          cookieArr[i].Selected_type == tid
        ) {
          // 刪除此商品
          cookieArr.splice(i, 1);

          // 重新導入新合併商品
          let Tool_LIST = $(".tool_items_warp");

          Tool_LIST.empty();

          for (let j = 0; j < cookieArr.length; j++) {
            if (!cookieArr[j].food && !cookieArr[j].fishbox) {
              CheckProduct(cookieArr[j]);
            }
          }
        }
      }
    } else {
      for (let i = 0; i < cookieArr.length; i++) {
        if (
          cookieArr[i].pid == checkProuductID &&
          cookieArr[i].Selected_type == tid
        ) {
          cookieArr[i].Selected_type = selectedID;

          checkProuduct.attr("Selected-ID", selectedID);

          break;
        }
      }
    }

    $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });
  }
);

//計算器
//加＋＋
$(".Items_warps").on("click", ".countBtn_plus ", function () {
  //當前所在的ID
  let checkProuduct = $(this)
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent();
  let checkProuductID = parseInt(checkProuduct.attr("Product-ID"));

  let isfood = checkProuduct.attr("food");

  let isfishbox = checkProuduct.attr("fishbox");

  let cookieStr = $.cookie("Cart");
  let cookieArr = JSON.parse(cookieStr);

  for (let i = 0; i < cookieArr.length; i++) {
    // 判斷為海鮮
    if (isfood == "true") {
      if (checkProuductID == cookieArr[i].pid && cookieArr[i].food) {
        let oldtotal_price = parseInt(CHECKTOTAL.text()); //未變化前總金額

        let old_price =
          parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price); ////未變化前商品金額

        let raw_price = oldtotal_price - old_price; // 除了變化的商品金額以外的總金額

        let Item_over =
          parseInt(cookieArr[i].count) >= parseInt(cookieArr[i].Product_Left);
        //判斷商品是否超過庫存

        if (Item_over) {
          alert("數量超過庫存");
          $(this)
            .css("border", "solid 1px rgba(0, 0, 0, 0.1)")
            .css("color", "rgba(0, 0, 0, 0.1);");
          break;
        } else {
          cookieArr[i].count++; //計算器數量++

          let sum = parseInt($(".navbar_shoplist_count").text()); //抓navbar現在數量

          let sum_RWD = parseInt($(".shoplist_count_RWD").text()); //抓navbar RWD現在數量

          sum++; //navbar數量＋＋

          sum_RWD++; //navbarRWD數量＋＋

          $(this).prev().text(cookieArr[i].count); //更新計算器數量

          $(".navbar_shoplist_count").text(sum); //更新navbar數量
          $(".shoplist_count_RWD").text(sum_RWD++); //更新navbar數量

          let newprice = cookieArr[i].Product_Price * cookieArr[i].count; //新商品金額

          let newtototal_price = raw_price + newprice; //新商品總金額

          $(this)
            .parent()
            .parent()
            .parent()
            .next()
            .children("p")
            .text(newprice);

          CHECKTOTAL.text(newtototal_price);

          //優惠點數
          GETPOINT.text(PointCalc(newtototal_price));

          FINALTOTAL.text(newtototal_price);

          $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });
        }

        break;
      }

      //判斷為釣具
    } else if (isfood == "false") {
      if (checkProuductID == cookieArr[i].pid && cookieArr[i].food == false) {
        let oldtotal_price = parseInt(CHECKTOTAL.text()); //未變化前總金額

        let old_price =
          parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price); ////未變化前商品金額

        let raw_price = oldtotal_price - old_price; // 除了變化的商品金額以外的總金額

        let Item_over =
          parseInt(cookieArr[i].count) >= parseInt(cookieArr[i].Product_Left);
        //判斷商品是否超過庫存

        if (Item_over) {
          alert("數量超過庫存");
          $(this)
            .css("border", "solid 1px rgba(0, 0, 0, 0.1)")
            .css("color", "rgba(0, 0, 0, 0.1);");
          break;
        } else {
          cookieArr[i].count++; //計算器數量++

          let sum = parseInt($(".navbar_shoplist_count").text()); //抓navbar現在數量

          let sum_RWD = parseInt($(".shoplist_count_RWD").text()); //抓navbar RWD現在數量

          sum++; //navbar數量＋＋

          sum_RWD++; //navbarRWD數量＋＋

          $(this).prev().text(cookieArr[i].count); //更新計算器數量

          $(".navbar_shoplist_count").text(sum); //更新navbar數量
          $(".shoplist_count_RWD").text(sum_RWD++); //更新navbar數量

          let newprice = cookieArr[i].Product_Price * cookieArr[i].count; //新商品金額

          let newtototal_price = raw_price + newprice; //新商品總金額

          $(this)
            .parent()
            .parent()
            .parent()
            .next()
            .children("p")
            .text(newprice);

          CHECKTOTAL.text(newtototal_price);

          //優惠點數
          GETPOINT.text(PointCalc(newtototal_price));

          FINALTOTAL.text(newtototal_price);

          $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });
        }

        break;
      }

      //判斷為魚箱
    } else if (isfishbox == "true") {
      if (checkProuductID == cookieArr[i].pid && cookieArr[i].fishbox) {
        console.log();
        let oldtotal_price = parseInt(CHECKTOTAL.text()); //未變化前總金額

        let old_price =
          parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price); ////未變化前商品金額

        let raw_price = oldtotal_price - old_price; // 除了變化的商品金額以外的總金額

        let Item_over =
          parseInt(cookieArr[i].count) >= parseInt(cookieArr[i].Product_Left);
        //判斷商品是否超過庫存

        if (Item_over) {
          alert("數量超過庫存");
          $(this)
            .css("border", "solid 1px rgba(0, 0, 0, 0.1)")
            .css("color", "rgba(0, 0, 0, 0.1);");
          break;
        } else {
          cookieArr[i].count++; //計算器數量++

          let sum = parseInt($(".navbar_shoplist_count").text()); //抓navbar現在數量

          let sum_RWD = parseInt($(".shoplist_count_RWD").text()); //抓navbar RWD現在數量

          sum++; //navbar數量＋＋

          sum_RWD++; //navbarRWD數量＋＋

          $(this).prev().text(cookieArr[i].count); //更新計算器數量

          $(".navbar_shoplist_count").text(sum); //更新navbar數量
          $(".shoplist_count_RWD").text(sum_RWD++); //更新navbar數量

          let newprice = cookieArr[i].Product_Price * cookieArr[i].count; //新商品金額

          let newtototal_price = raw_price + newprice; //新商品總金額

          $(this)
            .parent()
            .parent()
            .parent()
            .next()
            .children("p")
            .text(newprice);

          CHECKTOTAL.text(newtototal_price);

          //優惠點數
          GETPOINT.text(PointCalc(newtototal_price));

          FINALTOTAL.text(newtototal_price);

          $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });
        }

        break;
      }
    }
  }
});

//減--
$(".Items_warps").on("click", ".countBtn_minus ", function () {
  //當前所在的ID
  let checkProuduct = $(this)
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent();
  let checkProuductID = parseInt(checkProuduct.attr("Product-ID"));

  let isfood = checkProuduct.attr("food");

  let isfishbox = checkProuduct.attr("fishbox");

  let cookieStr = $.cookie("Cart");
  let cookieArr = JSON.parse(cookieStr);

  for (let i = 0; i < cookieArr.length; i++) {
    if (isfood == "true") {
      if (checkProuductID == cookieArr[i].pid && cookieArr[i].food) {
        let oldtotal_price = parseInt(CHECKTOTAL.text()); //未變化前總金額

        let old_price =
          parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price); ////未變化前商品金額

        let raw_price = oldtotal_price - old_price; // 除了變化的商品金額以外的總金額

        cookieArr[i].count--;

        let sum = parseInt($(".navbar_shoplist_count").text());
        sum--;

        let sum_RWD = parseInt($(".shoplist_count_RWD").text());
        sum_RWD--;

        $(this).next().text(cookieArr[i].count); //現在商品數量

        $(".navbar_shoplist_count").text(sum);
        $(".shoplist_count_RWD").text(sum_RWD);

        //計算器數量效果變化
        let still_left =
          parseInt(cookieArr[i].Product_Left) > parseInt(cookieArr[i].count);

        if (still_left) {
          let countBtn_plus = $(this).next().next();
          $(countBtn_plus)
            .css("border", "solid 1px rgba(0, 0, 0, 0.3)")
            .css("color", "rgba(0, 0, 0, 0.3);");
        } else {
          let countBtn_plus = $(this).next().next();
          $(countBtn_plus)
            .css("border", "solid 1px rgba(0, 0, 0, 0.1)")
            .css("color", "rgba(0, 0, 0, 0.1);");
        }

        if (cookieArr[i].count <= 0) {
          checkProuduct.remove();
          alert("已刪除商品");
          let delete_price = oldtotal_price - cookieArr[i].Product_Price;

          $(".Cart_list_total").children("p").text(delete_price);

          cookieArr.splice(i, 1); //刪除指定資料

          // 顯示結帳頁內狀態
          checkfilter(cookieArr);

          if (sum == 0 || sum_RWD == 0) {
            $.removeCookie("Cart");
            $(".Cart_items_empty").css("display", "flex"); //顯示目前沒有商品提示

            $(".cart_checkout_btn")
              .attr("disabled", true)
              .css("background-color", "var(--grey)");

            $(".shoplist_count_RWD").css("display", "none");
            $(".navbar_shoplist_count").css("display", "none");

            break;
          } else {
            $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });
            checkfilter(cookieArr);

            break;
          }
        } else {
          $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });
        }

        let newprice = cookieArr[i].Product_Price * cookieArr[i].count; //新商品金額

        let newtototal_price = raw_price + newprice; //新商品總金額

        $(this).parent().parent().parent().next().children("p").text(newprice);

        CHECKTOTAL.text(newtototal_price);

        //優惠點數
        GETPOINT.text(PointCalc(newtototal_price));

        // 合計金額
        FINALTOTAL.text(newtototal_price);

        break;
      }
    } else if (isfood == "false") {
      if (checkProuductID == cookieArr[i].pid && cookieArr[i].food == false) {
        let oldtotal_price = parseInt(CHECKTOTAL.text()); //未變化前總金額

        let old_price =
          parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price); ////未變化前商品金額

        let raw_price = oldtotal_price - old_price; // 除了變化的商品金額以外的總金額

        cookieArr[i].count--;

        let sum = parseInt($(".navbar_shoplist_count").text());
        sum--;

        let sum_RWD = parseInt($(".shoplist_count_RWD").text());
        sum_RWD--;

        $(this).next().text(cookieArr[i].count); //現在商品數量

        $(".navbar_shoplist_count").text(sum);
        $(".shoplist_count_RWD").text(sum_RWD);

        //計算器數量效果變化
        let still_left =
          parseInt(cookieArr[i].Product_Left) > parseInt(cookieArr[i].count);

        if (still_left) {
          let countBtn_plus = $(this).next().next();
          $(countBtn_plus)
            .css("border", "solid 1px rgba(0, 0, 0, 0.3)")
            .css("color", "rgba(0, 0, 0, 0.3);");
        } else {
          let countBtn_plus = $(this).next().next();
          $(countBtn_plus)
            .css("border", "solid 1px rgba(0, 0, 0, 0.1)")
            .css("color", "rgba(0, 0, 0, 0.1);");
        }

        if (cookieArr[i].count <= 0) {
          checkProuduct.remove();
          alert("已刪除商品");
          let delete_price = oldtotal_price - cookieArr[i].Product_Price;

          $(".Cart_list_total").children("p").text(delete_price);

          cookieArr.splice(i, 1); //刪除指定資料

          // 顯示結帳頁內狀態
          checkfilter(cookieArr);

          if (sum == 0 || sum_RWD == 0) {
            $.removeCookie("Cart");
            $(".Cart_items_empty").css("display", "flex"); //顯示目前沒有商品提示

            $(".cart_checkout_btn")
              .attr("disabled", true)
              .css("background-color", "var(--grey)");

            $(".shoplist_count_RWD").css("display", "none");
            $(".navbar_shoplist_count").css("display", "none");

            break;
          } else {
            $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });

            break;
          }
        } else {
          $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });
        }

        let newprice = cookieArr[i].Product_Price * cookieArr[i].count; //新商品金額

        let newtototal_price = raw_price + newprice; //新商品總金額

        $(this).parent().parent().parent().next().children("p").text(newprice);

        CHECKTOTAL.text(newtototal_price);

        //優惠點數
        GETPOINT.text(PointCalc(newtototal_price));

        // 合計金額
        FINALTOTAL.text(newtototal_price);

        break;
      }
    } else if (isfishbox == "true") {
      if (checkProuductID == cookieArr[i].pid && cookieArr[i].fishbox) {
        let oldtotal_price = parseInt(CHECKTOTAL.text()); //未變化前總金額

        let old_price =
          parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price); ////未變化前商品金額

        let raw_price = oldtotal_price - old_price; // 除了變化的商品金額以外的總金額

        cookieArr[i].count--;

        let sum = parseInt($(".navbar_shoplist_count").text());
        sum--;

        let sum_RWD = parseInt($(".shoplist_count_RWD").text());
        sum_RWD--;

        $(this).next().text(cookieArr[i].count); //現在商品數量

        $(".navbar_shoplist_count").text(sum);
        $(".shoplist_count_RWD").text(sum_RWD);

        //計算器數量效果變化
        let still_left =
          parseInt(cookieArr[i].Product_Left) > parseInt(cookieArr[i].count);

        if (still_left) {
          let countBtn_plus = $(this).next().next();
          $(countBtn_plus)
            .css("border", "solid 1px rgba(0, 0, 0, 0.3)")
            .css("color", "rgba(0, 0, 0, 0.3);");
        } else {
          let countBtn_plus = $(this).next().next();
          $(countBtn_plus)
            .css("border", "solid 1px rgba(0, 0, 0, 0.1)")
            .css("color", "rgba(0, 0, 0, 0.1);");
        }

        if (cookieArr[i].count <= 0) {
          checkProuduct.remove();
          alert("已刪除商品");
          let delete_price = oldtotal_price - cookieArr[i].Product_Price;

          $(".Cart_list_total").children("p").text(delete_price);

          cookieArr.splice(i, 1); //刪除指定資料

          // 顯示結帳頁內狀態
          checkfilter(cookieArr);

          if (sum == 0 || sum_RWD == 0) {
            $.removeCookie("Cart");
            $(".Cart_items_empty").css("display", "flex"); //顯示目前沒有商品提示

            $(".cart_checkout_btn")
              .attr("disabled", true)
              .css("background-color", "var(--grey)");

            $(".shoplist_count_RWD").css("display", "none");
            $(".navbar_shoplist_count").css("display", "none");

            break;
          } else {
            $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });

            break;
          }
        } else {
          $.cookie("Cart", JSON.stringify(cookieArr), { expire: 1 });
        }

        let newprice = cookieArr[i].Product_Price * cookieArr[i].count; //新商品金額

        let newtototal_price = raw_price + newprice; //新商品總金額

        $(this).parent().parent().parent().next().children("p").text(newprice);

        CHECKTOTAL.text(newtototal_price);

        //優惠點數
        GETPOINT.text(PointCalc(newtototal_price));

        // 合計金額
        FINALTOTAL.text(newtototal_price);

        break;
      }
    }
  }
});

//計算器效果
$(".Items_warps").on(
  "mousedown mouseup",
  ".countBtn_plus , .countBtn_minus",
  function () {
    $(this).toggleClass("countBtn_color").css("transition", "0.3s");
  }
);

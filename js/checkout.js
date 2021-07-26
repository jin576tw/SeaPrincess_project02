$(document).ready(function () {

    let cookieStr = $.cookie('Cart');
    let cookieArr = JSON.parse(cookieStr);

    if(cookieStr){
        $total_price = 0

        for(let i = 0 ; i < cookieArr.length ; i++){

            let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price);


            let Cart_list_item = 
            `<div class="checkout_item" Item-ID="${cookieArr[i].pid}" > 
                <div class="checkout_items_intro">
                    <div class="checkout_items_pic">
                        <div class="items_pic_bg">
                            <img src="${cookieArr[i].Item_pic}" alt="">
                        </div>
                        <div class="item_count">${cookieArr[i].count}</div>
                    </div>
                    <h1>${cookieArr[i].Item_title}</h1>
                </div>
                <div class="checkout_items_price">
                    <p>${nowprice}</p>
                </div>
            </div>`;


            $('.checkout_items_list').append(Cart_list_item);
            $total_price += nowprice

        }

        $('.total_sum p:nth-of-type(2)').text($total_price)


        let fee = parseInt($('.total_fee p:nth-of-type(2)').text())


        let now_total_price = parseInt($('.total_sum p:nth-of-type(2)').text())

       let final_checkout_price = now_total_price + fee;

       $('.total_money p:nth-of-type(2)').text(final_checkout_price)

    
    
    
    }
})
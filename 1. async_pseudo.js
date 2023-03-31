users =  [ user1, user2 ]

orders = [ order1, order2, order3, order4, order5, order6 ]

function 對每一個user進行處理 (user) {
    取得使用者資料(user)

    function 對每個user與order進行處理 (order){
        料理訂單(order, user)
        等待料理完成(order.cooking_time)
    }(order of orders)

} (user of users)

console.log("所有使用者料理完成")
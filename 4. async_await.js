const { users, orders }  = require('../data')

// async await是ES7提供來解決promise閱讀起來還是並非按照從上而下的順序，而包裝promise後設計出來的功能
// async await可配合promise使用，但必須注意不能混用到.then
users.forEach(async (user)=>{
    //確認每個user即將點餐
    await new Promise((resolve, _reject)=>{
        orders.forEach(async (order)=>{
            //對每個user建立要下訂的餐點
            if (order.category === user.favorite) {
                //開始餐點下單
                await setTimeout(()=>{
                    //確定餐點完成
                }, order.cooking_time * 100)
            }
        })
    })

    //確認所有users都下訂完成
})
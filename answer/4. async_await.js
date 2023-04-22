const { users, orders } = require('../data')
let user_index = 0
// async await是ES7提供來解決promise閱讀起來還是並非按照從上而下的順序，而包裝promise後設計出來的功能
// async await可配合promise使用，但必須注意不能混用到.then
users.forEach(async (user) => {
    //確認每個user即將點餐
    console.log("客人" + user.name + "-點餐")
    await new Promise((resolve, _reject) => {
        let done = 0
        orders.forEach(async (order) => {
            //對每個user建立要下訂的餐點
            if (order.category === user.favorite) {
                //開始餐點下單
                console.log("下單-" + order.name + ":開始烹飪")
                await new Promise((resolve, _reject) => {
                    setTimeout(resolve, order.cooking_time * 100)
                })
                console.log(user.name + ":" + order.name + "-料理完成")
                done += 1
                if (done === 3) {
                    resolve()
                }
            }
        })
    })

    user_index++
    //確認所有users都下訂完成
    if (user_index === users.length) {
        console.log("所有料理結束")
        process.exit()
    }
})
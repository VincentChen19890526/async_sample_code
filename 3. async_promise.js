const { users, orders } = require('./data')
let user_complete = 0

// promise是ES6提供來解決callback function造成callback hell的方法，
// 被包覆在promise內的function，會保證在呼叫resolve後才會執行.then裡面的程序，
// 避免callback會一直往下層寫，造成不好閱讀的程式碼
users.forEach((user) => {
    //確認每個user即將點餐
    console.log("幫忙" + user.name + "點餐")
    return new Promise((resolve, _reject) => {
        let done = 0
        orders.forEach((order) => {
            //對每個user建立要下訂的餐點
            if (order.category === user.favorite) {
                //開始餐點下單
                console.log("開始烹飪" + user.name + "的餐點" + order.name)
                new Promise((resolve, _reject) => {
                    setTimeout(resolve, order.cooking_time * 100)
                }).then(() => {
                    //確定餐點完成
                    console.log(user.name + "的" + order.name + "烹飪好了")
                    done += 1
                    if (done === 3) {
                        resolve()
                    }
                })
            }
        })
    }).then(() => {
        user_complete++
        if (user_complete === users.length) {
            console.log("所有客人的料理都完成了")
            process.exit()
        }
    })
})





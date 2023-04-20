const { users, orders }  = require('../data')
let user_index = 0

// promise是ES6提供來解決callback function造成callback hell的方法，
// 被包覆在promise內的function，會保證在呼叫resolve後才會執行.then裡面的程序，
// 避免callback會一直往下層寫，造成不好閱讀的程式碼
function orders_by_user(resolve, user_index) {
    let user = users[user_index]
    //確認每個user即將點餐
    console.log("客人"+user.name+"-點餐")
    return new Promise((resolve, _reject)=>{
        let done = 0
        orders.forEach((order)=>{
            //對每個user建立要下訂的餐點
            if (order.category === user.favorite) {
                //開始餐點下單
                console.log("下單-"+order.name+":開始烹飪")
                new Promise((resolve, _reject)=>{
                    setTimeout(resolve, order.cooking_time * 100)
                }).then(()=>{
                    //確定餐點完成
                    console.log(user.name+":"+order.name+"-料理完成")
                    done += 1
                    if(done === 3) {
                        resolve()
                    }
                })
            }
        })
    }).then(()=>{
        user_index ++
        //確認所有users都下訂完成
        if (user_index === users.length) {
            resolve()
        } else orders_by_user(resolve, user_index)
    })
}

new Promise((resolve, _reject)=>{
    return orders_by_user(resolve, user_index)
}).then(()=>{
    console.log("所有料理結束")
    process.exit()
})
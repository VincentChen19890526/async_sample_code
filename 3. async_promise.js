const { users, orders }  = require('../data')

// promise是ES6提供來解決callback function造成callback hell的方法，
// 被包覆在promise內的function，會保證在呼叫resolve後才會執行.then裡面的程序，
// 避免callback會一直往下層寫，造成不好閱讀的程式碼
function orders_by_user(resolve, user_index) {
    //確認每個user即將點餐
    return new Promise((resolve, _reject)=>{
        orders.forEach((order)=>{
            //對每個user建立要下訂的餐點
            if (order.category === user.favorite) {
                //開始餐點下單
                new Promise((resolve, _reject)=>{

                }).then(()=>{
                    //確定餐點完成
                })
            }
        })
    }).then(()=>{
        //確認所有users都下訂完成
    })
}

new Promise((resolve, _reject)=>{
    return orders_by_user(resolve, user_index)
}).then(()=>{
    console.log("所有料理結束")
    process.exit()
})
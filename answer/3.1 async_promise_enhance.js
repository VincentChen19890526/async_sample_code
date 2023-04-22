const { users, orders } = require('./data')
// promise是ES6提供來解決callback function造成callback hell的方法，
// promise all裡面放置一個array，可包含多個promise，
// 保證所有promise程序都執行完畢後，才會執行promise.all後面的.then的程序
Promise.all(
    users.map((user) => {
        //確認每個user即將點餐
        console.log("客人" + user.name + "-開始點餐")
        return new Promise((resolve, _reject) => {
            Promise.all(
                orders.map((order) => {
                    //對每個user建立要下訂的餐點
                    if (order.category === user.favorite) {
                        //開始餐點下單
                        console.log("下單" + order.name + ":開始料理")
                        return new Promise((resolve, _reject) => {
                            //餐點完成
                            setTimeout(resolve, order.cooking_time * 100)
                        }).then(() => {
                            console.log(user.name + ":" + order.name + "-料理完成")
                        })
                    }
                })
            ).then(() => {
                console.log(user.name + "的所有料理完成")
                resolve()
            }).catch(error => {
                console.log(error)
            })
        })
    })
).then(() => {
    //等待所有使用者的所有料理結束
    console.log("所有的使用者的所有料理都完成")
    process.exit()
}).catch(error => {
    console.log(error)
})
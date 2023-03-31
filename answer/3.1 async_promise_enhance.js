const { users, orders }  = require('../data')
// promise是ES6提供來解決callback function造成callback hell的方法，
// promise all裡面放置一個array，可包含多個promise，
// 保證所有promise程序都執行完畢後，才會執行promise.all後面的.then的程序
Promise.all(
    users.map((user)=>{
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
        })
    })
).then(()=>{
    //等待所有使用者的所有料理結束
    console.log("所有使用者的所有料理結束")
    process.exit()
}).catch( error => {
    console.log(error)
})
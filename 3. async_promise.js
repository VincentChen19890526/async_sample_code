const { users, orders }  = require('./data')
let user_index = 0
function orders_by_user(resolve, user_index) {
    let user = users[user_index]
    console.log("客人"+user.name+"-點餐")
    return new Promise((resolve, _reject)=>{
        let done = 0
        orders.forEach((order)=>{
            if (order.category === user.favorite) {
                console.log("下單-"+order.name+":開始烹飪")
                new Promise((resolve, _reject)=>{
                    setTimeout(resolve, order.cooking_time * 100)
                }).then(()=>{
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
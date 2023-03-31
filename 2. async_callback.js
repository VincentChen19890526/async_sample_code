const { users, orders }  = require('./data')

users.forEach((user)=>{
    console.log("客人"+user.name+"-點餐")
    orders.forEach((order)=>{
        if (order.category === user.favorite) {
            console.log("下單-"+order.name+":開始烹飪")
            setTimeout(()=>{
                console.log(user.name+":"+order.name+"-料理完成")
            }, order.cooking_time * 100)
        }
    })
})
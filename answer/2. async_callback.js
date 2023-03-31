const { users, orders }  = require('../data')

// callback function是代替設定等待時間的function，server完成後會給予一個ack，告知client完成
users.forEach((user)=>{
    //確認每個user即將點餐
    console.log("客人"+user.name+"-點餐")
    orders.forEach((order)=>{
        //對每個user建立要下訂的餐點
        if (order.category === user.favorite) {
            //開始餐點下單
            console.log("下單-"+order.name+":開始烹飪")
            setTimeout(()=>{
                //確定餐點完成
                console.log(user.name+":"+order.name+"-料理完成")
            }, order.cooking_time * 100)
        }
    })
})
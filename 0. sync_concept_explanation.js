staff = ["staff1"]
services =  ["接收訂單(外場)", "料理出菜(內場)"]
clients = ["client1", "client2"]

function 對每一個client進行處理 (client) {
    function 對client循序給予services處理 (service){
        if (service === "接收訂單(外場)") {
            點餐(staff, client);
        } else if (service === "料理出菜(內場)") {
            出菜(staff, client);
        }
    }(service of services)
} (client of clients)

console.log("所有客人的餐點服務全部完成")
staffs = ["staff1", "staff2"]
staffs[0].services = ["接收訂單"]
staffs[1].services = ["料理出菜"]
clients = ["client1", "client2"]


function 每一個staff的工作程序(staff) {
    new 產線(()=> {
        do {
            function 對每一個client進行處理 (client) {
                service = 等待有client需要服務(client, staff.services) // 這裡要等待什麼??
                function 對client提供services處理 (service){
                    if(service === "點餐") {
                        點餐(staff, client);
                    } else if(service === "出菜") {
                        出菜(staff, client);
                    }
                }(service)
            } (client of clients)
        } while("還有客人需要餐點服務")
    })
} (staff of staffs)

console.log("所有客人的餐點服務全部完成")
const users =  [
    {
      "name": "User1",
      "email": "user1@example.com",
      "password": "12345678",
      "favorite": "美式料理"
    },
    {
      "name": "User2",
      "email": "user2@example.com",
      "password": "12345678",
      "favorite": "日本料理"
    }
  ]

const orders = [
      {
        "id": 1,
        "name": "豬排定食",
        "category": "日本料理",
        "cooking_time": 10
      },
      {
        "id": 2,
        "name": "梅子鰻蒲燒定食",
        "category": "日本料理",
        "cooking_time": 20
      },
      {
        "id": 3,
        "name": "天婦羅定食",
        "category": "日本料理",
        "cooking_time": 15
      },
      {
        "id": 4,
        "name": "菲力牛排",
        "category": "美式料理",
        "cooking_time": 30
      },
      {
        "id": 5,
        "name": "沙朗牛排",
        "category": "美式料理",
        "cooking_time": 25
      },
      {
        "id": 6,
        "name": "肋眼牛排",
        "category": "美式料理",
        "cooking_time": 20
      }
]

module.exports = { users, orders };
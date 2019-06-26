var Mock = require('mockjs')
var express = require('express')
var router = express.Router()

router.use('/fileshow/filesid', function(req, res) {
  console.log(req.body)
  var data = Mock.mock({
    message: 'https://images4.c-ctrip.com/target/zc0g0i0000009fvbaA666.png'
  })
  return res.json(data)
})

router.use('/user/usertrend', function(req, res) {
  console.log(req.body)
  //调用mock方法模拟数据
  var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'items|1-10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: '这是测试的标题'
      }
    ]
  })
  return res.json(data)
})

module.exports = router

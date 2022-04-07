// 1. 引入express

const express = require('express')


// 2/ 创建应用对象

const app = express()


// 3. 创建路由规则
// request: 请求报文的封装
// response: 响应报文的封装

app.get('/home', (request, response) => {

    // BUG something went wrong

    response.sendFile('/../ajax/08_ajax_same_origin_policy.html')
})


// 4. 监听端口

app.listen(6666, () => {
    console.log(__dirname + '/./../ajax/08_ajax_same_origin_policy.html');
    console.log('已在6666端口开启服务，监听中...');
})
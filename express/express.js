// 1. 引入express

const express = require('express')


// 2/ 创建应用对象

const app = express()


// 3. 创建路由规则
// request: 请求报文的封装
// response: 响应报文的封装

app.get('/',(request,response)=>{
    response.send('Hi Gubao!')
})


app.get('/server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')

    // 设置响应体
    response.send('Hi Huihui!')
})


app.all('/server',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    
    // 设置特殊的响应头
    response.setHeader('Access-Control-Allow-Headers','*')

    // 设置响应体
    response.send('Hi Yaoyao!')
})


app.all('/json',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    
    // 设置特殊的响应头
    response.setHeader('Access-Control-Allow-Headers','*')

    // 设置响应体
    const data = {
        name:'Gubao',
        age:5
    }
    response.send(JSON.stringify(data))
})



// 延迟响应 2000
app.all('/delay',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    
    // 设置特殊的响应头
    response.setHeader('Access-Control-Allow-Headers','*')

    // 设置响应体
    const data = {
        name:'Gubao',
        age:5
    }

    setTimeout(()=>{
        response.send(JSON.stringify(data))
    },3000)

})


app.all('/axios',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    
    // 设置特殊的响应头
    response.setHeader('Access-Control-Allow-Headers','*')

    // 设置响应体
    const data = {
        name:'Gubao',
        age:5
    }
    response.send(JSON.stringify(data))
})

app.all('/fetch',(request,response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    
    // 设置特殊的响应头
    response.setHeader('Access-Control-Allow-Headers','*')

    // 设置响应体
    const data = {
        type:'fetch',
        name:'Gubao',
        age:5
    }
    response.send(JSON.stringify(data))
})




// 4. 监听端口

app.listen(5555,()=>{
    console.log('已在5555端口开启服务，监听中...');
})
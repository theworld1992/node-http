var net = require('net')
var fs = require('fs')
var path = require('path')
var baseDir = '地址'
var port = 80

var server = net.createServer(function(conn) { //TCP连接成功时调用的函数
  conn.on('data', function(data) { //当连接收到数据时，调用的函数，data是收到的数据
    try {
      console.log(data.toString().split('\r\n\r\n')[1])
    } catch (e) {}


    // var request = decodeURIComponent(data.toString()).split('\r\n')
    // var firstLine = request[0].split(' ')
    // console.log(request[0])
    // var requestMethod = firstLine[0]
    // var requestPath = firstLine[1]
    // if (requestMethod === 'GET') {
    //   var finalPath = baseDir + requestPath

    //   // what if http://localhost/post

    //   //如果最终的路径以/结尾，则说明是一个文件夹，则返回文件夹里的index.html文件
    //   if (finalPath[finalPath.length - 1] == '/') {
    //     finalPath += 'index.html'
    //   }
    //   var fileContent

    //   //如果读取文件出错，则直接让文件内容为空
    //   try {
    //     fileContent = fs.readFileSync(finalPath)
    //   } catch (e) {
    //     fileContent = ''
    //   }

    //   conn.write('HTTP/1.1 200 OOOOOOOOOOOOOOK\r\n')
    //   conn.write('Access-Control-Allow-Origin: *\r\n')

    //   conn.write('\r\n')
    //   conn.write(fileContent)
    //   conn.end()
    // }
  })
})

server.listen(port, function() { //监听成功后调用的函数
  console.log('成功在', port, '端口监听')
})
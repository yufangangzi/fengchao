/**
 * Created by Administrator on 2018/2/12.
 */
let http=require('http');
let fs=require('fs');
let url=require('url');
function  read(cb) {
  // readFile是异步的，想要执行完readFile在执行读取，可以用promise 使用callback更方便。执行过程就是readFile执行然后执行cb。
  fs.readFile('./poem.json','utf8',function (err,data) {
    //readFile读取book.json 然后执行一个匿名方法 判断这个json文件是否有错误或者为空，如果有那么执行read的callback的时候就让其为空，否则将其转化为对象输出
    //读取json文件得到的结果是utf8的字符串，在向页面输出的时候要奖结果给callback转化为对象所以用到了JSON.parse，页面读取的时候就放在需要这个方法的页面比如hot热门图书页面
    if(err || data.length == 0){
      cb([])
    }else{
      cb(JSON.parse(data))//将读出来的内容转化为对象
    }
  })
}
http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
//res.setHeader.....return res.end()这一段代码是解决node跨域问题的，想要从8080访问我们监听的3000端口就要实现跨域
  let {pathname,query}=url.parse(req.url,true);//true把query转成对象
  if(pathname === '/home'){
    read(function (poem) {
      console.log(JSON.stringify(poem))
      res.setHeader('Content-Type','application/json;charset=utf8');
      return res.end(JSON.stringify(poem))//一定要加return 要不然执行完这个接口没法执行其它的接口
    })
  };
}).listen(3000)

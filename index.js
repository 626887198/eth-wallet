let koa = require("koa")
let app = new koa()
let router = require("./router/router")
let static = require("koa-static")
let path = require("path")
let views = require("koa-views")
let koaBody = require("koa-body")

//针对于文件上传的时候，可以解析多个字段
app.use(koaBody({multipart:true}))
//注册静态文件的库到中间件
app.use(static(path.join(__dirname, "static")))
//注册模板引擎的库到中间件
app.use(views(path.join(__dirname, "views"), {extension:"ejs", map:{html:"ejs"}}))
app.use(router.routes())

console.log("启动服务，端口：3000");
app.listen(3000)

// import json server
const jsonServer=require('json-server')

// server creation
const server=jsonServer.create()

// router creation
const router=jsonServer.router('db.json')

// create middleware
const middleware=jsonServer.defaults()

// set port for server
const PORT=process.env.PORT||4000

// use middleware in server
server.use(middleware)

// use router in server
server.use(router)

// start server
server.listen(PORT,()=>{
    console.log("Employee server started at port "+PORT);
})
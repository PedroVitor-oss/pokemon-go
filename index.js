let express = require('express')
let app = express();
let port = process.env.PORT||3000

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/login.html')})
app.get('/chat',(req,res)=>{
    res.sendFile('/views/chat.html')
})

app.listen(port,()=>{
    console.log('O SERVIDOR ESTA RODANDO NA PORTA '+port+' ...')
})
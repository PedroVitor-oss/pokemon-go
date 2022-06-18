let express = require('express')
let app = express();
let port = process.env.PORT||3000

app.get('/',(req,res)=>{
    res.send('Pedro Vitor F. dos Santos')
})

app.listen(port,()=>{
    console.log('O SERVIDOR ESTA RODANDO NA PORTA '+port+' ...')
})
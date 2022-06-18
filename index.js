let express = require('express')
let app = express();
let port = process.env.PORT||3000

app.get('/',(req,res)=>{
    res.send('projeto upado com suceço')
})

app.listen(port,()=>{
    console.log('O SERVIDOR ESTA RODANDO NA PORTA '+port+' ...')
})
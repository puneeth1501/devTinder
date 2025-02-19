const express = require('express');
const app = express();
app.use("/test",(req,res) => {
    // console.log(req.headers);
    res.send('Hello World! form pohillaaaaa')
});

app.listen(3000, () => {console.log('listening on')}); // listen on
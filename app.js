const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000
app.get('/',(req,res) => {
    res.status(200);
    res.send("Это сделал Егор...");

});

app.listen(PORT, () => console.log('Приложение стартануло на порте ${PORT}'));
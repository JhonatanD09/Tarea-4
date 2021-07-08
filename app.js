const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static("public"));

let data = {products:[]}

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/Index.html')
});

app.post("/",(req, res) =>{
    data.products.push(req.body.name+"-"+req.body.price) 
})

app.get("/show", (req, res) => {
    res.send(data)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
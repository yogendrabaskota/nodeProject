const express = require("express") 
const app = express();

require("./model/index");

app.set('view engine','ejs')

app.get('/', (req,res) => {
    res.render('home');


})

app.get('/register', (req,res) => {
    res.render('auth/register')
})



app.get('/login', (req,res) => {
    res.render('auth/login')
})


app.use(express.static('public/css'))

const PORT = 3456
app.listen(PORT, ()=> {
    console.log("Server running successfully at port " + PORT);
})
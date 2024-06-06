const express = require("express") 
const app = express();

require("./model/index");

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true})) // to get form data of own frontend of nodejs
// app.use(express.json)  // to get form data from reactjs(external frontend) 


app.get('/', (req,res) => {
    res.render('home'); 
})

app.get('/home', (req,res) => {
    res.render('home')
})
app.get('/register', (req,res) => {
    res.render('auth/register')
})
app.get('/login', (req,res) => {
    res.render('auth/login')
})


app.post('/register',(req,res) => {

//    console.log(req.body)
    const {username,email, password} = req.body


})

app.use(express.static('public/css'))

const PORT = 3456 
app.listen(PORT, ()=> { 
    console.log("Server running successfully at port " + PORT);
}) 
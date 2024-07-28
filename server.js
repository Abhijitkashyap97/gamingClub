const express=require('express')
const app=express()
const {readFile,readFileSync}=require('fs').promises
const path=require('path')
let mysql=require('mysql')
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
let html='', html1='',html2='',html3='',html4='';
const db=mysql.createConnection({
   host:'localhost',
   user:'root',
   database:'gamingclub'
})
db.connect((err)=>{
   if(err){
       throw err;
   }
   else{
       console.log('Connection Established!')
   }})

const readHtmlFiles = async () => {
   html  = await readFile('./public/index.html', 'utf-8');
   html1 = await readFile('./public/About_us.html', 'utf-8');
   html2 = await readFile('./public/tournaments.html', 'utf-8');
   html3 = await readFile('./public/Sponsors.html', 'utf-8');
   html4 = await readFile('./public/events.html', 'utf-8');
  };
  readHtmlFiles();
 app.use(express.static('public'))
 app.get('/',(req,res)=>{
   res.send(html)
 })
 app.get('/about',(req,res)=>{
    res.send(html1)
 })
 app.get('/tournaments',(req,res)=>{
    res.send(html2)
 })
 app.get('/sponsors',(req,res)=>{
    res.send(html3)
 })


 app.post('/query',(req,response)=>{
   const date = new Date();
   console.log(date);
   console.log(req.body)
   db.query(sql,(err,res)=>{
      if(err){
         console.log(err)
      }
      else{
         response.redirect('index.html')
      }
   })
 })
 app.get('/events/:id',(req,res)=>{
   if(id===1){
      res.redirect('./public/avalanche.html')
   }
   if(id===2){
      res.redirect('./public/bgmi.html')
   }
   if(id===3){
      res.redirect('./public/clash_royale.html')
   }
   if(id===4){
      res.redirect('./public/fifa.html')
   }
   if(id===5){
      res.redirect('./public/fall_guys.html')
   }

   
 })

 app.listen(3000)
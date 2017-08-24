
// Mysql Connectivity code
var mysql = require('mysql');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "gXXXXXXXX" ,
  database: 'gk',
  port: '3307' 
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  
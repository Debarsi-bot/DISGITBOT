require('dotenv').config();
const index=require('./index')
const fetch = require("node-fetch");


exports.get_commit=function(url){
index.getData(`${REPO_API}/commits`).then(data=>
    {
            
            message.channel.send(`${data[0].commit.author.name} committed a change ${data[0].commit.message}`)
            message.channel.send(`${data[0].html_url}`)
    }).catch(err=>message.channel.send("Invalid Repo Link"))
}
   







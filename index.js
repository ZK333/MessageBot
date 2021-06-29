  
const Discord = require("discord.js")
const client = new Discord.Client()
var storage = []; 
var sub=""; 
var count = 0; 
var location = 0; 
var i =0; 
var count =0; 
var command1 = "message.(message) has the message bot send said message"
var command2 = "s.(message), or stored.(message) assigns a message at a certain position for the message bot"
var command3 = "st.(number) or stored.(number) has the message bot send the message assigned to said position"; 
var command4=" use see. and the message bot will show you all messages stored to a position and what position they were stored at"; 
var command5 = "use command. or c. to see all these commands again"

function recordedphrase(){
  i=0;
  sub="";  
  while(i<storage.length){
   sub = sub+storage[i]+"("+i+")"+" ,";
   i=i+1; 
  }
  return sub; 
}



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if ((msg.content).slice(0,8) === "message.") {
    msg.reply((msg.content).substring(8));
  }
})


client.on("message", msg => {
  if ((msg.content).slice(0,6) === "store.") {
    msg.reply("Your message has been stored at position "+count);
     storage[count]=(msg.content).substring(6); 
     count=count+1;
  }
})

client.on("message", msg => {
  if ((msg.content).slice(0,2) === "s.") {
    msg.reply("Your message has been stored at position "+count);
     storage[count]=(msg.content).substring(2); 
     count=count+1;
  }
})

client.on("message", msg => {
  if ((msg.content).slice(0,3) === "st."){ 
      location = ((msg.content).indexOf("."))+1; 
      msg.reply(storage[(msg.content).substring(location)]);
  }
})

client.on("message", msg => {
  if ((msg.content).slice(0,7) === "stored."){ 
      location = ((msg.content).indexOf("."))+1; 
      msg.reply(storage[(msg.content).substring(location)]);
  }
})

client.on("message", msg => {
  if ((msg.content) == "see."){ 
      msg.reply(recordedphrase()); 
  }
})

client.on("message", msg => {
  if ((msg.content) === "commands."){ 
      msg.reply(command1);
      msg.reply(command2);
      msg.reply(command3); 
      msg.reply(command4);
      msg.reply(command5);  
  }
})

client.on("message", msg => {
  if ((msg.content) === "c."){ 
      msg.reply(command1);
      msg.reply(command2);
      msg.reply(command3); 
      msg.reply(command4);
      msg.reply(command5);  
  }
})


client.login(process.env.TOKEN); // Token not included for security purposes 

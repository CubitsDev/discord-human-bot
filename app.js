const Discord = require("discord.js");
const client = new Discord.Client();


 
client.login("BOT_TOKEN");

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame('SantosPublicRP')
    

});

client.on("message", (message) => {
  if (message.content.startsWith("!test")) {
    message.channel.send("***Hello and Welcome to SantosPublicRP!*** \n \nFor Starting Clarifications, we are an un whitelisted Official Version of SantosRP! This means that yes we are Apart of the Official SantosRP! \n \nTo Get Started on connecting to the server, find 'SantosPublicRP' Under the SantosRP Category on the Gamemode list! \n \nAlternatively, use ***TBA*** in console to directly connect! \n \nAny Announcements will be posted in the ***Announcements*** Channel on Discord and also on our site at http://santospublicrp.com \n \nIn order to talk within our Discord, you will need to do !civ to verify yourself! Do this in General or Offtopic! \n \nEnjoy and Have Fun! \n***Sanots Public Management***");
  }
});


client.on("message", m => {
 if(m.isPrivate) return;
 let role = m.guild.roles.find("name", "Civilian");
 if (m.member.roles.has(role)) return;
  if (m.content.startsWith("!civ")) {


let member = m.member;
member.addRole(role).catch(console.error);
    m.channel.send("@" + member + " Has become a Civilian!");
m.guild.channels.find("name", "bot-logs").send("@" + member + " Has become a Civilian!");
  }
});


client.on("message", msg => {
 if(msg.isPrivate) return;
let myRole = msg.guild.roles.find("name", "Civilian");
	if(msg.member.roles.has(myRole.id)) {
	console.log("Yes");
} else {
  if (msg !== "!civ") {
	msg.delete();
}
}

});

client.on("message", msg => {
 if(msg.author.bot) return;

});
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


 const devs = ["520629080333352976"]
const adminprefix = "Z";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
     
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();   
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Toxic Codes
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  }
  if (message.content.startsWith(adminprefix + 'na')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**✅   ${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'prefix')) {//Toxic Codes
  client.user.setPrefix(argresult).then
      message.channel.send(`**✅   ${argresult}** `)//Toxic Codes
} else
if (message.content.startsWith(adminprefix + 'av')) {//Toxic Codes
  client.user.setAvatar(argresult);
    message.channel.send(`**✅   ${argresult}** `);//Toxic Codes
}
});

client.on("message", message => {

            if (message.content.startsWith("fjgklfjd")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.login(process.env.BOT_TOKEN);

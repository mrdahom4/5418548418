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

const myDiscriminator = ["0000", "0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009", "0069"];//حطا التاق هناconst bot = new(require("discord.js")).Client({fetchAllMembers: true});
//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes//Toxic Codes
const password = "01067054858";//بسورد حسابك عليشن الكود يقدر يغير الاسم
const token = "NTI1NDM0NTQ4OTM5NjUzMTUx.DwgOvQ._KZFdGVu58UPpECQ8tNpoWMEgwk"; // توكن حسابك
//Toxic Codes
bot.login(token);//Toxic Codes
//Toxic Codes
function changeDiscriminator() {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {//Toxic Codes
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    console.log(Date.now(), "Username Loaded: " + us);
    bot.user.setUsername(us, password).then((u) => {
      console.log(Date.now(), "Username: " + u.username, "Discriminator: " + u.discriminator);
      setTimeout(changeDiscriminator, 8640 * 10000);
    }).catch((err) => {//Toxic Codes
      console.log(Date.now(), "An error occurred. Trying again in sixty (60) seconds.");
      setTimeout(changeDiscriminator, 60 * 1e3);
    });//Toxic Codes
  } catch(e) {//Toxic Codes
    console.log(Date.now(), `[${e}] Trying again in 30 seconds.`);
    setTimeout(changeDiscriminator, 30 * 1e3);
  }//Toxic Codes
}//Toxic Codes
 
bot.once("ready", () => {//Toxic Codes
  console.log(Date.now(), "Started with " + bot.users.size + " users.");
  changeDiscriminator();//Toxic Codes
  if(myDiscriminator.includes(bot.user.discriminator)) {
      console.log(`I successfully got the discrim ${bot.user.discriminator}!`)
      process.exit();//Toxic Codes
  }//Toxic Codes
});//Toxic Codes

client.login(process.env.BOT_TOKEN);

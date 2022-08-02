const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

//message no longer works so use messageCreate
client.on('messageCreate', msg => {
    console.log(msg);
    if(msg.content === "ping"){
        msg.reply("pong!!!");
    }
})

client.login("ODQ3MDU5NjE0OTI2ODk3MTc0.G2w9IW.ANEULNGZSZ_Gd3VBhHY_tNmYuCee6OJhjp617c");

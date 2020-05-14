const Discord = require('discord.js');
const path = require('path');

const client = new Discord.Client();

const cfg = require('./cfg.json');

// Command Handler

const { CommandHandler } = require('djs-commands');

const CH = new CommandHandler({
    folder: __dirname + "/komutlar/",
    prefix: ['!']
});

//////////////////

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("online");
  client.user.setPresence({game: { name: 'TheIsland16', type: "WATCHING" }});
});

client.on("message", (message) => {
    if(message.channel.type === 'dm') return;
    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(client, message, args);
    }catch(e){
        console.log(e);
    }
})

client.login(cfg.token);
const Discord = require('discord.js');

module.exports = class test {
    constructor(){
        this.name = 'server',
        this.alias = ['sunucu'],
        this.usage = '!server'
    }

    run(client, message){
        const Gamedig = require('gamedig');
    Gamedig.query({
    type: 'arkse',
    host: '85.190.155.90',
    port: '27015'
    }).then((state) => {
        let players = state.players.map(player => player.name)
    let randomHexColor = ((1 << 24) * Math.random() | 0).toString(16);
    const embed = new Discord.MessageEmbed()
    .setTitle(state.name)
    .addFields(
        { name: 'Players', value: state.raw.numplayers + " / " + state.maxplayers },
        { name: 'Map', value: state.map },
        { name: 'Server Ping', value: state.ping + "ms" },
        { name: 'Join to Server', value: state.connect }
    )
    .setColor(`#${randomHexColor}`);
    message.channel.send(embed);
    const embed2 = new Discord.MessageEmbed()
    .setColor(`#${randomHexColor}`)
    .setDescription(players.join("\n\n"));
    message.channel.send(embed2);
    console.log(state)
    }).catch((error) => {
    message.channel.send("Server is offline.");
    });
    }
}
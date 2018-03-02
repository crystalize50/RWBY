const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Ping') {
        message.channel.send('PONG!');
    }
       (message.content === 'Hi') {
    	message.channel.send('Bye!');
  	}
});

 client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'Bing') {
    	message.send('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.send('BONG!');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

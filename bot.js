const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Ping') {
        message.channel.send('PONG!');
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

client.on('message', message => {
    if (message.content === 'Hi, Violet') {
    	message.reply('Hello!');
    }
});

client.on('message', message => {
    if (message.content === 'hi, Violet') {
    	message.reply('Hello!');
    }
});

client.on('message', message => {
    if (message.content === 'Hi Violet') {
    	message.reply('Hello!');
    }
});

client.on('message', message => {
    if (message.content === 'hi Violet') {
    	message.reply('Hello!');
    }
});

client.on('message', message => {
    if (message.content === 'Hello, Violet') {
    	message.reply('Hey!');
    }
});

client.on('message', message => {
    if (message.content === 'hello, Violet') {
    	message.reply('Hey!');
    }
});

client.on('message', message => {
    if (message.content === 'Hello Violet') {
    	message.reply('Hey!');
    }
});

client.on('message', message => {
    if (message.content === 'hello Violet') {
    	message.reply('Hey!');
    }
});

client.on('message', message => {
    if (message.content === 'Hey, Violet') {
    	message.reply("What's up!");
    }
});

client.on('message', message => {
    if (message.content === 'hey, Violet') {
    	message.reply("What's up!");
    }
});

client.on('message', message => {
    if (message.content === 'Hey Violet') {
    	message.reply("What's up!");
    }
});

client.on('message', message => {
    if (message.content === 'hey Violet') {
    	message.reply("What's up!");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

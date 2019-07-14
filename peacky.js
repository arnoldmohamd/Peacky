const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTk5NzU2ODAyNDU5OTU5MzE2.XSp1Xw.E5lw_J3KOLgdCmYZEO4eAmKI9JM);

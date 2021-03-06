// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Make a slash command that says hi
client.on('message', message => {
    if (message.content === ',hello') {
        message.channel.send('Hello!');
    }
});

// make a meme command useing the reddit api


// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
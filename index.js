const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [Intents.FLAGS.GUILDS] });




client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Fuck u no ping for u');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

client.once('ready', () => {
	console.log('Ready!');
});


client.login(token);

const Discord = require('discord.js');
const client = new Discord.Client();
const CommandHandler = require('./CommandHandler');

client.on('message',CommandHandler)

//Not leaving my application login here
//client.login('');     
//client.login(process.env.token);

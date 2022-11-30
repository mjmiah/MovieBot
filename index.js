const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');

const prefix = '%';

const fetch = require('node-fetch');
const apikey = ''; // insert your api key;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });



client.on("ready", () => {
    console.log('bot is online');
    

})

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //commands


    if (command === 'help') {
        message.channel.send("Use %movie to search for a movie and %show to search for a show :smiley:");
    }

    if (command === 'movie' || command === 'show') {
        let getMovie = async () => {

            let response = await fetch(`https://www.omdbapi.com/?t=${argument}&apikey=${apikey}`); //fetch movie data using api call
            return response.json();
        } 
        let movieValue = await getMovie();
        const movieEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            try {movieEmbed.setTitle(`${movieValue.Title}`)}
            catch {}
            try {movieEmbed.setDescription(`${movieValue.Plot}`)}
            catch {}
            try {movieEmbed.setThumbnail(`${movieValue.Poster}`)}
            catch {}
            try {movieEmbed.addFields({ name: 'Released', value: `${movieValue.Released}` })}
            catch {}
            try {movieEmbed.addFields({ name: 'Genre', value: `${movieValue.Genre}` })}
            catch {}
            try {movieEmbed.addFields({ name: 'Directors', value: `${movieValue.Director}` })}
            catch {}
            try {movieEmbed.addFields({ name: 'Writers', value: `${movieValue.Writer}` })}
            catch {}
            try {movieEmbed.addFields({ name: 'Actors', value: `${movieValue.Actors}` })}
            catch {}
            try {movieEmbed.addFields({ name: 'ImdbRating', value: `${movieValue.Ratings[0].Value}`, inline: true })}
		    catch {}
            try {movieEmbed.addFields({ name: 'Rotten Tomatoes', value: `${movieValue.Ratings[1].Value}`, inline: true })}
            catch {}
            try {movieEmbed.addFields({ name: 'Metacritic', value: `${movieValue.Ratings[2].Value}`, inline: true })}
            catch {}
            try {movieEmbed.setImage(`${movieValue.Poster}`)}
            catch {}

        message.channel.send({ embeds: [movieEmbed] });
    } 





})




















client.login(""); //insert your discord bot login token
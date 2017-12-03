const Discord = require("discord.js");
const YTDL = require("ytdl-core")
const cliSpinners = require('cli-spinners');
const PREFIX = ";";
const bot =  new Discord.Client();
const randomPuppy = require('random-puppy');
const vaporwave = require('vaporwave');
const rickAndMorty = require("rick-and-morty");
var figlet = require('figlet');

function play(connection, message) {
	var server = servers[message.guild.id]

	server.dispatcher = connection.playStream(YTDL(servers.queue[0],  {filter: "audioonly"}));

	server.queue.shift();


	server.dipatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

bot.on('guildCreate', guild => {
  console.log("Scylla has joined a new guild!" +  guild.name )
});

var servers = {};

var fortunes = [
"Yes",
"No",
"Maybe",
];

var memas = [
 "◕‿◕",
 "｡◕‿◕｡",
 "｡◕‿‿◕｡",
  "^̮^",
  "(ʘ‿ʘ)",
  "(ಠ_ಠ)",
"(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
"(づ｡◕‿‿◕｡)づ",
"ლ,ᔑ•ﺪ͟͠•ᔐ.ლ",
"ᕙ(⇀‸↼‶)ᕗ",
"(ಠ⌣ಠ)"
]




bot.on("ready", function () {
  console.log("Scylla is ready");
  bot.user.setPresence({ game: { name: ";help" +  "|" + bot.guilds.size + "guilds" , type: 0 } });
  figlet('Scylla Activated!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    bot.guilds.forEach(guild => {console.log(guild.name + " : " + guild.memberCount)});
});
});


bot.on("message", message => {


  

   	var args = message.content.split(' ').slice(1);

   	var argresult = args.join('');

       var args = message.content.split(/[ ]+/);

 var argresults =  message.content.split(" ").slice(1).join(" ")

 
  let params = message.content.split(" ");
  params.shift();






     var args = message.content.substring(PREFIX.length).split(" ")


     switch (args[0].toLowerCase()) {



case "vapor":

message.channel.send(vaporwave(args.join(" ")))

break;

       case "btc":
       var btc = require('btc');
btc.price(function(err, prices){
    message.channel.send(prices);
});
       break;

case "puppy":
randomPuppy()
    .then(url => {
        message.channel.send(new Attachment(url));
    })
    break;

    case "play":
if (args[1]) {
message.channel.send("Please provide a link");
return;
}

if (!message.member.voiceChannel) {
	message.channel.send("You must be in a voice channel");
}



if (!servers[message.guild.id]) servers[message.guild.id] = {
	queue: []
}
var servers = servers[message.guild.id];

servers.queue.push(args[1]);


if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
	play(connection, message);
})
    break;

    
case "trolldm":


break;

    case "urban":
var urban = require('urban')(args.join(" "));
    break;

case "lmgtfy":
let HELLOArgs = args.splice(0, 1)
let string = require("lmgtfy")(args.join(" "))
message.channel.send(string)
break;


case "porn":
let HELOArgs = args.splice(0, 1)
 var ph = ph.details(args.join(" "), function(err, details) {
  message.channel.send(ph)
});
break;



    case "say":
    let Args = args.splice(0, 1)
    message.channel.send(args.join(" "));
    break;


case "help":
var embed = new Discord.RichEmbed()
.addField("Information Commands:","guild, stats, info")
.addField("Fun Commmands:", "8ball, randomnumber, reverse, figlet, randomface, avatar")
.addField("Bot owner only:", " exit, playing,")
.setFooter("A fun bot created by eXTRA#4087")
message.channel.sendEmbed(embed)
break;

case "info":
var embedhehe = new Discord.RichEmbed()
.addField("Scylla Creator", "eXTRA#4087")
.addField("Scylla","A fun bot based on Discord.js")
.setFooter("A fun bot created by eXTRA#4087")
message.channel.sendEmbed(embedhehe)
break;

case "guild":
var embed2 = new Discord.RichEmbed()
.addField("Name",  message.guild.name, true)
.addField("Members",  message.guild.memberCount, true)
.addField("Owner",  message.guild.owner.user.username + "#" + message.guild.owner.user.discriminator)
.addField("Region",  message.guild.region, true)
.addField("Server ID", message.guild.id, true)
.addBlankField()
.setThumbnail(message.guild.iconURL)
.setFooter("A fun bot created by eXTRA#4087")
message.channel.sendEmbed(embed2)
break;



case "user":
var embed34 = new Discord.RichEmbed()

.addField("Name:",  message.author.username + message.author.user.discriminator)

message.channel.sendEmbed(embed34)
break;



case "selfeval":
if (message.author.id !== "254270973107240960") {
	return message.channel.send("Owner only!!")
}
message.reply(eval(params.join(" ")));
break;


case "playing":
if(message.author.id !== "254270973107240960") {
  return message.channel.send("Bot owner only!")
}
let Argsdot =  args.splice(0, 1)
bot.user.setPresence({ game: { name: args.join(" ") , type: 0 } });
break;

case "join":
let voiceChan = message.member.voiceChannel;
		if (!voiceChan || voiceChan.type !== 'voice') {
			message.channel.sendMessage('No').catch(error => message.channel.sendMessage(error));
		} else if (message.guild.voiceConnection) {
			message.channel.sendMessage('I\'m already in a voice channel');
		} else {
			message.channel.sendMessage('Joining...').then(() => {
				voiceChan.join().then(() => {
					message.channel.sendMessage('Joined successfully.').catch(error => message.channel.sendMessage(error));
				}).catch(error => message.channel.sendMessage(error));
			}).catch(error => message.channel.sendMessage(error));
		}
		break;
		
		case "leave":
		let voiceChan2 = message.member.voiceChannel;
		if (!voiceChan2) {
			message.channel.sendMessage('I am not in a voice channel');
		} else {
			message.channel.sendMessage('Leaving...').then(() => {
				voiceChan2.leave();
			}).catch(error => message.channel.sendMessage(error));
		}
		break;

case "exit":
if(message.author.id !== "254270973107240960") {
  return message.channel.send("Bot owner only!") 
}
process.exit()
break;



case "ram":
message.channel.send(rickAndMorty.random());
break;



case "randomnumber":

message.channel.send(Math.floor((Math.random() * 100) + 1))

break;


case "reverse":
let SecondArgs = args.splice(0, 1)
if (args.length < 1) {
  throw  "You must input a text to be reversed"
}
message.channel.send(args.join(" ").split("").reverse().join(""));
break;

case "avatar":
message.reply(message.author.avatarURL);
break;

case "figlet":
let ArgsThird =  args.splice(0, 1)
if (args.length < 1) {
  throw "You must provide something to write"
}

figlet.text(args.join(""), (err, res) => {
  if (err)
  return msg.error(err)
  message.channel.send(`\`\`\`\n${res}\n\`\`\``)
})
break;

case "not":
message.channel.send("if this message pops up, it works", {
 tts: true
})
break; 


case "8ball":
if (args[1]) {
message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
} else {
  message.channel.send("Can't read that!")
}
break;

case "randomface":
message.channel.send(memas[Math.floor(Math.random() * memas.length)]);
break;

case "stats":
var embed3 = new Discord.RichEmbed()
.setTitle("Bot guild count and bot uptime :joy::ok_hand:")
.addBlankField()
.addField("Stats", bot.guilds.size + "Guilds", true)
.addField("Uptime", bot.uptime, true)
.setFooter("A fun bot created by eXTRA#4087")
message.channel.sendEmbed(embed3)
break;










case "skip":
var server = servers[message.guild.id];

if(server.dispatcher) server.dispatcher.end();
break;


case "stop":
var server = servers[message.guild.id];

if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
break;















}
});
bot.login(process.env.BOT_TOKEN);

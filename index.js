const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");

    Client.guilds.cache.find(guild => guild.id === "878759740669313104").channels.cache.find(channel => channel.id === "882339804296126464").messages.fetch("884105629428482119").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log("impossible d'ajouter le message en mémoire. : " + err);
    });
    
    Client.guilds.cache.find(guild => guild.id === "878759740669313104").channels.cache.find(channel => channel.id === "882339804296126464").messages.fetch("884105666673930240").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log("impossible d'ajouter le message en mémoire. : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "878759740669313104").channels.cache.find(channel => channel.id === "882339804296126464").messages.fetch("884106133030207508").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log("impossible d'ajouter le message en mémoire. : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "878759740669313104").channels.cache.find(channel => channel.id === "882339804296126464").messages.fetch("884106997501394986").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log("impossible d'ajouter le message en mémoire. : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "878759740669313104").channels.cache.find(channel => channel.id === "882339804296126464").messages.fetch("884108072635740180").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log("impossible d'ajouter le message en mémoire. : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "878759740669313104").channels.cache.find(channel => channel.id === "882339804296126464").messages.fetch("884108507861884948").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log("impossible d'ajouter le message en mémoire. : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "878759740669313104").channels.cache.find(channel => channel.id === "882339804296126464").messages.fetch("884153132895055872").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log("impossible d'ajouter le message en mémoire. : " + err);
    });

    Client.guilds.cache.find(guild => guild.id === "878759740669313104").channels.cache.find(channel => channel.id === "882339804296126464").messages.fetch("884153193217548298").then(message => {
        console.log("message ajouté à la mémoire : " + message.content);
    }).catch(err =>{
        console.log("impossible d'ajouter le message en mémoire. : " + err);
    });
});

Client.on("guildMemberAdd", member =>{
    console.log("un membre est arrivé.");
    Client.channels.cache.get("972846495730663484").send(member.displayName + "est arrivé(e).");
    member.roles.add("884017818209763348");
});

const reactionsMessage = new Map([
    [ // Le message                             premier message
        "884105629428482119",
        new Map([ // Les rôles
            ["1️⃣", "878970942292914187"],
            ["2️⃣", "878970994583281674"],
        ]) 
    ],
    [ // Le message                             deuxième message
        "884105666673930240",
        new Map([ // Les rôles
            ["1️⃣", "878761474493911090"],
            
        ]) 
    ],
    [ // Le message                             troisème message
        "884106133030207508",
        new Map([ // Les rôles
            ["1️⃣", "973308988160630825"],
            ["2️⃣", "882376453646336040"],
        ]) 
    ],
    [ // Le message                             quatrième message
        "884106997501394986",
        new Map([ // Les rôles
            ["1️⃣", "882373551682883644"],
        ]) 
    ],
    [ // Le message                             cinquième message
        "884108072635740180",
        new Map([ // Les rôles
            ["1️⃣", "882375212019093605"],
        ]) 
    ],
    [ // Le message                             sixième message
        "884108507861884948",
        new Map([ // Les rôles
            ["1️⃣", "882376627483463762"],
        ]) 
    ],
    [ // Le message                             septième message
        "884153132895055872",
        new Map([ // Les rôles
            ["1️⃣", "884151521091133560"],
            ["2️⃣", "884151629568438282"],
            ["3️⃣", "884151700653473792"],
        ]) 
    ],
    [ // Le message                             huitième message
        "884153193217548298",
        new Map([ // Les rôles
            ["✅", "884017818209763348"],
        ]) 
    ],
]);

Client.on("messageReactionAdd", (reaction, user) => {
    console.log("réaction ajoutée.");
    let messageReactions = reactionsMessage.get(reaction.message.id)
    if(messageReactions){
        let role = messageReactions.get(reaction.emoji.name);
        if (role){
            let member = reaction.message.guild.members.cache.get(user.id);
            if (role == "884017818209763348"){
                member.roles.remove("884017818209763348");
                console.log(`Rôle ${role} retiré avec succès pour ${member.displayName}`)
            }
            else member.roles.add(role).then(mbr => {
                console.log(`Rôle ${role} attribué avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log(`Rôle ${role} non attribué. ${err}`);
            })
        }
    }
    
});
Client.on("messageReactionRemove", (reaction, user) => {
    console.log("réaction retirée.");
    let messageReactions = reactionsMessage.get(reaction.message.id)
    if(messageReactions){
        let role = messageReactions.get(reaction.emoji.name);
        if (role){
            reaction.message.guild.members.cache.get(user.id).roles.remove(role).then(mbr => {
                console.log(`Rôle ${role} retiré avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log(`Rôle ${role} non retiré. ${err}`);
            })
        }
    }
    
});

Client.on("messageCreate", message=> {
    if (message.author.bot) return;
    
    if(message.content === prefix + "ping"){
        message.reply("pong !");
    }
    if(message.content === prefix + "sondage"){
        message.reply("https://discord.com/channels/878759740669313104/932328969355796531");
    }
    if(message.content === prefix + "question"){
        message.reply("https://discord.com/channels/878759740669313104/932330504731099216");
    }
    if(message.content === prefix + "recrut"){
        message.reply("https://discord.com/channels/878759740669313104/932353457422225459");
    }
    if(message.content === prefix + "annonce"){
        message.reply("https://discord.com/channels/878759740669313104/932328064069812326");
    }
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#cc0000")
            .setTitle("Liste des commandes")
            .addField("!help", "Affiche la liste des commandes")
            .addField("!sondage", "Renvoie vers le salon 💭sondage💭")
            .addField("!question", "Renvoie vers le salon ❓questions❓")
            .addField("!recrut", "Renvoie sur le salon 🏘recrutement🏘")
            .addField("!annonce", "Renvoie vers le salon 🚨annonce-serveur🚨")
            .setTimestamp();
        
        message.channel.send({ embeds: [embed]});
    }

});














Client.login("OTcyNTQ4NDY4NTUzOTQxMDI0.GLOS9S.QkZjds-4c2oHrEdTMObehOdyUfyL5uAlwHERHk");
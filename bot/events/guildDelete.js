/**
 * Created by Tom on 7/29/2017.
 */
exports.run = (bot, guild) => {
    const moment = require('moment');
    bot.user.setGame(`~help | Guilds: ${bot.guilds.size} | Users: ${bot.users.filter(g => !g.bot).size}` ).catch(e => console.warn('wew tf happened here ' + e));
    bot.updateLists();
    bot.channels.get("334471388289302539").send({
        embed: {
            color: 16711680,
            title: "i left a guild :/",
            thumbnail: {url: guild.iconURL},
            fields: [{
                name: "Guild",
                value: guild.name
            },
                {
                    name: "Owner",
                    value: guild.owner.displayName
                },
                {
                    name: "Users",
                    value: guild.memberCount
                },
                {
                    name: "Bots",
                    value: guild.members.filter(member => member.user.bot).size
                },
                {
                    name: "Guild id",
                    value: guild.id
                },
                {
                    name: "Created At",
                    value: moment(guild.createdAt).format('LLLL')
                },
                {
                    name: "Total guilds",
                    value: bot.guilds.size
                }
            ],
            timestamp: new Date(),
        }
    });
    console.log(`left ${guild.name}.`);
};
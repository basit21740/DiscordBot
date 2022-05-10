import DiscordJS from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
const client = new DiscordJS.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on('ready', () => {
console.log("bot is ready")
})



client.on("message", (message) => {
  if(message.content === "ping") {
    message.reply({
    content: "pong",
})
}
})

client.login(process.env.TOKEN)


/*
 * This program is Discord Bot
 *
 * @author  Abdul Basit
 * @version 1.0
 * @since   2022-04-06
 */

import DiscordJS from "discord.js"
import dotenv from "dotenv"

dotenv.config()
const client = new DiscordJS.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on("ready", () => {
  console.log("bot is ready")
})

client.on("message", (message) => {
  if (message.content === "ping") {
    message.reply({
      content: "pong", 
    }) 
  } else if (message.content == "DevBot") {
      message.reply({
          content: "Hey yeah wassup?",
      })
  } else if (message.content == "Send me youtube channel link") {
    message.reply({
        content: "https://www.youtube.com/c/AbdulBasitOtt",
    })
  } else if (message.content == "How are you") {
    message.reply({
        content: "I am doing great, what about you",
    })
  } else if (message.content == "Hey") {
    message.reply({
        content: "Hey there",
    })
  } else if (message.content == "Hi") {
    message.reply({
        content: "Hi, what's good?",
    })
  } else if (message.content == "Do you know my name") {
    message.reply({
        content: "Well, I know Abdul is showing you this so obviously you are his friend or someonehe knows",
    })
  } else if (message.content == "Bye") {
    message.reply({
        content: "Aight, Have a good Day/Morning",
    }) 
  } else if (message.content == "idk") {
    message.reply({
        content: "Bruh",
    }) 
}
})

client.login(process.env.TOKEN)


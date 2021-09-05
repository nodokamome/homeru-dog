import * as fs from "fs";
import { Client } from 'discord.js';
import { config } from 'dotenv';

config();

(async function main() {
  const client = new Client();

  client.on('message', async (message) => {
    if (message.author.bot) return;

    else if (message.content === '!ping') {
      message.channel.send('pong');
    }
    else if (message.content === '!join') {
      const noguti = await client.emojis.cache.find(emoji => emoji.name === 'noguti');
      message.react(noguti || '😄');
      const higuti = await client.emojis.cache.find(emoji => emoji.name === 'higuti');
      message.react(higuti || '😄');
      const yukiti = await client.emojis.cache.find(emoji => emoji.name === 'yukiti');
      message.react(yukiti || '😄');
      message.channel.send('いつもお疲れ様ですワン！');
    } else if (message.content === 'bye') {
      const ayaya = await client.emojis.cache.find(emoji => emoji.name === 'AYAYA');
      message.react(ayaya || '😄');
      message.channel.send('おやすみなさいワン！');
    } else if (message.content === 'allbye') {
      const thanks = await client.emojis.cache.find(emoji => emoji.name === 'thanks');
      message.react(thanks || '😄');
      const saikou = await client.emojis.cache.find(emoji => emoji.name === 'saikou');
      message.react(saikou || '😄');
      const god = await client.emojis.cache.find(emoji => emoji.name === 'god');
      message.react(god || '😄');
      message.channel.send('みんなに貢献できてすごいワン！！');
    } else {
      const emojis = JSON.parse(fs.readFileSync(`./data/emojis.json`, 'utf8'));
      const choiceEmoji = (): string => emojis[Math.floor(Math.random() * emojis.length)];

      const reactionEmoji = await client.emojis.cache.find(emoji => emoji.name === choiceEmoji());
      message.react(reactionEmoji || '😄');
    }
  });

  client.login(process.env.DISCORD_TOKEN);
})();

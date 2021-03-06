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
      message.react(noguti || '๐');
      const higuti = await client.emojis.cache.find(emoji => emoji.name === 'higuti');
      message.react(higuti || '๐');
      const yukiti = await client.emojis.cache.find(emoji => emoji.name === 'yukiti');
      message.react(yukiti || '๐');
      message.channel.send('ใใคใใ็ฒใๆงใงใใฏใณ๏ผ');
    } else if (message.content === 'bye') {
      const ayaya = await client.emojis.cache.find(emoji => emoji.name === 'AYAYA');
      message.react(ayaya || '๐');
      message.channel.send('ใใใใฟใชใใใฏใณ๏ผ');
    } else if (message.content === 'allbye') {
      const thanks = await client.emojis.cache.find(emoji => emoji.name === 'thanks');
      message.react(thanks || '๐');
      const saikou = await client.emojis.cache.find(emoji => emoji.name === 'saikou');
      message.react(saikou || '๐');
      const god = await client.emojis.cache.find(emoji => emoji.name === 'god');
      message.react(god || '๐');
      message.channel.send('ใฟใใชใซ่ฒข็ฎใงใใฆใใใใฏใณ๏ผ๏ผ');
    } else {
      const emojis = JSON.parse(fs.readFileSync(`./data/emojis.json`, 'utf8'));
      const choiceEmoji = (): string => emojis[Math.floor(Math.random() * emojis.length)];

      const reactionEmoji = await client.emojis.cache.find(emoji => emoji.name === choiceEmoji());
      message.react(reactionEmoji || '๐');
    }
  });

  client.login(process.env.DISCORD_TOKEN);
})();

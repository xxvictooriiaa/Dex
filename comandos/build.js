const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const path = require('path');
const builds = require('../data/builds.json');

module.exports = {
  name: 'build',
  execute(message) {
    const args = message.content.split(' ').slice(1);
    const personagem = args.join(' ').toLowerCase();

    if (!personagem) {
      return message.reply('Para usar o "Guia do Dex" escreva: `!build nome do personagem`');
    }

    const build = builds[personagem];

    if (!build) {
      return message.reply(
        `...Minha Linda(o) não achei build para **${personagem}**.\nAntes de procurar guia, vai procurar um de português né.`
      );
    }

    const embed = new EmbedBuilder()
      .setTitle(build.titulo)
      .setDescription(build.descricao)
      .setColor(0xb388eb);

    let files = [];

    if (build.imagem) {
      const imgPath = path.join(__dirname, '../data/imagens', build.imagem);
      const attachment = new AttachmentBuilder(imgPath);
      embed.setImage(`attachment://${build.imagem}`);
      files.push(attachment);
    }

    message.channel.send({ embeds: [embed], files });
  }
};

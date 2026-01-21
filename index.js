const { Client, GatewayIntentBits, Events } = require('discord.js');
const buildCommand = require('./comandos/build');
const builds = require('./data/builds.json');
const path = require('path');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once(Events.ClientReady, () => {
  console.log(`⚙️ Dex está online como ${client.user.tag}. Tá, e agora o que vocês quebraram?`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

  // dex fodão
  // !build
  if (content.startsWith('!build')) {
    buildCommand.execute(message);
  }

 
  // !pedido
  if (content === '!pedido') {
    const respostas = [
      "Quer Pedir? Pede aqui (Se for ruim, a culpa é sua.): https://docs.google.com/forms/d/e/1FAIpQLSe47_cQcrIAEAfio7FRDXUFOvgIMqBYeKXHW_SIvQn2qx5rFA/closedform ",
      "Pede aqui que eu salvo no sistema: https://docs.google.com/forms/d/e/1FAIpQLSe47_cQcrIAEAfio7FRDXUFOvgIMqBYeKXHW_SIvQn2qx5rFA/closedform (Agora reza pro Dex não travar.)",
      "Pede aqui seu coquetel : https://docs.google.com/forms/d/e/1FAIpQLSe47_cQcrIAEAfio7FRDXUFOvgIMqBYeKXHW_SIvQn2qx5rFA/closedform Entregaremos o mais breve possível... ou não, Até Porque Eu que decido né.",
      "Aqui oh: https://docs.google.com/forms/d/e/1FAIpQLSe47_cQcrIAEAfio7FRDXUFOvgIMqBYeKXHW_SIvQn2qx5rFA/closedform  Ah? Se seu Pedido foi recebido? ou Ignorado? Talvez rs...",
    ];
    const rand = Math.floor(Math.random() * respostas.length);
    message.channel.send(respostas[rand]);
  }

  // !bug
  if (content === '!bug') {
    const bugs = [
      "Erro 502: Paciência do Dex não encontrada.",
      "StackOverflow: você pediu demais pra alguém que já desistiu.",
      "Erro Fatal : usuário tentando ser engraçado sem permissão ( e falhando ).",
      "Bug detectado entre a cadeira e o teclado. (Você mesmo.)",
      "Bug reportado. Solução: desligue e vá dormir.",
    ];
    const rand = Math.floor(Math.random() * bugs.length);
    message.channel.send(bugs[rand]);
  }

  // !dexdica
  if (content === '!dexdica') {
    const dicas = [
      "Reinicia o sistema. Se for seu relacionamento, também serve.",
      " Nunca confie em variáveis globais e em gente que fala 'é só uma fase'.",
      " Código limpo, mente limpa. Ou pelo menos uma das duas.",
      " Se você vai fazer merda, versiona antes.",
      " Ctrl + S salva mais vidas que muita terapia ( E sistemas também ).",
      "Um print resolve mais do que explicar pro suporte.",
    ];
    const rand = Math.floor(Math.random() * dicas.length);
    message.channel.send(dicas[rand]);
  }
});



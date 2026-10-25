require('dotenv').config();
const { Client, GatewayIntentBits, ChannelType, EmbedBuilder } = require('discord.js');
const { registerCommands } = require('./commands');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const userCooldowns = new Map();
const COOLDOWN_SECONDS = 10;
const serverConfigs = new Map();

const GARFIELD_ORANGE = 0xFF7A00;

client.once('ready', async () => {
  console.log(`🐱 Garfield AI Receptionist Bot logged in as ${client.user.tag}`);
  client.user.setActivity('Napping... 🍝', { type: 4 });

  if (process.env.DISCORD_CLIENT_ID && process.env.DISCORD_BOT_TOKEN) {
    await registerCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_BOT_TOKEN);
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const { commandName, user, guildId } = interaction;

  // Rate Limiting
  if (['ask', 'ticket'].includes(commandName)) {
    const lastUsed = userCooldowns.get(user.id);
    const now = Date.now();
    if (lastUsed && (now - lastUsed) < COOLDOWN_SECONDS * 1000) {
      const remaining = ((COOLDOWN_SECONDS * 1000 - (now - lastUsed)) / 1000).toFixed(1);
      return interaction.reply({ 
        content: `😴 *Yawn...* Hold on! Garfield needs \`${remaining}s\` to digest his lasagna before answering again.`, 
        ephemeral: true 
      });
    }
    userCooldowns.set(user.id, now);
  }

  // /ask
  if (commandName === 'ask') {
    const question = interaction.options.getString('question');
    await interaction.deferReply();
    const currentConfig = serverConfigs.get(guildId) || { prompt: 'Sarcastic Garfield Persona' };

    const embed = new EmbedBuilder()
      .setColor(GARFIELD_ORANGE)
      .setTitle('🐱 Garfield\'s AI Receptionist Desk')
      .addFields(
        { name: '📥 Question', value: `*"${question}"*` },
        { name: '🍝 Garfield\'s Automated Answer', value: `*"I was sleeping, but fine... Here is what our database says:"*\n\n> Thank you for reaching out! Your inquiry was handled automatically.` }
      )
      .setFooter({ text: 'Garfield AI SaaS • Powered by Lasagna' });

    await interaction.editReply({ embeds: [embed] });
  } 
  // /info
  else if (commandName === 'info') {
    await interaction.reply({ 
      content: `**AI Voice Receptionist SaaS (Garfield Edition)** 🤖🐱\n\n📜 **Terms:** https://danielenglish19960118.github.io/ai-receptionist-saas/terms.html\n🔒 **Privacy:** https://danielenglish19960118.github.io/ai-receptionist-saas/privacy.html\n📸 **Instagram:** https://www.instagram.com/lasagna_and_light/`, 
      ephemeral: true 
    });
  }
});

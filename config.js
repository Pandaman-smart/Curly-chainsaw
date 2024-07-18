const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_41_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NixcbiAgICAgICAgODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICA1MixcbiAgICAgICAgMjAwLFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMixcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc5LFxuICAgICAgICA2NSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9TVUplTUZMQ24wOHR1M0hjaXVCbVdPdGVjZ3RsdlozazRxRG16bHh3dEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNxNzhkN19rU0N1RGstS1ItRzNKRFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzkzMjgwZGItMzA4MS00OWMwLThiZDgtODUwZmY2YWQzODcwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMixcbiAgICAgIDE4NixcbiAgICAgIDI1MixcbiAgICAgIDIyOCxcbiAgICAgIDE5NSxcbiAgICAgIDIwNCxcbiAgICAgIDc3LFxuICAgICAgOTUsXG4gICAgICAyMTEsXG4gICAgICA4MSxcbiAgICAgIDEzMyxcbiAgICAgIDgzLFxuICAgICAgMTkzLFxuICAgICAgMTk3LFxuICAgICAgNSxcbiAgICAgIDE2MCxcbiAgICAgIDIwOSxcbiAgICAgIDEwNixcbiAgICAgIDIzMixcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDE2NSxcbiAgICAgIDI1LFxuICAgICAgMjA3LFxuICAgICAgNDksXG4gICAgICAxNTgsXG4gICAgICA0NCxcbiAgICAgIDEzMSxcbiAgICAgIDYsXG4gICAgICAxMzYsXG4gICAgICA4LFxuICAgICAgMjE0LFxuICAgICAgMjUsXG4gICAgICAyMjcsXG4gICAgICAyNTMsXG4gICAgICAxNjgsXG4gICAgICA4MSxcbiAgICAgIDE5MyxcbiAgICAgIDE1NSxcbiAgICAgIDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTE2TFE4OVBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMjczNzc4NjAzOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT0cgIFNNQVJUKOmVh+S4iuacgOiBquaYjueahOS6uilcIixcbiAgICBcImxpZFwiOiBcIjIyNDM4NjcyNDQ1NDUwMDoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcWJqTWdMRUt2SjRiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZiN2pwbE0yVklhVHJabFpoWXpkY2RJcTBELzcwZFpZWUw0RjRsb3JGd289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZjVTQ2ticFpIalZ6M1dpSFpQUTRYU0NWa3hVcVhidU5XZjhETG9xZys3Q0wzY3hyTTE5cCtVYTFlMVBuNUFvZUl6SUVpNXJtS25WeVEwWEgxWXFFakE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicHhVWS9qbDZvb3UzLzJicDZHZU9tNGN0UjlVWlBQYStVdnV0Zk8wSjB6OU9pa2VENFZyTHQ0RXU1RXdwM3JKWS81bUl3VWZVc0NJSE9qV3J6UTVJaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMyNzM3Nzg2MDM6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjYzMjc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQThJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBOEkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKWFROY2tZeWNnUjB2b3dVUnB3ZlB0WVVTUEF5Mi8xSlorYW92ZFhBUFNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxMDM5ODUwOTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI2MzI3ODYxOVwifSIKfQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

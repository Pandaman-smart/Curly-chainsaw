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
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_16_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYyLFxuICAgICAgICA1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDk0LFxuICAgICAgICA1NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDcxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA5LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImFoZVRJMGpSNDZRcnNDTDhjMDlXV2hKQTg3V3dmQnQyV0VOdzdqYmIwVGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi12NmZSSlh3UXA2dEw4SnFKUUR5dmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjFhZTRmZDktYTNlMi00ZjAwLTk0MmQtY2Y0MmM1YzVjNWZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDIzNSxcbiAgICAgIDE4NCxcbiAgICAgIDE5NSxcbiAgICAgIDk1LFxuICAgICAgMTkyLFxuICAgICAgMjgsXG4gICAgICAxMTMsXG4gICAgICA4MCxcbiAgICAgIDExMixcbiAgICAgIDEsXG4gICAgICAyNDYsXG4gICAgICAxMzAsXG4gICAgICAyNDgsXG4gICAgICAxNTUsXG4gICAgICAxNTAsXG4gICAgICA3MixcbiAgICAgIDk1LFxuICAgICAgMTMyLFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDIyNixcbiAgICAgIDgyLFxuICAgICAgODUsXG4gICAgICAxNzksXG4gICAgICA4NSxcbiAgICAgIDc3LFxuICAgICAgMjYsXG4gICAgICA1MixcbiAgICAgIDEyLFxuICAgICAgMjQ2LFxuICAgICAgMjExLFxuICAgICAgMjE2LFxuICAgICAgMTI3LFxuICAgICAgMjMsXG4gICAgICAxMTQsXG4gICAgICAyMixcbiAgICAgIDEzLFxuICAgICAgMjE1LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUEVXU1JOV0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMjczNzc4NjAzOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT0cgIFNNQVJUKOmVh+S4iuacgOiBquaYjueahOS6uilcIixcbiAgICBcImxpZFwiOiBcIjIyNDM4NjcyNDQ1NDUwMDoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMWFQrSklIRVBQcTFiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZiN2pwbE0yVklhVHJabFpoWXpkY2RJcTBELzcwZFpZWUw0RjRsb3JGd289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMTI0MUxzVXZXK3RPMGFEUmoxNHFPeENOcGFobzVVM0NJei9sK3NZZTlGRlZKTWVyQmlYRjgyNjZqTnJmWks4RXQ2VkNDSTJQbjFicnpNcXM3L3dmaXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMmNXWDRFZ3Q5UUdDbVVxYTQvdmRpVm5MbDNheFlWTUxhZy81TE5yTTdnMWFjKzNkMkRrUWpCcDJYYmk3MXBWZFJBQXkyWGthQ1hXaEc3bHFsVXFmZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMyNzM3Nzg2MDM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDcwOTY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2FhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDYWEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1Z1Y4akNabXgzVTZhZUoxZDZaUkZIVUFwSjNKZWhTRlpEUVRQejQwQ2g4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MTg3NzM2ODUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTA3MDk2Njg3NVwifSIKfQ=="


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

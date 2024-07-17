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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_04_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDc1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDkzLFxuICAgICAgICAzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MCxcbiAgICAgICAgOCxcbiAgICAgICAgODIsXG4gICAgICAgIDg3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDcwLFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODMsXG4gICAgICAgIDk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTQWFYRjBBUm0zVVZnTlhPUm9RdTlhOS8xRVBSbXBjNjRTNWV1eEREdnVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMjczNzc4NjAzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUFEOUQ4RjYzMkQ3N0MxQUY2MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1NTkwODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR3czczlNUzBUWTJRamhRTHg0LUIwQVwiLFxuICBcInBob25lSWRcIjogXCI0OGU5NDE4Yi02YzU4LTQ5ZWUtODZmMi0yYzY4YmI3Nzk1N2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAyNCxcbiAgICAgIDk1LFxuICAgICAgODAsXG4gICAgICAyMzMsXG4gICAgICAxMDcsXG4gICAgICA4NCxcbiAgICAgIDI2LFxuICAgICAgOTksXG4gICAgICAxNDIsXG4gICAgICAyNDIsXG4gICAgICA0NixcbiAgICAgIDM3LFxuICAgICAgMTcxLFxuICAgICAgMTgzLFxuICAgICAgNjQsXG4gICAgICA3MixcbiAgICAgIDM0LFxuICAgICAgNjksXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMTA3LFxuICAgICAgNzQsXG4gICAgICAxNDgsXG4gICAgICA2LFxuICAgICAgMTkyLFxuICAgICAgMTE2LFxuICAgICAgMjQ4LFxuICAgICAgMTQ4LFxuICAgICAgMTk3LFxuICAgICAgMzYsXG4gICAgICAzOSxcbiAgICAgIDE2MSxcbiAgICAgIDUwLFxuICAgICAgNzMsXG4gICAgICAxMDEsXG4gICAgICAxOTUsXG4gICAgICA0OCxcbiAgICAgIDgxLFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFNUDhGQVo2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzI3Mzc3ODYwMzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT0cgIFNNQVJUKOmVh+S4iuacgOiBquaYjueahOS6uilcIixcbiAgICBcImxpZFwiOiBcIjIyNDM4NjcyNDQ1NDUwMDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w2a3FJSUNFT0xMdHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmI3anBsTTJWSWFUclpsWmhZemRjZElxMEQvNzBkWllZTDRGNGxvckZ3bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNUTJObjFmQzI3UmVFUmpyaTREcnBmVkZ4ZFVKeDZBbXJtTGtZak40SjN5RU9ISTg1NXcrUkNCN3BqMzJEek04WWRUU0dtcUQvSHhyckZiNXZ4SkVpZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2WGQ4dDlLKzFVRnB2TjRmQ0ljRWFvZE4ranZlWjQvMEN1UUtuTFhKL1hveDZPa2luSG9Lc1I5cnUwaWFJU1BZRkMrUXZZa1VLNFFWOWxONWZFTVBnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzI3Mzc3ODYwMzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU1OTA3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUluSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSW5ILmpzb24iOiAie1wia2V5RGF0YVwiOlwiWFVvY1YyOG53eEJwR0U5aFc2WUV4U0pwSmUxK2wxNG1HdmpHQXI0WDlldz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1NDE3MjUyNDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDU1OTA3Nzc2NlwifSIKfQ=="


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

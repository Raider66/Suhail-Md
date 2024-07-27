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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_12_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NixcbiAgICAgICAgMTAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMxLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgMjM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDc4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtTlhXWmtGbExUTkhMdXlWZ1plZ2FnYVdTR2Fpb3ZyM3l2ZUplSXN0Vi9RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIMFEyNHVpSVQ3ZXg1bEFfVDh5TVFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM0ZWJmNTJkLTY4NGUtNDFjNC04MDQzLTUyYzJhYzYwNzE5MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDMyLFxuICAgICAgMTIyLFxuICAgICAgMjA5LFxuICAgICAgMzUsXG4gICAgICA5MixcbiAgICAgIDE0MSxcbiAgICAgIDYyLFxuICAgICAgMzcsXG4gICAgICA0NixcbiAgICAgIDkwLFxuICAgICAgMjUsXG4gICAgICAxMDUsXG4gICAgICA4MixcbiAgICAgIDcxLFxuICAgICAgMTkzLFxuICAgICAgMjIxLFxuICAgICAgMzUsXG4gICAgICAxNjcsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDE1MixcbiAgICAgIDgxLFxuICAgICAgMTM0LFxuICAgICAgNDYsXG4gICAgICAxODMsXG4gICAgICAyMjYsXG4gICAgICA5NCxcbiAgICAgIDg5LFxuICAgICAgMTAwLFxuICAgICAgMjQ3LFxuICAgICAgOTksXG4gICAgICAxOTgsXG4gICAgICAxMzEsXG4gICAgICAyMixcbiAgICAgIDE2MSxcbiAgICAgIDk2LFxuICAgICAgMjQ4LFxuICAgICAgMjQ2LFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdCU0hHU1JBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTg2NDgxOTg2OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiIfCdkLTwnZGZ8J2RkvCdkaU/X2pwZWdcIixcbiAgICBcImxpZFwiOiBcIjIxNDYxMDk5MzAwMDQ2NzoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNZm02cWNFRUp2eGxMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk1Obm9IbFZKQUQwM1kzcFZZNXZwanJWdzJUUmZacytmQ21ldFFPL1VHQ0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVTRhMVJQd05IbWJlWHZjZCtiUTZobDdVeFpXbnIvN2lCZHFzYS9BeXJIK25BL0tTSGVDYTVML2xGaEtNWUQ1SmdhQlNjY0JQRnI3U1grQlArV1pDQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWpxMldodTVENXFDcGt4TDZqNHlOY1A0cjFqeG1ZMnZPUFRWMEVLR0h1ZytiV0RlWE05cWdFb3EvVGR4WTBUdjUrbnBROXNRRFNmYVlEWGdaVkYraGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE4NjQ4MTk4NjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxMDM5NjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIQ1hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhDWC5qc29uIjogIntcImtleURhdGFcIjpcImlKYVN3SjlKSTgrbzNZSmtMc29PdGFMRStQempSb1lIWElGVDZLemlIRGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE1NzI4MDU4MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTAzOTgwNDgxXCJ9Igp9" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

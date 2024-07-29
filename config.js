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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_49_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICA1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNixcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM4LFxuICAgICAgICA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVDZXRENEJpNUZCU2J6a3EwcGVxYXJsRllnV3NuUjVwcjNpbUlTRUFsQmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE4NjQ4MTk4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjExMTAxMDVGRjFFRDY2N0M0QTgwMEM3M0FEMTlFMjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjM5Mzc0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhnQUtMalJXUkx1dFpPRXRyYlJIVFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTlmYWRiMDQtODA2YS00NzQxLTg3ZmEtNWJlMzIxNmUzYjYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM5LFxuICAgICAgNjYsXG4gICAgICA3NixcbiAgICAgIDQwLFxuICAgICAgMTY0LFxuICAgICAgNzksXG4gICAgICAyMyxcbiAgICAgIDIzOCxcbiAgICAgIDIxMSxcbiAgICAgIDIzMyxcbiAgICAgIDY4LFxuICAgICAgNjQsXG4gICAgICAyMTksXG4gICAgICAyNTUsXG4gICAgICAyNDgsXG4gICAgICAxMzMsXG4gICAgICAyMjgsXG4gICAgICAyNTMsXG4gICAgICAyMDgsXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMTA0LFxuICAgICAgMTQ2LFxuICAgICAgMTg0LFxuICAgICAgMjE0LFxuICAgICAgMTEyLFxuICAgICAgMTEwLFxuICAgICAgMTgwLFxuICAgICAgMjIwLFxuICAgICAgMTk1LFxuICAgICAgNTksXG4gICAgICAxNDgsXG4gICAgICAyNDgsXG4gICAgICA2MyxcbiAgICAgIDQsXG4gICAgICAyNDUsXG4gICAgICAxNzksXG4gICAgICAxODYsXG4gICAgICA2MCxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZTkZRVlI1QlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE4NjQ4MTk4NjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIiHwnZC08J2RmfCdkZLwnZGlP19qcGVnXCIsXG4gICAgXCJsaWRcIjogXCIyMTQ2MTA5OTMwMDA0Njc6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWZtNnFjRUVJS1RuYlVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNTm5vSGxWSkFEMDNZM3BWWTV2cGpyVncyVFJmWnMrZkNtZXRRTy9VR0NFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJqMURnOStHaE1UNkRvSkkrMkdxbmxLQTBacVZQQllid0hVTlZEakVvQ2tpbzVRWW8vUGFJalJCbktIeW1JWDZ4RUVwNWh1R2dMSUNZc0hyK0VHZkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIksyVytjMFJvaFo3QjBkMDJMbVd3VkUzaVNSUmNGclppS2NpcDExY3FGSlhhaDVqRVRGc3RsdVFSUkdvRis3OVk4OEM2NjZUeWx6NllWSW5xRWhuTGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxODY0ODE5ODY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjM5MzY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSENYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIQ1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpSmFTd0o5Skk4K28zWUprTHNvT3RhTEUrUHpqUm9ZSFhJRlQ2S3ppSERjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNTcyODA1ODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjEwMzk4MDQ4MVwifSIKfQ=="  // PUT your SESSION_ID 


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

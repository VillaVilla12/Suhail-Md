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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_33_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NixcbiAgICAgICAgMTcyLFxuICAgICAgICA2LFxuICAgICAgICAzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDIxLFxuICAgICAgICAzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgNixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiblk2dXZmblRBNDFTSllLQ1ZDVmlmMTN2OVI4THAySmtyQTFZczhvMGpmbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1NDMzMDMzNTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA3NkZFN0EzMERBMDY1ODg2RTJFNTMyRUE0QUFEODU2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMzE3MDgxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2ODBaMkxGOFE4S1ZCTGstUjE2QUtBXCIsXG4gIFwicGhvbmVJZFwiOiBcImRmMmVhMGRhLTMwNmMtNDNmNy1hNWM3LTM0ZmMwYzgwNjBiY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxNDAsXG4gICAgICAxMDksXG4gICAgICAyMDYsXG4gICAgICA2NixcbiAgICAgIDc4LFxuICAgICAgMTEyLFxuICAgICAgMjE2LFxuICAgICAgMjI1LFxuICAgICAgMjMyLFxuICAgICAgMTMyLFxuICAgICAgMTExLFxuICAgICAgNTcsXG4gICAgICAxMixcbiAgICAgIDE0MSxcbiAgICAgIDIzOCxcbiAgICAgIDMyLFxuICAgICAgMjUsXG4gICAgICA3MixcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzgsXG4gICAgICAxMSxcbiAgICAgIDEyOSxcbiAgICAgIDksXG4gICAgICAzLFxuICAgICAgMTI2LFxuICAgICAgMTM2LFxuICAgICAgMTAsXG4gICAgICA0OCxcbiAgICAgIDk5LFxuICAgICAgMjI4LFxuICAgICAgMjI5LFxuICAgICAgMTQsXG4gICAgICA2MSxcbiAgICAgIDEzOSxcbiAgICAgIDIwLFxuICAgICAgMjM2LFxuICAgICAgNSxcbiAgICAgIDE4MCxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSWEtaRjdEUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTQzMzAzMzU3OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUGFhIFZpbGxhXCIsXG4gICAgXCJsaWRcIjogXCIyMjI2NDI1NDgyNzczNTk6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1dvaFBJQkVOMy8xYlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTNjFlc1JZR0tBWlROVTlQRG93R1NTR3FwMlhEQngwWHEwWjBSYlBvczJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9tb2U1MEVJUnNWZXpuQWVPRzZBU2JTSkd0cmV2akhCaDVLSTR1YVVGNnVLa0x3citDOU0xTkRBVjVUT24wVElTNDgxWFVsTDl2OTJZaGVNRWdxTERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFTS2MzNm90N0xZWHlxRGxFQUxKOUFpMGFEZTc4ZjI1VXY2UEdoVGF3dy82czgwbCtRYXFtYjRoeWV3a0VwVG1rclNDQWtwM2VPaEJQRDNDRTBQWENnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU0MzMwMzM1Nzo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxNzA3ODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFQitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVCKy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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

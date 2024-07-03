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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_26_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDksXG4gICAgICAgIDE2LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZuS1UrVU5RT3BtSHlpRU13djlZbndLMHA2dnFRU0dMTnUvNUFkN2FCSlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImg3b0N5Q0o2U2VxbmZ1M0tJczg0VWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWZiMzAxYzctODc3Yy00OWJiLTkyOGMtNDFlM2Y4ODVjYTNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDE2NSxcbiAgICAgIDIyMyxcbiAgICAgIDMsXG4gICAgICA3NCxcbiAgICAgIDIyNyxcbiAgICAgIDE5NyxcbiAgICAgIDc2LFxuICAgICAgMTk4LFxuICAgICAgOTIsXG4gICAgICAxOTIsXG4gICAgICAxNjUsXG4gICAgICA3NixcbiAgICAgIDE5NyxcbiAgICAgIDIyMSxcbiAgICAgIDg3LFxuICAgICAgMjAsXG4gICAgICAxMSxcbiAgICAgIDI0LFxuICAgICAgMTAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxNjcsXG4gICAgICAxMzEsXG4gICAgICA4OCxcbiAgICAgIDE1MixcbiAgICAgIDEyNCxcbiAgICAgIDE0MSxcbiAgICAgIDE1MyxcbiAgICAgIDE2LFxuICAgICAgNDgsXG4gICAgICAyMDEsXG4gICAgICAxMzQsXG4gICAgICAyMjUsXG4gICAgICA3MyxcbiAgICAgIDEyMCxcbiAgICAgIDQyLFxuICAgICAgMjAwLFxuICAgICAgMTIxLFxuICAgICAgMjAsXG4gICAgICA1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDNTJMQTE0QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTQzMzAzMzU3OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUGFhIFZpbGxhXCIsXG4gICAgXCJsaWRcIjogXCIyMjI2NDI1NDgyNzczNTk6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnlvaFBJQkVPeURsN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTNjFlc1JZR0tBWlROVTlQRG93R1NTR3FwMlhEQngwWHEwWjBSYlBvczJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJvNkZSRk1sQSt2OFVQdWNYTnR3dVd6OUlIWCtUd2Z4REFGaTFHOEVTbUdsQ1JtalpRVVY2Z21vRC95TTA4R3pVdDR3VjhxMU1rVHlDaThCbjU4WURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkMvVXNla3FOZzVjL1M3UlUwWVkzS05saHhaaGN4b29TRGJTeUM0ZUIwWGdJdFc0TE9KbnVzcDkwU0ZSYnhmaFAyb0VZckFCL1pwSG15WDRaVi9tcUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU0MzMwMzM1NzoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwNDE5ODlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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

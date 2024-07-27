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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_33_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDkwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDc2LFxuICAgICAgICA3NixcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJOUYzRi9zbXpwSXh1eU0zYXp6WG1vSnZqOEYvd2Jmc3pqL1kzbS9ZbTlRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1c3k4U0NDMlFNdWUtYlpveExkOHNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI0ZTNmNGU1LTdkY2YtNGYxNS1hMDc0LWY3YWJhZDI1Yzc5Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxMzQsXG4gICAgICAxNjAsXG4gICAgICA4NyxcbiAgICAgIDEzNCxcbiAgICAgIDI1NCxcbiAgICAgIDYsXG4gICAgICAyMzcsXG4gICAgICAxNjMsXG4gICAgICAyMzcsXG4gICAgICAxMjYsXG4gICAgICAzMyxcbiAgICAgIDEzMSxcbiAgICAgIDg3LFxuICAgICAgMjcsXG4gICAgICAzMyxcbiAgICAgIDI1MCxcbiAgICAgIDIzMixcbiAgICAgIDEwMSxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYsXG4gICAgICAzMCxcbiAgICAgIDEzNyxcbiAgICAgIDc3LFxuICAgICAgMjExLFxuICAgICAgNzEsXG4gICAgICAxODYsXG4gICAgICAzMyxcbiAgICAgIDQ4LFxuICAgICAgMzAsXG4gICAgICA2MSxcbiAgICAgIDc4LFxuICAgICAgMCxcbiAgICAgIDI1NSxcbiAgICAgIDEyMixcbiAgICAgIDQ1LFxuICAgICAgNDIsXG4gICAgICAzMyxcbiAgICAgIDExMixcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOTVXMUFLWVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU0MzMwMzM1Nzo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBhYSBWaWxsYVwiLFxuICAgIFwibGlkXCI6IFwiMjIyNjQyNTQ4Mjc3MzU5OjQwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tTb2hQSUJFTnZGa3JVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUzYxZXNSWUdLQVpUTlU5UERvd0dTU0dxcDJYREJ4MFhxMFowUmJQb3Myaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWY0t5ZUlXNlNwdk5oTEpoUkpQY0VKSmRlak1taDVORXVQa2lGQmZ6a1Y2U1hrbE1HQlhGQVhYNnlIT2VuNFVZZXo4UVViMWlEcHM2aWd6WURhY3BBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCaTJUT2ZJb0Zua3MxL1dwaHRtdDhPQ3RjWVg3cWUyc1ZTZS8ydXpmMFFBSFhTM2EvaGxJMDZ1Qy9CQXFnekI2M1l5enFxaDNtcDFvMXpSR2xhYUlpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NDMzMDMzNTc6NDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDY1NjMxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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

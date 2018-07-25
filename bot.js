const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'R'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('وعليكم السلام ورحمة الله وبركاته');
  }
});  

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
╔[❖════════════════════════❖]╗
=-=-=-=-=-=-=-=-=-=-=-=-=-=-= 
**
╔[❖═════════════════❖]╗
السلام عليكم إخواني ورحمة الله وبركاته
اعتذر جدا جدا على ازعاجكم ولكن ..

قد تم افتتاح البوت المشتعل burned bot 
-يحتوي هاذا البوت على خصائص كثيرة 
-رسائل الترحيب يمكنك تفعيلها وإطفائها
-رسالة هيلب جديدة بطريقة أخرى ومطورة
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
https://goo.gl/ahkV3Z
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
كما نود إعلامكم إخواني أنه عندما يصل البوت إلى 50 عضوا سيتم إعطاء بوتين مجانيين بالقرعة إلى إحدى السيرفرات التي تضم بوتنا :heart_eyes:

ملحوظة : الفائز بالبوت يختار جميع الأوامر التي يريدها ونحن في الخدمة
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 قم بإضافة البوت ربما تكون انت الرابح :grin::heart_eyes: 
╚[❖════════════════════❖]╝
**
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
اذا ضميته اشكرك صراحة على دعمك لنا ... [ ${member}  ]
╚[❖════════════════════════❖]╝
`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);

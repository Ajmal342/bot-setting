const Ajmal = require("../Utilis/events");
const { forwardOrBroadCast } = require("../Utilis/groupmute");
const { getBuffer } = require('../Utilis/download');
const { parseJid } = require("../Utilis/vote");
// A-J-M-A-L-SER
const url = 'https://i.imgur.com/oxGyh6j.jpeg'
Ajmal.addCommand(
  { pattern: 'tm ?(.*)', fromMe: true, desc: "Forward replied msg." },
  async (message, match) => {
    if (match == "") return await message.sendMessage("*Give me a jid*\nExample .mforward jid1 jid2 jid3 jid4 ...");
    if (!message.reply_message)
      return await message.sendMessage("*Reply to a Message*");
    const buff = await getBuffer(url)
    let options = {}
    options.ptt = true 
    options.quoted = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        
      },
      message: {
        "orderMessage": {
        	"itemCount" : 9999,
             "status": 1,
           "surface" : 1,
           "message": "A-J-M-A-L-SER",
           "orderTitle": "",
           "thumbnail": buff.buffer,
           "sellerJid": '0@s.whatsapp.net' 
        }
      }
    }
      options.contextInfo = {
           forwardingScore: 9999,
           isForwarded: true 
        } 
        const duration = [0,9999,55555,54545, 123]
options.duration = duration[Math.floor(5*Math.random())],
    match.match(parseJid).map((jid) => {
      forwardOrBroadCast(jid, message, options);
    });
  } 
);

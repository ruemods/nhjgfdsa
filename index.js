const {

  default: makeWASocket,

  Browsers,

  makeInMemoryStore,

  useMultiFileAuthState,

  getContentType,

} = require("@whiskeysockets/baileys");

const fs = require("fs");
const web = require ('./lib/server')
const { serialize } = require("./lib/serialize");

const { Message, Image, Sticker } = require("./lib/Base");

const pino = require("pino");

const path = require("path");

const events = require("./lib/event");

const got = require("got");

const config = require("./config");

const { PluginDB } = require("./lib/database/plugins");

const Greetings = require("./lib/Greetings");

const { async } = require("q");

const { decodeJid } = require("./lib");

const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//session id
var CryptoJS = require("crypto-js");
let cc = config.SESSION_ID.replace(/X-BOT-MD:/g, "");
async function MakeSession(){
if (!fs.existsSync(__dirname + '/lib/auth_info_baileys/creds.json')) {
    if(cc.length<30){
    const axios = require('axios');
    let { data } = await axios.get('https://paste.c-net.org/'+cc)
    await fs.writeFileSync(__dirname + '/lib/auth_info_baileys/creds.json', atob(data), "utf8")    
    } else {
	 var c = atob(cc)
         await fs.writeFileSync(__dirname + '/lib/auth_info_baileys/creds.json', c, "utf8")    
    }
}
}
MakeSession()

const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
            version = [2, 2204, 13]
        }
        return version
}
//Singmulti()

require("events").EventEmitter.defaultMaxListeners = 0;

fs.readdirSync(__dirname + "/lib/database/").forEach((plugin) => {

  if (path.extname(plugin).toLowerCase() == ".js") {

    require(__dirname + "/lib/database/" + plugin);

  }

});


async function Sparky() {

  const { state, saveCreds } = await useMultiFileAuthState(

    "./lib/auth_info_baileys/",

    pino({ level: "silent" })

  )

  console.log("Syncing Database");

  await config.DATABASE.sync();

  let conn = makeWASocket({

    logger: pino({ level: "silent" }),

    auth: state,

    printQRInTerminal: true,

    generateHighQualityLinkPreview: true,

    browser: Browsers.macOS("Desktop"),

    fireInitQueries: false,

    shouldSyncHistoryMessage: false,

    downloadHistory: false,

    syncFullHistory: false,

    getMessage: async (key) =>

      (store.loadMessage(key.id) || {}).message || {

        conversation: null,

      },

  });

  store.bind(conn.ev);

  setInterval(() => {

    store.writeToFile("./lib/Db/store.json");

  }, 30 * 1000);

  conn.ev.on("creds.update", saveCreds);

  conn.ev.on("contacts.update", (update) => {

    for (let contact of update) {

      let id = decodeJid(contact.id);

      if (store && store.contacts)

        store.contacts[id] = { id, name: contact.notify };

    }

  });

  conn.ev.on("connection.update", async (s) => {

    const { connection, lastDisconnect } = s;

    if (connection === "connecting") {

      console.log("Aswin-MD");

      console.log("READING THE SESSION 🤓✨");

    }

    if (connection === "open") {

      console.log("SUCESSFULY CONNECTED TO WHATSAPP 😯");

      console.log("INSTALLING EXTERNAL PLUGINS 🤯😵‍💫");

      let plugins = await PluginDB.findAll();

      plugins.map(async (plugin) => {

        if (!fs.existsSync("./plugins/" + plugin.dataValues.name + ".js")) {

          console.log(plugin.dataValues.name);

          var response = await got(plugin.dataValues.url);

          if (response.statusCode == 200) {

            fs.writeFileSync(

              "./plugins/" + plugin.dataValues.name + ".js",

              response.body

            );

            require(__dirname + "/plugins/" + plugin.dataValues.name + ".js");

          }

        }

      });

      console.log("PLUGIN'S INSTALLED 👌");

      fs.readdirSync(__dirname + "/plugins").forEach((plugin) => {

        if (path.extname(plugin).toLowerCase() == ".js") {

          require(__dirname + "/plugins/" + plugin);

        }

      });

      console.log("X-BOT-MD STARTED 🗿🙌");

      let str = `_*x ʙᴏᴛ ᴍᴅ sᴛᴀʀᴛᴇᴅ!*_${readMore}\n\n*ᴠᴇʀsɪᴏɴ : ${

        require(__dirname + "/package.json").version

      }*\n*ᴘʟᴜɢɪɴs : ${events.commands.length}*\n*ᴍᴏᴅᴇ : ${

        config.WORK_TYPE

      }*\n*ᴘʀᴇғɪx : ${
      
      config.HANDLERS
      
      }*\n*sᴜᴅᴏ : ${
      
      config.SUDO
      
      }*`;

      conn.sendMessage(conn.user.id, { text: str });

      try {

        conn.ev.on("group-participants.update", async (data) => {

          Greetings(data, conn);

        });

        conn.ev.on("messages.upsert", async (m) => {

          if (m.type !== "notify") return;

          const ms = m.messages[0];

          let msg = await serialize(JSON.parse(JSON.stringify(ms)), conn,store);

          if (!msg.message) return;

          if (msg.body[1] && msg.body[1] == " ")

            msg.body = msg.body[0] + msg.body.slice(2);

          let text_msg = msg.body;

          msg.store = store;

          if (text_msg && config.LOGS)

            console.log(

              `At : ${

                msg.from.endsWith("@g.us")

                  ? (await conn.groupMetadata(msg.from)).subject

                  : msg.from

              }\nFrom : ${msg.sender}\nMessage:${text_msg}`

            );
          ///stst view
          if (msg.key.remoteJid === 'status@broadcast' && 'true') {
			                	setTimeout(() => {
			    	             conn.readMessages([msg.key])
					             let typ = getContentType(msg.message)
				    	         console.log((/protocolMessage/i.test(typ)) ? `${msg.key.participant.split('@')[0]} Deleted status❗` : 'View user status : ' + msg.key.participant.split('@')[0]);
				                }, 500);
          }

          events.commands.map(async (command) => {

            if (

              command.fromMe &&

              !config.SUDO.split(",").includes(

                msg.sender.split("@")[0] || !msg.isSelf

              )

            )

              return;

            let comman;

            if (text_msg) {

              comman = text_msg

                ? text_msg[0] +

                  text_msg.slice(1).trim().split(" ")[0].toLowerCase()

                : "";

              msg.prefix = new RegExp(config.HANDLERS).test(text_msg)

                ? text_msg.split("").shift()

                : ",";

            }

            if (command.pattern && command.pattern.test(comman)) {

              var match;

              try {

                match = text_msg.replace(new RegExp(comman, "i"), "").trim();

              } catch {

                match = false;

              }

              whats = new Message(conn, msg, ms);

              command.function(whats, match, msg, conn);

            } else if (text_msg && command.on === "text") {

              whats = new Message(conn, msg, ms);

              command.function(whats, text_msg, msg, conn, m);

            } else if (

              (command.on === "image" || command.on === "photo") &&

              msg.type === "imageMessage"

            ) {

              whats = new Image(conn, msg, ms);

              command.function(whats, text_msg, msg, conn, m, ms);

            } else if (

              command.on === "sticker" &&

              msg.type === "stickerMessage"

            ) {

              whats = new Sticker(conn, msg, ms);

              command.function(whats, msg, conn, m, ms);

            }

          });

        });

      } catch (e) {

        console.log(e + "\n\n\n\n\n" + JSON.stringify(msg));

      }

    }

    if (connection === "close") {

      console.log(s);

      console.log(

        "Connection closed with bot. Please put New Session ID again."

      );

      Sparky().catch((err) => console.log(err));

    } else {

      /*

       */

    }

  });

  process.on("uncaughtException", async (err) => {

    let error = err.message;

    await conn.sendMessage(conn.user.id, { text: error });

    console.log(err);

  });

}
web ()
setTimeout(() => {

  Sparky().catch((err) => console.log(err));

}, 3000);

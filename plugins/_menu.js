const _0xf3eaed=_0x3df2;(function(_0x411408,_0x1a0619){const _0x4b2dc2=_0x3df2,_0x29c201=_0x411408();while(!![]){try{const _0x307d23=-parseInt(_0x4b2dc2(0x201))/0x1*(parseInt(_0x4b2dc2(0x1e8))/0x2)+parseInt(_0x4b2dc2(0x1f8))/0x3*(parseInt(_0x4b2dc2(0x1f1))/0x4)+-parseInt(_0x4b2dc2(0x1ee))/0x5+parseInt(_0x4b2dc2(0x1e6))/0x6*(-parseInt(_0x4b2dc2(0x209))/0x7)+parseInt(_0x4b2dc2(0x1f2))/0x8+parseInt(_0x4b2dc2(0x208))/0x9*(parseInt(_0x4b2dc2(0x1e3))/0xa)+parseInt(_0x4b2dc2(0x1f9))/0xb;if(_0x307d23===_0x1a0619)break;else _0x29c201['push'](_0x29c201['shift']());}catch(_0x487b9c){_0x29c201['push'](_0x29c201['shift']());}}}(_0x4015,0x33995));const events=require('../lib/event'),{command,isPrivate,tiny,serif_B,clockString}=require(_0xf3eaed(0x1e0)),{OWNER_NAME,BOT_NAME}=require(_0xf3eaed(0x1db)),{hostname,uptime}=require('os');function _0x3df2(_0x141980,_0x478390){const _0x401595=_0x4015();return _0x3df2=function(_0x3df2ac,_0x540075){_0x3df2ac=_0x3df2ac-0x1cf;let _0x1c9360=_0x401595[_0x3df2ac];return _0x1c9360;},_0x3df2(_0x141980,_0x478390);}command({'pattern':'menu','fromMe':isPrivate,'desc':_0xf3eaed(0x1dd),'dontAddCommandList':!![]},async(_0x8fd401,_0x59a0b5)=>{const _0x4e7297=_0xf3eaed;if(_0x59a0b5)for(let _0x14b3dc of events[_0x4e7297(0x1fc)]){if(_0x14b3dc[_0x4e7297(0x1e9)]['test'](_0x8fd401['prefix']+_0x59a0b5))_0x8fd401[_0x4e7297(0x1fd)](_0x4e7297(0x1de)+_0x8fd401[_0x4e7297(0x1cf)]+_0x59a0b5[_0x4e7297(0x202)]()+_0x4e7297(0x1f4)+_0x14b3dc[_0x4e7297(0x1d4)]+_0x4e7297(0x1da));}else{let {prefix:_0x27c1d5}=_0x8fd401,[_0x45ae10,_0x516bca]=new Date()['toLocaleString'](_0x4e7297(0x1fb),{'timeZone':_0x4e7297(0x207)})[_0x4e7297(0x1d5)](','),_0x486edd='╭━━━━━ᆫ\x20'+BOT_NAME+_0x4e7297(0x200)+OWNER_NAME+_0x4e7297(0x1ff)+_0x27c1d5+'\x0a┃\x20⎆\x20\x20*HOST\x20NAME*\x20:'+hostname()['split']('-')[0x0]+_0x4e7297(0x1d2)+_0x45ae10+_0x4e7297(0x1f7)+_0x516bca+_0x4e7297(0x1d3)+events[_0x4e7297(0x1fc)][_0x4e7297(0x1d7)]+_0x4e7297(0x1e7)+clockString(uptime())+_0x4e7297(0x1f5),_0x4d6c9c=[],_0x5b8d47,_0x113400=[];return events['commands'][_0x4e7297(0x1dc)]((_0x1dceb9,_0x47baf2)=>{const _0x5738cf=_0x4e7297;_0x1dceb9[_0x5738cf(0x1e9)]&&(_0x5b8d47=_0x1dceb9[_0x5738cf(0x1e9)][_0x5738cf(0x203)]()[_0x5738cf(0x20a)](/(\W*)([A-Za-züşiğ öç1234567890]*)/)[0x2]);if(!_0x1dceb9['dontAddCommandList']&&_0x5b8d47!==undefined){let _0x13fa27;!_0x1dceb9[_0x5738cf(0x1d1)]?_0x13fa27=_0x5738cf(0x1ea):_0x13fa27=_0x1dceb9[_0x5738cf(0x1d1)][_0x5738cf(0x1e1)]();_0x4d6c9c[_0x5738cf(0x1e5)]({'cmd':_0x5b8d47,'type':_0x13fa27});if(!_0x113400[_0x5738cf(0x1fa)](_0x13fa27))_0x113400[_0x5738cf(0x1e5)](_0x13fa27);}}),_0x4d6c9c['sort'](),_0x113400['sort']()[_0x4e7297(0x1d0)](_0x3b582a=>{const _0x247729=_0x4e7297;_0x486edd+=_0x247729(0x1f3)+_0x3b582a+_0x247729(0x1fe);let _0x3760ae=_0x4d6c9c[_0x247729(0x1f0)](({type:_0x5480cf})=>_0x5480cf==_0x3b582a);_0x3760ae[_0x247729(0x1d0)](({cmd:_0x2e1b0a},_0x403490)=>{const _0x4ea3b0=_0x247729;_0x486edd+='\x0a┃\x20\x20│\x20⛥\x20\x20'+_0x2e1b0a[_0x4ea3b0(0x202)]();}),_0x486edd+=_0x247729(0x205);}),_0x486edd+=_0x4e7297(0x206),_0x486edd+=_0x4e7297(0x1df),await _0x8fd401[_0x4e7297(0x1e2)][_0x4e7297(0x1d6)](_0x8fd401[_0x4e7297(0x1f6)],{'image':{'url':_0x4e7297(0x1ef)},'caption':_0x486edd,'footer':tiny('Aswin-MD\x0aVersion\x20:\x20'+require('../package.json')[_0x4e7297(0x1eb)])});}}),command({'pattern':_0xf3eaed(0x204),'fromMe':isPrivate,'desc':'Show\x20All\x20commands','dontAddCommandList':!![]},async(_0x46fde4,_0xc9b9d4,{prefix:_0x17f506})=>{const _0x3c63cf=_0xf3eaed;let _0x202d84=_0x3c63cf(0x1ec)+tiny(_0x3c63cf(0x1d8))+_0x3c63cf(0x1d9),_0x3be857=[],_0x12a4c5,_0x7511ab;return events['commands']['map'](_0x411b9a=>{const _0x4d84c0=_0x3c63cf;_0x411b9a[_0x4d84c0(0x1e9)]&&(_0x12a4c5=_0x411b9a[_0x4d84c0(0x1e9)][_0x4d84c0(0x203)]()[_0x4d84c0(0x20a)](/(\W*)([A-Za-züşiğ öç1234567890]*)/)[0x2]),_0x411b9a[_0x4d84c0(0x1d4)]?_0x7511ab=_0x411b9a[_0x4d84c0(0x1d4)]:_0x7511ab=![],!_0x411b9a['dontAddCommandList']&&_0x12a4c5!==undefined&&_0x3be857[_0x4d84c0(0x1e5)]({'cmd':_0x12a4c5,'desc':_0x7511ab});}),_0x3be857[_0x3c63cf(0x1e4)](),_0x3be857['forEach'](({cmd:_0x519481,desc:_0x5ce909},_0x424b96)=>{const _0x356802=_0x3c63cf;_0x202d84+='├\x20'+(_0x424b96+=0x1)+'\x20*'+_0x519481[_0x356802(0x202)]()+'*\x0a';if(_0x5ce909)_0x202d84+='├\x20'+('use\x20:\x20'+_0x5ce909)+'\x0a';}),_0x202d84+=_0x3c63cf(0x1ed),await _0x46fde4[_0x3c63cf(0x1fd)](_0x202d84);});function _0x4015(){const _0x16a01b=['map','Show\x20All\x20commands','```Command\x20:\x20','𝗦𝗣𝗔𝗥𝗞𝗬\x20𝗠𝗢𝗗𝗦\x20😌👑','../lib','toLowerCase','client','209680tWaSbW','sort','push','18aGwYLH','\x20\x0a┃\x20⎆\x20\x20*UPTIME*\x20:\x20','2SbZmWa','pattern','misc','version','╭───〔\x20','╰──────────────────────────','1792590zQNDST','https://i.imgur.com/HkSsfme.jpeg','filter','24EzInFs','2118752lKGBOk','\x0a┃\x20\x20╭─────────────◆\x0a┃\x20\x20│\x20⦿----\x20','\x0aDescription\x20:\x20','\x20\x0a┃\x20⎆\x20\x20*DEVELOPER*\x20:\x20\x20917012984396\x0a╰━━━━━━━━━━━━━━━\x0a╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\x0a╽','jid','\x0a┃\x20⎆\x20\x20*TIME*\x20:\x20','141285udWfjn','1556973baFOpV','includes','en-IN','commands','reply','\x20----⦿\x0a┃\x20\x20╰┬────────────◆\x0a┃\x20\x20┌┤','\x0a┃\x20⎆\x20\x20*PREFIX*\x20:\x20','\x20ᄀ━━━\x0a┃\x20⎆\x20\x20*OWNER*\x20:\x20\x20','160851KGeSRE','trim','toString','list','\x0a┃\x20\x20╰─────────────◆','\x20╰━━━━━━━━━━━──⊷\x0a','Asia/Kolkata','36zUUxZp','98259wiKEoT','match','prefix','forEach','type','\x0a┃\x20⎆\x20\x20*DATE*\x20:\x20','\x0a┃\x20⎆\x20\x20*COMMANDS*\x20:\x20','desc','split','sendMessage','length','Aswin-MD\x20command\x20list','\x20〕────\x0a','```','../config'];_0x4015=function(){return _0x16a01b;};return _0x4015();}

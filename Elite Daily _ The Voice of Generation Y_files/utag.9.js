//tealium universal tag - utag.9 ut4.0.201505202250, Copyright 2015 Tealium.com Inc. All Rights Reserved.
if(typeof utag.ut=="undefined"){utag.ut={};}
utag.ut.libloader2=function(o,a,b,c,l){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=o.src;if(o.id){b.id=o.id};if(typeof o.cb=='function'){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.hFlag){b.hFlag=1;o.cb()}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb()}}}
l=o.loc||'head';c=a.getElementsByTagName(l)[0];if(c){if(l=='script'){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}
utag.DB("Attach to "+l+": "+o.src)}}
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim="&";u.kvp_delim="=";u.type="advanced";u.domain="tags.crwdcntrl.net"||"tags.crwdcntrl.net";u.client="6213";u.ns="_cc"+u.client;u.data={};u.base_url="//"+u.domain+"/c/"+u.client+"/"+((u.type=="advanced")?"cc":"cc_af")+".js?ns="+u.ns;u.map={};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.lotame_callback=function(){if(u.type=="advanced"){var d;for(d in u.data){window[u.ns].add(d,u.data[d]);}
window[u.ns].bcp();}else{window[u.ns].bcp();}
utag.ut.libloader2({src:"//ad.crwdcntrl.net/5/c=6213/pe=y/var=ed_ccauds",cb:u.lotame_cbaud});utag.ut.libloader2({src:"//ad.crwdcntrl.net/5/c=991/pe=y/var=ccauds",cb:u.lotame_cbaud});}
u.lotame_cbaud=function(){if(typeof(ed_ccauds)!="undefined"&&typeof(ccauds)!="undefined"){function setCCAuds(ccaudkey,ccaudobj){var dartCCKey=ccaudkey;var dartCC="";if(typeof(ccaudobj)!='undefined')
{for(var cci=0;cci<ccaudobj.Profile.Audiences.Audience.length;cci++)
{if(cci>0)dartCC+=",";dartCC+=ccaudobj.Profile.Audiences.Audience[cci].abbr;}}
googletag.cmd.push(function(){googletag.pubads().setTargeting(dartCCKey,[dartCC]);});}
setCCAuds('ed_ccaud',ed_ccauds);setCCAuds('ccaud',ccauds);if(typeof window.getAds=="function"){window.getAds();}}}
utag.ut.libloader2({src:u.base_url,cb:u.lotame_callback,id:"LOTCC_"+u.client});}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('9','elitedaily.main');}catch(e){}

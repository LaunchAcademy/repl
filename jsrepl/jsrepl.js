window.__BAKED_JSREPL_BUILD__ = true;
(function(){var l,j,k,m,p,n,q,r,o=[].slice,i=function(h,a){return function(){return h.apply(a,arguments)}},s=function(h,a){function c(){this.constructor=h}for(var b in a)u.call(a,b)&&(h[b]=a[b]);c.prototype=a.prototype;h.prototype=new c;h.__super__=a.prototype;return h},u={}.hasOwnProperty;j=document.getElementById("jsrepl-script");if(j!=null)l=j.src.split("/").slice(0,-1).join("/"),p=l+"/sandbox.html";else throw Error('JSREPL script element cannot be found. Make sure you have the ID "jsrepl-script" on it.');
m=function(){function h(){var a;a=function(c){return function(){c.head=document.getElementsByTagName("head")[0];return c.body=document.getElementsByTagName("body")[0]}}(this);a();this.loadfns=[a];window.onload=function(c){return function(){var b,a,f,e,g;e=c.loadfns;g=[];for(a=0,f=e.length;a<f;a++)b=e[a],g.push(b());return g}}(this);this.iframe=null}h.prototype._appendChild=function(a,c){var b;b=function(b){return function(){return b[a].appendChild(c)}}(this);return this[a]!=null?b():this.loadfns.push(b)};
h.prototype.createSandbox=function(a){this.iframe!=null&&this.body.removeChild(this.iframe);this.iframe=document.createElement("iframe");this.iframe.src=p;this.iframe.style.display="none";this.iframe.onload=function(c){return function(){return a(c.iframe.contentWindow)}}(this);return this._appendChild("body",this.iframe)};return h}();j=function(){function h(){this.listeners={}}h.prototype.makeArray=function(a){Object.prototype.toString.call(a)!=="[object Array]"&&(a=[a]);return a};h.prototype.on=
function(a,c){var b,d,f,e;if(typeof c==="function"){a=this.makeArray(a);f=[];for(b=0,d=a.length;b<d;b++)e=a[b],this.listeners[e]==null?f.push(this.listeners[e]=[c]):f.push(this.listeners[e].push(c));return f}};h.prototype.off=function(a,c){var b,d,f,e,g,a=this.makeArray(a);g=[];for(d=0,f=a.length;d<f;d++)b=a[d],e=this.listeners[b],e!=null&&(c!=null?(b=e.indexOf(c),b>-1?g.push(e.splice(b,1)):g.push(void 0)):g.push(this.listeners[b]=[]));return g};h.prototype.fire=function(a,c){var b,d,f,e,c=this.makeArray(c);
d=this.listeners[a];if(d!=null){c.push(a);var g;g=[];for(f=0,e=d.length;f<e;f++)b=d[f],g.push(b);e=[];for(d=0,f=g.length;d<f;d++)b=g[d],e.push(b.apply(this,c));return e}};h.prototype.once=function(a,c){var b,d,f,e,g,a=this.makeArray(a);b=function(e){return function(){var d,g,f,h;d=1<=arguments.length?o.call(arguments,0):[];for(g=0,f=a.length;g<f;g++)h=a[g],e.off(h,b);return c.apply(null,d)}}(this);e=[];for(d=0,f=a.length;d<f;d++)g=a[d],e.push(this.on(g,b));return e};return h}();r="Worker"in window;
n=function(h){function a(c,b,a){var f;this.input_server=b;a==null&&(a={});this.onmsg=i(this.onmsg,this);var e,g,h;h=[];for(e=0,g=c.length;e<g;e++)b=c[e],h.push(l+"/"+b);this.baseScripts=h;this.loader=new m;for(f in a)c=a[f],typeof c==="function"&&(a[f]=[c]);this.listeners=a}s(a,h);a.prototype.onmsg=function(a){var b;try{return b=JSON.parse(a.data),this.fire(b.type,[b.data])}catch(d){}};a.prototype.load=function(a,b){var d,f,e;b==null&&(b=true);d=this.baseScripts.concat(a);f=d.shift();this.worker!=
null&&this.kill();e=function(a){return function(){a.post({type:"importScripts",data:d});if(a.input_server!=null)return a.post({type:"set_input_server",data:a.input_server})}}(this);window.removeEventListener("message",this.onmsg,false);return!r||!b?this.loader.createSandbox(function(a){return function(b){a.worker=b;a.workerIsIframe=true;window.addEventListener("message",a.onmsg,false);return e()}}(this)):(this.worker=new Worker(f),this.workerIsIframe=false,this.worker.addEventListener("message",this.onmsg,
false),e())};a.prototype.post=function(a){a=JSON.stringify(a);return this.workerIsIframe?this.worker.postMessage(a,"*"):this.worker.postMessage(a)};a.prototype.kill=function(){var a;typeof(a=this.worker).terminate==="function"&&a.terminate();if(this.loader.body!=null&&this.loader.iframe)return this.loader.body.removeChild(this.loader.iframe),delete this.loader.iframe};return a}(j);q=function(){var h,a,c;h={firefox_3:/firefox\/3/i,opera:/opera/i,chrome:/chrome/i};for(a in h)if(c=h[a],c.test(window.navigator.userAgent))return a}();
k=function(h){function a(c){var b,d,f,e,g,h,t;b=c!=null?c:{};t=b.result;c=b.error;f=b.input;g=b.output;h=b.progress;this.timeout=b.timeout;e=b.input_server;this.getLangConfig=i(this.getLangConfig,this);this.rawEval=i(this.rawEval,this);this.eval=i(this.eval,this);this.checkLineEnd=i(this.checkLineEnd,this);this.loadLanguage=i(this.loadLanguage,this);this.off=i(this.off,this);this.on=i(this.on,this);a.__super__.constructor.call(this);window.openDatabase!=null&&(d=openDatabase("replit_input","1.0",
"Emscripted input",1024),d.transaction(function(a){a.executeSql("DROP TABLE IF EXISTS input");return a.executeSql("CREATE TABLE input (text)")}));e==null&&(e={});e.input_id=Math.floor(Math.random()*9007199254740992)+1;this.lang=null;this.on("input",f);b=["sandbox.js"];window.__BAKED_JSREPL_BUILD__||(b=b.concat(["util/polyfills.js","util/mtwister.js"]));this.sandbox=new n(b,e,{output:g,input:function(a){return function(){return a.fire("input",function(b){return a.sandbox.post({type:"input.write",data:b})})}}(this),
error:c,result:t,progress:h,db_input:function(a){return function(){return a.fire("input",function(b){a.sandbox.fire("recieved_input",[b]);return d.transaction(function(a){return a.executeSql("INSERT INTO input (text) VALUES ('"+b+"')",[])})})}}(this),server_input:function(a){return function(){return a.fire("input",function(b){var c,d;a.sandbox.fire("recieved_input",[b]);c=(e.url||"/emscripten/input/")+e.input_id;if(e.cors)if(d=new XMLHttpRequest,"withCredentials"in d)d.open("POST",c,true);else if(typeof XDomainRequest!==
"undefined"&&XDomainRequest!==null)d=new XDomainRequest,d.open("POST",c);else throw Error("CORS not supported on your browser");else d=new XMLHttpRequest,d.open("POST",c,true);return d.send("input="+b)})}}(this)})}s(a,h);a.prototype.on=function(c,b){var d,f,e,g,c=this.makeArray(c);e=[];for(d=0,f=c.length;d<f;d++)g=c[d],g==="input"?e.push(a.__super__.on.call(this,"input",b)):e.push(this.sandbox.on(g,b));return e};a.prototype.off=function(c,b){var d,f,e,g,c=this.makeArray(c);e=[];for(d=0,f=c.length;d<
f;d++)g=c[d],g==="input"?e.push(a.__super__.off.call(this,"input",b)):e.push(this.sandbox.off(g,b));return e};a.prototype.loadLanguage=function(c,b,d){var f,e;typeof b==="function"&&(f=[b,void 0],d=f[0],b=f[1]);if(a.prototype.Languages.prototype[c]==null)throw Error("Language "+c+" not supported.");this.current_lang_name=c;this.lang=a.prototype.Languages.prototype[c];if(d!=null)this.sandbox.once("ready",d);return this.sandbox.load(function(){var a,b,c,d;c=this.lang.scripts;d=[];for(a=0,b=c.length;a<
b;a++)e=c[a],typeof e==="object"?d.push(e[q]||e["default"]):d.push(e);return d}.call(this).concat([this.lang.engine]),b)};a.prototype.checkLineEnd=function(a,b){return/\n\s*$/.test(a)?b(false):(this.sandbox.once("indent",b),this.sandbox.post({type:"getNextLineIndent",data:a}))};a.prototype.eval=function(a,b){var d,f,e,g,h;!this.sandbox.workerIsIframe&&this.timeout!=null&&this.timeout.time&&this.timeout.callback&&(g=null,f=function(a){return function(){a.sandbox.fire("timeout");return a.timeout.callback()?
h():g=setTimeout(f,a.timeout.time)}}(this),g=setTimeout(f,this.timeout.time),e=function(a){return function(){var b,c;2<=arguments.length?o.call(arguments,0,b=arguments.length-1):b=0;c=arguments[b++];clearTimeout(g);if(c==="input")return a.once("recieved_input",function(){return g=setTimeout(f,a.timeout.time)}),d()}}(this),d=function(a){return function(){return a.once(["result","error","input"],e)}}(this),h=function(a){return function(){return a.off(["result","error","input"],e)}}(this),d());if(typeof b===
"function")this.once(["result","error"],function(){return function(){var a,c,d;a=2<=arguments.length?o.call(arguments,0,c=arguments.length-1):(c=0,[]);d=arguments[c++];return d==="error"?b(a[0],null):b(null,a[0])}}(this));return this.sandbox.post({type:"engine.Eval",data:a})};a.prototype.rawEval=function(a){return this.sandbox.post({type:"engine.RawEval",data:a})};a.prototype.getLangConfig=function(c){return a.prototype.Languages.prototype[c||this.current_lang_name]||null};return a}(j);k.prototype.Languages=
function(){return function(){}}();k.prototype.__test__=function(){return function(){}}();k.prototype.__test__.prototype.Loader=m;k.prototype.__test__.prototype.EventEmitter=j;k.prototype.__test__.prototype.Sandbox=n;this.JSREPL=k}).call(this);
JSREPL.prototype.Languages.prototype={qbasic:{system_name:"qbasic",name:"Quick Basic",extension:"bas",matchings:[],scripts:[{"default":["engines/qbasic-default.js"]}],includes:[],engine:"langs/qbasic/jsrepl_qbasic.js",minifier:"closure"},scheme:{system_name:"scheme",name:"Scheme",extension:"scm",matchings:[["(",")"],["[","]"]],scripts:[{"default":["engines/scheme-default.js"]}],includes:[],engine:"langs/scheme/jsrepl_scheme.js",minifier:"closure_es5"},apl:{system_name:"apl",name:"APL",extension:"apl",
matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/apl-default.js"]}],includes:[],engine:"langs/apl/jsrepl_apl.js",minifier:"yui"},javascript:{system_name:"javascript",name:"JavaScript",extension:"js",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/javascript-default.js"]}],includes:[],engine:"langs/javascript/jsrepl_js.js",minifier:"closure"},coffeescript:{system_name:"coffeescript",name:"CoffeeScript",extension:"coffee",matchings:[["(",")"],["[","]"],
["{","}"]],scripts:[{"default":["engines/coffeescript-default.js"]}],includes:[],engine:"langs/coffee-script/jsrepl_coffee.js",minifier:"uglify"},brainfuck:{system_name:"brainfuck",name:"Brainfuck",extension:"bf",matchings:[["[","]"]],scripts:[{"default":["engines/brainfuck-default.js"]}],includes:[],engine:"langs/brainfuck/jsrepl_brainfuck.js",minifier:"closure"},unlambda:{system_name:"unlambda",name:"Unlambda",extension:"unl",matchings:[],scripts:[{"default":["engines/unlambda-default.js"]}],includes:[],
engine:"langs/unlambda/jsrepl_unlambda.js",minifier:"closure"},lolcode:{system_name:"lolcode",name:"LOLCODE",extension:"lol",matchings:[],scripts:[{"default":["engines/lolcode-default.js"]}],includes:[],engine:"langs/lolcode/jsrepl_lolcode.js",minifier:"closure"},kaffeine:{system_name:"kaffeine",name:"Kaffeine",extension:"k",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/kaffeine-default.js"]}],includes:[],engine:"langs/kaffeine/jsrepl_kaffeine.js",minifier:"closure"},move:{system_name:"move",
name:"Move",extension:"mv",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/move-default.js"]}],includes:[],engine:"langs/move/jsrepl_move.js",minifier:"closure"},traceur:{system_name:"traceur",name:"Traceur",extension:"js",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/traceur-default.js"]}],includes:[],engine:"langs/traceur/jsrepl_traceur.js",minifier:"closure_es5"},emoticon:{system_name:"emoticon",name:"Emoticon",extension:"emo",matchings:[["(",")"]],
scripts:[{"default":["engines/emoticon-default.js"]}],includes:[],engine:"langs/emoticon/jsrepl_emoticon.js",minifier:"closure"},bloop:{system_name:"bloop",name:"Bloop/Floop",extensions:"bloop",matchings:[],scripts:[{"default":["engines/bloop-default.js"]}],includes:[],engine:"langs/bloop/jsrepl_bloop.js",minifier:"closure"},forth:{system_name:"forth",name:"Forth",extensions:"4th",matchings:[["(",")"],[":",";"]],scripts:[{"default":["engines/forth-default.js"]}],includes:[],engine:"langs/forth/jsrepl_forth.js",
minifier:"closure"},lua:{system_name:"lua",name:"Lua",extension:"lua",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/lua-default.js"]}],includes:[],engine:"langs/lua/jsrepl_lua.js",minifier:"none",emscripted:true},python:{system_name:"python",name:"Python",extension:"py",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{opera:["engines/python-opera.js"],"default":["engines/python-default.js"]}],includes:["extern/python/unclosured","extern/python/closured","extern/python/reloop-closured"],
engine:"langs/python/jsrepl_python.js",minifier:"none",emscripted:true},ruby:{system_name:"ruby",name:"Ruby",extension:"rb",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{opera:["engines/ruby-opera.js"],firefox_3:["engines/ruby-firefox_3.js"],"default":["engines/ruby-default.js"]}],includes:["extern/ruby/dist/lib"],engine:"langs/ruby/jsrepl_ruby.js",minifier:"none",emscripted:true},roy:{system_name:"roy",name:"Roy",extension:"roy",matchings:[["(",")"],["[","]"],["{","}"]],scripts:[{"default":["engines/roy-default.js"]}],
includes:[],engine:"langs/roy/jsrepl_roy.js",minifier:"closure"}};

(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=r(a);fetch(a.href,u)}})();class D extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      .container {
        display: block;
        background: url(images/hero/manzdev.png);
        background-repeat: repeat;
        width: 95px;
        height: 120px;
        transform: translate(20px, 8px);
        animation: view 3s steps(3) alternate infinite;
      }

      :host([life="high"]) .container { background-position-y: 0px; }
      :host([life="god"]) .container { background-position-y: -120px; }
      :host([life="medium"]) .container { background-position-y: -240px; }
      :host([life="low"]) .container { background-position-y: -360px; }
      :host([life="dead"]) .container { background-position: -380px -360px!important; }

      :host(.shoot) .container {
        background-position-x: 190px!important;
      }

      @keyframes view {
        0% { background-position-x: 0; }
        100% { background-position-x: -285px; }
      }
    `}setFace(_){this.setAttribute("life",_)}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${D.styles}</style>
    <div class="container"></div>
    `}}customElements.define("doom-hero",D);var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(w){(function(){var _=function(){this.init()};_.prototype={init:function(){var e=this||r;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator=typeof window<"u"&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var t=this||r;if(e=parseFloat(e),t.ctx||b(),typeof e<"u"&&e>=0&&e<=1){if(t._volume=e,t._muted)return t;t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),l=0;l<o.length;l++){var d=t._howls[n]._soundById(o[l]);d&&d._node&&(d._node.volume=d._volume*e)}return t}return t._volume},mute:function(e){var t=this||r;t.ctx||b(),t._muted=e,t.usingWebAudio&&t.masterGain.gain.setValueAtTime(e?0:t._volume,r.ctx.currentTime);for(var n=0;n<t._howls.length;n++)if(!t._howls[n]._webAudio)for(var o=t._howls[n]._getSoundIds(),l=0;l<o.length;l++){var d=t._howls[n]._soundById(o[l]);d&&d._node&&(d._node.muted=e?!0:d._muted)}return t},stop:function(){for(var e=this||r,t=0;t<e._howls.length;t++)e._howls[t].stop();return e},unload:function(){for(var e=this||r,t=e._howls.length-1;t>=0;t--)e._howls[t].unload();return e.usingWebAudio&&e.ctx&&typeof e.ctx.close<"u"&&(e.ctx.close(),e.ctx=null,b()),e},codecs:function(e){return(this||r)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||r;if(e.state=e.ctx&&e.ctx.state||"suspended",e._autoSuspend(),!e.usingWebAudio)if(typeof Audio<"u")try{var t=new Audio;typeof t.oncanplaythrough>"u"&&(e._canPlayEvent="canplay")}catch{e.noAudio=!0}else e.noAudio=!0;try{var t=new Audio;t.muted&&(e.noAudio=!0)}catch{}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||r,t=null;try{t=typeof Audio<"u"?new Audio:null}catch{return e}if(!t||typeof t.canPlayType!="function")return e;var n=t.canPlayType("audio/mpeg;").replace(/^no$/,""),o=e._navigator?e._navigator.userAgent:"",l=o.match(/OPR\/(\d+)/g),d=l&&parseInt(l[0].split("/")[1],10)<33,i=o.indexOf("Safari")!==-1&&o.indexOf("Chrome")===-1,p=o.match(/Version\/(.*?) /),m=i&&p&&parseInt(p[1],10)<15;return e._codecs={mp3:!!(!d&&(n||t.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!n,opus:!!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(t.canPlayType('audio/wav; codecs="1"')||t.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!t.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!t.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(t.canPlayType("audio/x-m4b;")||t.canPlayType("audio/m4b;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(t.canPlayType("audio/x-mp4;")||t.canPlayType("audio/mp4;")||t.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!m&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!m&&t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(t.canPlayType("audio/x-flac;")||t.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||r;if(!(e._audioUnlocked||!e.ctx)){e._audioUnlocked=!1,e.autoUnlock=!1,!e._mobileUnloaded&&e.ctx.sampleRate!==44100&&(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var t=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var o=new Audio;o._unlocked=!0,e._releaseHtml5Audio(o)}catch{e.noAudio=!0;break}for(var l=0;l<e._howls.length;l++)if(!e._howls[l]._webAudio)for(var d=e._howls[l]._getSoundIds(),i=0;i<d.length;i++){var p=e._howls[l]._soundById(d[i]);p&&p._node&&!p._node._unlocked&&(p._node._unlocked=!0,p._node.load())}e._autoResume();var m=e.ctx.createBufferSource();m.buffer=e._scratchBuffer,m.connect(e.ctx.destination),typeof m.start>"u"?m.noteOn(0):m.start(0),typeof e.ctx.resume=="function"&&e.ctx.resume(),m.onended=function(){m.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",t,!0),document.removeEventListener("touchend",t,!0),document.removeEventListener("click",t,!0),document.removeEventListener("keydown",t,!0);for(var y=0;y<e._howls.length;y++)e._howls[y]._emit("unlock")}};return document.addEventListener("touchstart",t,!0),document.addEventListener("touchend",t,!0),document.addEventListener("click",t,!0),document.addEventListener("keydown",t,!0),e}},_obtainHtml5Audio:function(){var e=this||r;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var t=new Audio().play();return t&&typeof Promise<"u"&&(t instanceof Promise||typeof t.then=="function")&&t.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var t=this||r;return e._unlocked&&t._html5AudioPool.push(e),t},_autoSuspend:function(){var e=this;if(!(!e.autoSuspend||!e.ctx||typeof e.ctx.suspend>"u"||!r.usingWebAudio)){for(var t=0;t<e._howls.length;t++)if(e._howls[t]._webAudio){for(var n=0;n<e._howls[t]._sounds.length;n++)if(!e._howls[t]._sounds[n]._paused)return e}return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var o=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(o,o)}},3e4),e}},_autoResume:function(){var e=this;if(!(!e.ctx||typeof e.ctx.resume>"u"||!r.usingWebAudio))return e.state==="running"&&e.ctx.state!=="interrupted"&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):e.state==="suspended"||e.state==="running"&&e.ctx.state==="interrupted"?(e.ctx.resume().then(function(){e.state="running";for(var t=0;t<e._howls.length;t++)e._howls[t]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):e.state==="suspending"&&(e._resumeAfterSuspend=!0),e}};var r=new _,s=function(e){var t=this;if(!e.src||e.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}t.init(e)};s.prototype={init:function(e){var t=this;return r.ctx||b(),t._autoplay=e.autoplay||!1,t._format=typeof e.format!="string"?e.format:[e.format],t._html5=e.html5||!1,t._muted=e.mute||!1,t._loop=e.loop||!1,t._pool=e.pool||5,t._preload=typeof e.preload=="boolean"||e.preload==="metadata"?e.preload:!0,t._rate=e.rate||1,t._sprite=e.sprite||{},t._src=typeof e.src!="string"?e.src:[e.src],t._volume=e.volume!==void 0?e.volume:1,t._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:e.xhr&&e.xhr.withCredentials?e.xhr.withCredentials:!1},t._duration=0,t._state="unloaded",t._sounds=[],t._endTimers={},t._queue=[],t._playLock=!1,t._onend=e.onend?[{fn:e.onend}]:[],t._onfade=e.onfade?[{fn:e.onfade}]:[],t._onload=e.onload?[{fn:e.onload}]:[],t._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],t._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],t._onpause=e.onpause?[{fn:e.onpause}]:[],t._onplay=e.onplay?[{fn:e.onplay}]:[],t._onstop=e.onstop?[{fn:e.onstop}]:[],t._onmute=e.onmute?[{fn:e.onmute}]:[],t._onvolume=e.onvolume?[{fn:e.onvolume}]:[],t._onrate=e.onrate?[{fn:e.onrate}]:[],t._onseek=e.onseek?[{fn:e.onseek}]:[],t._onunlock=e.onunlock?[{fn:e.onunlock}]:[],t._onresume=[],t._webAudio=r.usingWebAudio&&!t._html5,typeof r.ctx<"u"&&r.ctx&&r.autoUnlock&&r._unlockAudio(),r._howls.push(t),t._autoplay&&t._queue.push({event:"play",action:function(){t.play()}}),t._preload&&t._preload!=="none"&&t.load(),t},load:function(){var e=this,t=null;if(r.noAudio){e._emit("loaderror",null,"No audio support.");return}typeof e._src=="string"&&(e._src=[e._src]);for(var n=0;n<e._src.length;n++){var o,l;if(e._format&&e._format[n])o=e._format[n];else{if(l=e._src[n],typeof l!="string"){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}o=/^data:audio\/([^;,]+);/i.exec(l),o||(o=/\.([^.]+)$/.exec(l.split("?",1)[0])),o&&(o=o[1].toLowerCase())}if(o||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),o&&r.codecs(o)){t=e._src[n];break}}if(!t){e._emit("loaderror",null,"No codec support for selected audio sources.");return}return e._src=t,e._state="loading",window.location.protocol==="https:"&&t.slice(0,5)==="http:"&&(e._html5=!0,e._webAudio=!1),new a(e),e._webAudio&&c(e),e},play:function(e,t){var n=this,o=null;if(typeof e=="number")o=e,e=null;else{if(typeof e=="string"&&n._state==="loaded"&&!n._sprite[e])return null;if(typeof e>"u"&&(e="__default",!n._playLock)){for(var l=0,d=0;d<n._sounds.length;d++)n._sounds[d]._paused&&!n._sounds[d]._ended&&(l++,o=n._sounds[d]._id);l===1?e=null:o=null}}var i=o?n._soundById(o):n._inactiveSound();if(!i)return null;if(o&&!e&&(e=i._sprite||"__default"),n._state!=="loaded"){i._sprite=e,i._ended=!1;var p=i._id;return n._queue.push({event:"play",action:function(){n.play(p)}}),p}if(o&&!i._paused)return t||n._loadQueue("play"),i._id;n._webAudio&&r._autoResume();var m=Math.max(0,i._seek>0?i._seek:n._sprite[e][0]/1e3),y=Math.max(0,(n._sprite[e][0]+n._sprite[e][1])/1e3-m),A=y*1e3/Math.abs(i._rate),T=n._sprite[e][0]/1e3,H=(n._sprite[e][0]+n._sprite[e][1])/1e3;i._sprite=e,i._ended=!1;var O=function(){i._paused=!1,i._seek=m,i._start=T,i._stop=H,i._loop=!!(i._loop||n._sprite[e][2])};if(m>=H){n._ended(i);return}var v=i._node;if(n._webAudio){var X=function(){n._playLock=!1,O(),n._refreshBuffer(i);var S=i._muted||n._muted?0:i._volume;v.gain.setValueAtTime(S,r.ctx.currentTime),i._playStart=r.ctx.currentTime,typeof v.bufferSource.start>"u"?i._loop?v.bufferSource.noteGrainOn(0,m,86400):v.bufferSource.noteGrainOn(0,m,y):i._loop?v.bufferSource.start(0,m,86400):v.bufferSource.start(0,m,y),A!==1/0&&(n._endTimers[i._id]=setTimeout(n._ended.bind(n,i),A)),t||setTimeout(function(){n._emit("play",i._id),n._loadQueue()},0)};r.state==="running"&&r.ctx.state!=="interrupted"?X():(n._playLock=!0,n.once("resume",X),n._clearTimer(i._id))}else{var N=function(){v.currentTime=m,v.muted=i._muted||n._muted||r._muted||v.muted,v.volume=i._volume*r.volume(),v.playbackRate=i._rate;try{var S=v.play();if(S&&typeof Promise<"u"&&(S instanceof Promise||typeof S.then=="function")?(n._playLock=!0,O(),S.then(function(){n._playLock=!1,v._unlocked=!0,t?n._loadQueue():n._emit("play",i._id)}).catch(function(){n._playLock=!1,n._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),i._ended=!0,i._paused=!0})):t||(n._playLock=!1,O(),n._emit("play",i._id)),v.playbackRate=i._rate,v.paused){n._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}e!=="__default"||i._loop?n._endTimers[i._id]=setTimeout(n._ended.bind(n,i),A):(n._endTimers[i._id]=function(){n._ended(i),v.removeEventListener("ended",n._endTimers[i._id],!1)},v.addEventListener("ended",n._endTimers[i._id],!1))}catch(ae){n._emit("playerror",i._id,ae)}};v.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(v.src=n._src,v.load());var oe=window&&window.ejecta||!v.readyState&&r._navigator.isCocoonJS;if(v.readyState>=3||oe)N();else{n._playLock=!0,n._state="loading";var Y=function(){n._state="loaded",N(),v.removeEventListener(r._canPlayEvent,Y,!1)};v.addEventListener(r._canPlayEvent,Y,!1),n._clearTimer(i._id)}}return i._id},pause:function(e){var t=this;if(t._state!=="loaded"||t._playLock)return t._queue.push({event:"pause",action:function(){t.pause(e)}}),t;for(var n=t._getSoundIds(e),o=0;o<n.length;o++){t._clearTimer(n[o]);var l=t._soundById(n[o]);if(l&&!l._paused&&(l._seek=t.seek(n[o]),l._rateSeek=0,l._paused=!0,t._stopFade(n[o]),l._node))if(t._webAudio){if(!l._node.bufferSource)continue;typeof l._node.bufferSource.stop>"u"?l._node.bufferSource.noteOff(0):l._node.bufferSource.stop(0),t._cleanBuffer(l._node)}else(!isNaN(l._node.duration)||l._node.duration===1/0)&&l._node.pause();arguments[1]||t._emit("pause",l?l._id:null)}return t},stop:function(e,t){var n=this;if(n._state!=="loaded"||n._playLock)return n._queue.push({event:"stop",action:function(){n.stop(e)}}),n;for(var o=n._getSoundIds(e),l=0;l<o.length;l++){n._clearTimer(o[l]);var d=n._soundById(o[l]);d&&(d._seek=d._start||0,d._rateSeek=0,d._paused=!0,d._ended=!0,n._stopFade(o[l]),d._node&&(n._webAudio?d._node.bufferSource&&(typeof d._node.bufferSource.stop>"u"?d._node.bufferSource.noteOff(0):d._node.bufferSource.stop(0),n._cleanBuffer(d._node)):(!isNaN(d._node.duration)||d._node.duration===1/0)&&(d._node.currentTime=d._start||0,d._node.pause(),d._node.duration===1/0&&n._clearSound(d._node))),t||n._emit("stop",d._id))}return n},mute:function(e,t){var n=this;if(n._state!=="loaded"||n._playLock)return n._queue.push({event:"mute",action:function(){n.mute(e,t)}}),n;if(typeof t>"u")if(typeof e=="boolean")n._muted=e;else return n._muted;for(var o=n._getSoundIds(t),l=0;l<o.length;l++){var d=n._soundById(o[l]);d&&(d._muted=e,d._interval&&n._stopFade(d._id),n._webAudio&&d._node?d._node.gain.setValueAtTime(e?0:d._volume,r.ctx.currentTime):d._node&&(d._node.muted=r._muted?!0:e),n._emit("mute",d._id))}return n},volume:function(){var e=this,t=arguments,n,o;if(t.length===0)return e._volume;if(t.length===1||t.length===2&&typeof t[1]>"u"){var l=e._getSoundIds(),d=l.indexOf(t[0]);d>=0?o=parseInt(t[0],10):n=parseFloat(t[0])}else t.length>=2&&(n=parseFloat(t[0]),o=parseInt(t[1],10));var i;if(typeof n<"u"&&n>=0&&n<=1){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"volume",action:function(){e.volume.apply(e,t)}}),e;typeof o>"u"&&(e._volume=n),o=e._getSoundIds(o);for(var p=0;p<o.length;p++)i=e._soundById(o[p]),i&&(i._volume=n,t[2]||e._stopFade(o[p]),e._webAudio&&i._node&&!i._muted?i._node.gain.setValueAtTime(n,r.ctx.currentTime):i._node&&!i._muted&&(i._node.volume=n*r.volume()),e._emit("volume",i._id))}else return i=o?e._soundById(o):e._sounds[0],i?i._volume:0;return e},fade:function(e,t,n,o){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"fade",action:function(){l.fade(e,t,n,o)}}),l;e=Math.min(Math.max(0,parseFloat(e)),1),t=Math.min(Math.max(0,parseFloat(t)),1),n=parseFloat(n),l.volume(e,o);for(var d=l._getSoundIds(o),i=0;i<d.length;i++){var p=l._soundById(d[i]);if(p){if(o||l._stopFade(d[i]),l._webAudio&&!p._muted){var m=r.ctx.currentTime,y=m+n/1e3;p._volume=e,p._node.gain.setValueAtTime(e,m),p._node.gain.linearRampToValueAtTime(t,y)}l._startFadeInterval(p,e,t,n,d[i],typeof o>"u")}}return l},_startFadeInterval:function(e,t,n,o,l,d){var i=this,p=t,m=n-t,y=Math.abs(m/.01),A=Math.max(4,y>0?o/y:o),T=Date.now();e._fadeTo=n,e._interval=setInterval(function(){var H=(Date.now()-T)/o;T=Date.now(),p+=m*H,p=Math.round(p*100)/100,m<0?p=Math.max(n,p):p=Math.min(n,p),i._webAudio?e._volume=p:i.volume(p,e._id,!0),d&&(i._volume=p),(n<t&&p<=n||n>t&&p>=n)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,i.volume(n,e._id),i._emit("fade",e._id))},A)},_stopFade:function(e){var t=this,n=t._soundById(e);return n&&n._interval&&(t._webAudio&&n._node.gain.cancelScheduledValues(r.ctx.currentTime),clearInterval(n._interval),n._interval=null,t.volume(n._fadeTo,e),n._fadeTo=null,t._emit("fade",e)),t},loop:function(){var e=this,t=arguments,n,o,l;if(t.length===0)return e._loop;if(t.length===1)if(typeof t[0]=="boolean")n=t[0],e._loop=n;else return l=e._soundById(parseInt(t[0],10)),l?l._loop:!1;else t.length===2&&(n=t[0],o=parseInt(t[1],10));for(var d=e._getSoundIds(o),i=0;i<d.length;i++)l=e._soundById(d[i]),l&&(l._loop=n,e._webAudio&&l._node&&l._node.bufferSource&&(l._node.bufferSource.loop=n,n&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop,e.playing(d[i])&&(e.pause(d[i],!0),e.play(d[i],!0)))));return e},rate:function(){var e=this,t=arguments,n,o;if(t.length===0)o=e._sounds[0]._id;else if(t.length===1){var l=e._getSoundIds(),d=l.indexOf(t[0]);d>=0?o=parseInt(t[0],10):n=parseFloat(t[0])}else t.length===2&&(n=parseFloat(t[0]),o=parseInt(t[1],10));var i;if(typeof n=="number"){if(e._state!=="loaded"||e._playLock)return e._queue.push({event:"rate",action:function(){e.rate.apply(e,t)}}),e;typeof o>"u"&&(e._rate=n),o=e._getSoundIds(o);for(var p=0;p<o.length;p++)if(i=e._soundById(o[p]),i){e.playing(o[p])&&(i._rateSeek=e.seek(o[p]),i._playStart=e._webAudio?r.ctx.currentTime:i._playStart),i._rate=n,e._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.setValueAtTime(n,r.ctx.currentTime):i._node&&(i._node.playbackRate=n);var m=e.seek(o[p]),y=(e._sprite[i._sprite][0]+e._sprite[i._sprite][1])/1e3-m,A=y*1e3/Math.abs(i._rate);(e._endTimers[o[p]]||!i._paused)&&(e._clearTimer(o[p]),e._endTimers[o[p]]=setTimeout(e._ended.bind(e,i),A)),e._emit("rate",i._id)}}else return i=e._soundById(o),i?i._rate:e._rate;return e},seek:function(){var e=this,t=arguments,n,o;if(t.length===0)e._sounds.length&&(o=e._sounds[0]._id);else if(t.length===1){var l=e._getSoundIds(),d=l.indexOf(t[0]);d>=0?o=parseInt(t[0],10):e._sounds.length&&(o=e._sounds[0]._id,n=parseFloat(t[0]))}else t.length===2&&(n=parseFloat(t[0]),o=parseInt(t[1],10));if(typeof o>"u")return 0;if(typeof n=="number"&&(e._state!=="loaded"||e._playLock))return e._queue.push({event:"seek",action:function(){e.seek.apply(e,t)}}),e;var i=e._soundById(o);if(i)if(typeof n=="number"&&n>=0){var p=e.playing(o);p&&e.pause(o,!0),i._seek=n,i._ended=!1,e._clearTimer(o),!e._webAudio&&i._node&&!isNaN(i._node.duration)&&(i._node.currentTime=n);var m=function(){p&&e.play(o,!0),e._emit("seek",o)};if(p&&!e._webAudio){var y=function(){e._playLock?setTimeout(y,0):m()};setTimeout(y,0)}else m()}else if(e._webAudio){var A=e.playing(o)?r.ctx.currentTime-i._playStart:0,T=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(T+A*Math.abs(i._rate))}else return i._node.currentTime;return e},playing:function(e){var t=this;if(typeof e=="number"){var n=t._soundById(e);return n?!n._paused:!1}for(var o=0;o<t._sounds.length;o++)if(!t._sounds[o]._paused)return!0;return!1},duration:function(e){var t=this,n=t._duration,o=t._soundById(e);return o&&(n=t._sprite[o._sprite][1]/1e3),n},state:function(){return this._state},unload:function(){for(var e=this,t=e._sounds,n=0;n<t.length;n++)t[n]._paused||e.stop(t[n]._id),e._webAudio||(e._clearSound(t[n]._node),t[n]._node.removeEventListener("error",t[n]._errorFn,!1),t[n]._node.removeEventListener(r._canPlayEvent,t[n]._loadFn,!1),t[n]._node.removeEventListener("ended",t[n]._endFn,!1),r._releaseHtml5Audio(t[n]._node)),delete t[n]._node,e._clearTimer(t[n]._id);var o=r._howls.indexOf(e);o>=0&&r._howls.splice(o,1);var l=!0;for(n=0;n<r._howls.length;n++)if(r._howls[n]._src===e._src||e._src.indexOf(r._howls[n]._src)>=0){l=!1;break}return u&&l&&delete u[e._src],r.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,t,n,o){var l=this,d=l["_on"+e];return typeof t=="function"&&d.push(o?{id:n,fn:t,once:o}:{id:n,fn:t}),l},off:function(e,t,n){var o=this,l=o["_on"+e],d=0;if(typeof t=="number"&&(n=t,t=null),t||n)for(d=0;d<l.length;d++){var i=n===l[d].id;if(t===l[d].fn&&i||!t&&i){l.splice(d,1);break}}else if(e)o["_on"+e]=[];else{var p=Object.keys(o);for(d=0;d<p.length;d++)p[d].indexOf("_on")===0&&Array.isArray(o[p[d]])&&(o[p[d]]=[])}return o},once:function(e,t,n){var o=this;return o.on(e,t,n,1),o},_emit:function(e,t,n){for(var o=this,l=o["_on"+e],d=l.length-1;d>=0;d--)(!l[d].id||l[d].id===t||e==="load")&&(setTimeout((function(i){i.call(this,t,n)}).bind(o,l[d].fn),0),l[d].once&&o.off(e,l[d].fn,l[d].id));return o._loadQueue(e),o},_loadQueue:function(e){var t=this;if(t._queue.length>0){var n=t._queue[0];n.event===e&&(t._queue.shift(),t._loadQueue()),e||n.action()}return t},_ended:function(e){var t=this,n=e._sprite;if(!t._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(t._ended.bind(t,e),100),t;var o=!!(e._loop||t._sprite[n][2]);if(t._emit("end",e._id),!t._webAudio&&o&&t.stop(e._id,!0).play(e._id),t._webAudio&&o){t._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=r.ctx.currentTime;var l=(e._stop-e._start)*1e3/Math.abs(e._rate);t._endTimers[e._id]=setTimeout(t._ended.bind(t,e),l)}return t._webAudio&&!o&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,t._clearTimer(e._id),t._cleanBuffer(e._node),r._autoSuspend()),!t._webAudio&&!o&&t.stop(e._id,!0),t},_clearTimer:function(e){var t=this;if(t._endTimers[e]){if(typeof t._endTimers[e]!="function")clearTimeout(t._endTimers[e]);else{var n=t._soundById(e);n&&n._node&&n._node.removeEventListener("ended",t._endTimers[e],!1)}delete t._endTimers[e]}return t},_soundById:function(e){for(var t=this,n=0;n<t._sounds.length;n++)if(e===t._sounds[n]._id)return t._sounds[n];return null},_inactiveSound:function(){var e=this;e._drain();for(var t=0;t<e._sounds.length;t++)if(e._sounds[t]._ended)return e._sounds[t].reset();return new a(e)},_drain:function(){var e=this,t=e._pool,n=0,o=0;if(!(e._sounds.length<t)){for(o=0;o<e._sounds.length;o++)e._sounds[o]._ended&&n++;for(o=e._sounds.length-1;o>=0;o--){if(n<=t)return;e._sounds[o]._ended&&(e._webAudio&&e._sounds[o]._node&&e._sounds[o]._node.disconnect(0),e._sounds.splice(o,1),n--)}}},_getSoundIds:function(e){var t=this;if(typeof e>"u"){for(var n=[],o=0;o<t._sounds.length;o++)n.push(t._sounds[o]._id);return n}else return[e]},_refreshBuffer:function(e){var t=this;return e._node.bufferSource=r.ctx.createBufferSource(),e._node.bufferSource.buffer=u[t._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,r.ctx.currentTime),t},_cleanBuffer:function(e){var t=this,n=r._navigator&&r._navigator.vendor.indexOf("Apple")>=0;if(!e.bufferSource)return t;if(r._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),n))try{e.bufferSource.buffer=r._scratchBuffer}catch{}return e.bufferSource=null,t},_clearSound:function(e){var t=/MSIE |Trident\//.test(r._navigator&&r._navigator.userAgent);t||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var a=function(e){this._parent=e,this.init()};a.prototype={init:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++r._counter,t._sounds.push(e),e.create(),e},create:function(){var e=this,t=e._parent,n=r._muted||e._muted||e._parent._muted?0:e._volume;return t._webAudio?(e._node=typeof r.ctx.createGain>"u"?r.ctx.createGainNode():r.ctx.createGain(),e._node.gain.setValueAtTime(n,r.ctx.currentTime),e._node.paused=!0,e._node.connect(r.masterGain)):r.noAudio||(e._node=r._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(r._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=t._src,e._node.preload=t._preload===!0?"auto":t._preload,e._node.volume=n*r.volume(),e._node.load()),e},reset:function(){var e=this,t=e._parent;return e._muted=t._muted,e._loop=t._loop,e._volume=t._volume,e._rate=t._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++r._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,t=e._parent;t._duration=Math.ceil(e._node.duration*10)/10,Object.keys(t._sprite).length===0&&(t._sprite={__default:[0,t._duration*1e3]}),t._state!=="loaded"&&(t._state="loaded",t._emit("load"),t._loadQueue()),e._node.removeEventListener(r._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,t=e._parent;t._duration===1/0&&(t._duration=Math.ceil(e._node.duration*10)/10,t._sprite.__default[1]===1/0&&(t._sprite.__default[1]=t._duration*1e3),t._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var u={},c=function(e){var t=e._src;if(u[t]){e._duration=u[t].duration,f(e);return}if(/^data:[^;]+;base64,/.test(t)){for(var n=atob(t.split(",")[1]),o=new Uint8Array(n.length),l=0;l<n.length;++l)o[l]=n.charCodeAt(l);h(o.buffer,e)}else{var d=new XMLHttpRequest;d.open(e._xhr.method,t,!0),d.withCredentials=e._xhr.withCredentials,d.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(i){d.setRequestHeader(i,e._xhr.headers[i])}),d.onload=function(){var i=(d.status+"")[0];if(i!=="0"&&i!=="2"&&i!=="3"){e._emit("loaderror",null,"Failed loading audio file with status: "+d.status+".");return}h(d.response,e)},d.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete u[t],e.load())},g(d)}},g=function(e){try{e.send()}catch{e.onerror()}},h=function(e,t){var n=function(){t._emit("loaderror",null,"Decoding audio data failed.")},o=function(l){l&&t._sounds.length>0?(u[t._src]=l,f(t,l)):n()};typeof Promise<"u"&&r.ctx.decodeAudioData.length===1?r.ctx.decodeAudioData(e).then(o).catch(n):r.ctx.decodeAudioData(e,o,n)},f=function(e,t){t&&!e._duration&&(e._duration=t.duration),Object.keys(e._sprite).length===0&&(e._sprite={__default:[0,e._duration*1e3]}),e._state!=="loaded"&&(e._state="loaded",e._emit("load"),e._loadQueue())},b=function(){if(r.usingWebAudio){try{typeof AudioContext<"u"?r.ctx=new AudioContext:typeof webkitAudioContext<"u"?r.ctx=new webkitAudioContext:r.usingWebAudio=!1}catch{r.usingWebAudio=!1}r.ctx||(r.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(r._navigator&&r._navigator.platform),t=r._navigator&&r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),n=t?parseInt(t[1],10):null;if(e&&n&&n<9){var o=/safari/.test(r._navigator&&r._navigator.userAgent.toLowerCase());r._navigator&&!o&&(r.usingWebAudio=!1)}r.usingWebAudio&&(r.masterGain=typeof r.ctx.createGain>"u"?r.ctx.createGainNode():r.ctx.createGain(),r.masterGain.gain.setValueAtTime(r._muted?0:r._volume,r.ctx.currentTime),r.masterGain.connect(r.ctx.destination)),r._setup()}};w.Howler=r,w.Howl=s,typeof I<"u"?(I.HowlerGlobal=_,I.Howler=r,I.Howl=s,I.Sound=a):typeof window<"u"&&(window.HowlerGlobal=_,window.Howler=r,window.Howl=s,window.Sound=a)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(r){var s=this;if(!s.ctx||!s.ctx.listener)return s;for(var a=s._howls.length-1;a>=0;a--)s._howls[a].stereo(r);return s},HowlerGlobal.prototype.pos=function(r,s,a){var u=this;if(!u.ctx||!u.ctx.listener)return u;if(s=typeof s!="number"?u._pos[1]:s,a=typeof a!="number"?u._pos[2]:a,typeof r=="number")u._pos=[r,s,a],typeof u.ctx.listener.positionX<"u"?(u.ctx.listener.positionX.setTargetAtTime(u._pos[0],Howler.ctx.currentTime,.1),u.ctx.listener.positionY.setTargetAtTime(u._pos[1],Howler.ctx.currentTime,.1),u.ctx.listener.positionZ.setTargetAtTime(u._pos[2],Howler.ctx.currentTime,.1)):u.ctx.listener.setPosition(u._pos[0],u._pos[1],u._pos[2]);else return u._pos;return u},HowlerGlobal.prototype.orientation=function(r,s,a,u,c,g){var h=this;if(!h.ctx||!h.ctx.listener)return h;var f=h._orientation;if(s=typeof s!="number"?f[1]:s,a=typeof a!="number"?f[2]:a,u=typeof u!="number"?f[3]:u,c=typeof c!="number"?f[4]:c,g=typeof g!="number"?f[5]:g,typeof r=="number")h._orientation=[r,s,a,u,c,g],typeof h.ctx.listener.forwardX<"u"?(h.ctx.listener.forwardX.setTargetAtTime(r,Howler.ctx.currentTime,.1),h.ctx.listener.forwardY.setTargetAtTime(s,Howler.ctx.currentTime,.1),h.ctx.listener.forwardZ.setTargetAtTime(a,Howler.ctx.currentTime,.1),h.ctx.listener.upX.setTargetAtTime(u,Howler.ctx.currentTime,.1),h.ctx.listener.upY.setTargetAtTime(c,Howler.ctx.currentTime,.1),h.ctx.listener.upZ.setTargetAtTime(g,Howler.ctx.currentTime,.1)):h.ctx.listener.setOrientation(r,s,a,u,c,g);else return f;return h},Howl.prototype.init=function(r){return function(s){var a=this;return a._orientation=s.orientation||[1,0,0],a._stereo=s.stereo||null,a._pos=s.pos||null,a._pannerAttr={coneInnerAngle:typeof s.coneInnerAngle<"u"?s.coneInnerAngle:360,coneOuterAngle:typeof s.coneOuterAngle<"u"?s.coneOuterAngle:360,coneOuterGain:typeof s.coneOuterGain<"u"?s.coneOuterGain:0,distanceModel:typeof s.distanceModel<"u"?s.distanceModel:"inverse",maxDistance:typeof s.maxDistance<"u"?s.maxDistance:1e4,panningModel:typeof s.panningModel<"u"?s.panningModel:"HRTF",refDistance:typeof s.refDistance<"u"?s.refDistance:1,rolloffFactor:typeof s.rolloffFactor<"u"?s.rolloffFactor:1},a._onstereo=s.onstereo?[{fn:s.onstereo}]:[],a._onpos=s.onpos?[{fn:s.onpos}]:[],a._onorientation=s.onorientation?[{fn:s.onorientation}]:[],r.call(this,s)}}(Howl.prototype.init),Howl.prototype.stereo=function(r,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"stereo",action:function(){a.stereo(r,s)}}),a;var u=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof s>"u")if(typeof r=="number")a._stereo=r,a._pos=[r,0,0];else return a._stereo;for(var c=a._getSoundIds(s),g=0;g<c.length;g++){var h=a._soundById(c[g]);if(h)if(typeof r=="number")h._stereo=r,h._pos=[r,0,0],h._node&&(h._pannerAttr.panningModel="equalpower",(!h._panner||!h._panner.pan)&&_(h,u),u==="spatial"?typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(r,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):h._panner.setPosition(r,0,0):h._panner.pan.setValueAtTime(r,Howler.ctx.currentTime)),a._emit("stereo",h._id);else return h._stereo}return a},Howl.prototype.pos=function(r,s,a,u){var c=this;if(!c._webAudio)return c;if(c._state!=="loaded")return c._queue.push({event:"pos",action:function(){c.pos(r,s,a,u)}}),c;if(s=typeof s!="number"?0:s,a=typeof a!="number"?-.5:a,typeof u>"u")if(typeof r=="number")c._pos=[r,s,a];else return c._pos;for(var g=c._getSoundIds(u),h=0;h<g.length;h++){var f=c._soundById(g[h]);if(f)if(typeof r=="number")f._pos=[r,s,a],f._node&&((!f._panner||f._panner.pan)&&_(f,"spatial"),typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(r,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(s,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(a,Howler.ctx.currentTime)):f._panner.setPosition(r,s,a)),c._emit("pos",f._id);else return f._pos}return c},Howl.prototype.orientation=function(r,s,a,u){var c=this;if(!c._webAudio)return c;if(c._state!=="loaded")return c._queue.push({event:"orientation",action:function(){c.orientation(r,s,a,u)}}),c;if(s=typeof s!="number"?c._orientation[1]:s,a=typeof a!="number"?c._orientation[2]:a,typeof u>"u")if(typeof r=="number")c._orientation=[r,s,a];else return c._orientation;for(var g=c._getSoundIds(u),h=0;h<g.length;h++){var f=c._soundById(g[h]);if(f)if(typeof r=="number")f._orientation=[r,s,a],f._node&&(f._panner||(f._pos||(f._pos=c._pos||[0,0,-.5]),_(f,"spatial")),typeof f._panner.orientationX<"u"?(f._panner.orientationX.setValueAtTime(r,Howler.ctx.currentTime),f._panner.orientationY.setValueAtTime(s,Howler.ctx.currentTime),f._panner.orientationZ.setValueAtTime(a,Howler.ctx.currentTime)):f._panner.setOrientation(r,s,a)),c._emit("orientation",f._id);else return f._orientation}return c},Howl.prototype.pannerAttr=function(){var r=this,s=arguments,a,u,c;if(!r._webAudio)return r;if(s.length===0)return r._pannerAttr;if(s.length===1)if(typeof s[0]=="object")a=s[0],typeof u>"u"&&(a.pannerAttr||(a.pannerAttr={coneInnerAngle:a.coneInnerAngle,coneOuterAngle:a.coneOuterAngle,coneOuterGain:a.coneOuterGain,distanceModel:a.distanceModel,maxDistance:a.maxDistance,refDistance:a.refDistance,rolloffFactor:a.rolloffFactor,panningModel:a.panningModel}),r._pannerAttr={coneInnerAngle:typeof a.pannerAttr.coneInnerAngle<"u"?a.pannerAttr.coneInnerAngle:r._coneInnerAngle,coneOuterAngle:typeof a.pannerAttr.coneOuterAngle<"u"?a.pannerAttr.coneOuterAngle:r._coneOuterAngle,coneOuterGain:typeof a.pannerAttr.coneOuterGain<"u"?a.pannerAttr.coneOuterGain:r._coneOuterGain,distanceModel:typeof a.pannerAttr.distanceModel<"u"?a.pannerAttr.distanceModel:r._distanceModel,maxDistance:typeof a.pannerAttr.maxDistance<"u"?a.pannerAttr.maxDistance:r._maxDistance,refDistance:typeof a.pannerAttr.refDistance<"u"?a.pannerAttr.refDistance:r._refDistance,rolloffFactor:typeof a.pannerAttr.rolloffFactor<"u"?a.pannerAttr.rolloffFactor:r._rolloffFactor,panningModel:typeof a.pannerAttr.panningModel<"u"?a.pannerAttr.panningModel:r._panningModel});else return c=r._soundById(parseInt(s[0],10)),c?c._pannerAttr:r._pannerAttr;else s.length===2&&(a=s[0],u=parseInt(s[1],10));for(var g=r._getSoundIds(u),h=0;h<g.length;h++)if(c=r._soundById(g[h]),c){var f=c._pannerAttr;f={coneInnerAngle:typeof a.coneInnerAngle<"u"?a.coneInnerAngle:f.coneInnerAngle,coneOuterAngle:typeof a.coneOuterAngle<"u"?a.coneOuterAngle:f.coneOuterAngle,coneOuterGain:typeof a.coneOuterGain<"u"?a.coneOuterGain:f.coneOuterGain,distanceModel:typeof a.distanceModel<"u"?a.distanceModel:f.distanceModel,maxDistance:typeof a.maxDistance<"u"?a.maxDistance:f.maxDistance,refDistance:typeof a.refDistance<"u"?a.refDistance:f.refDistance,rolloffFactor:typeof a.rolloffFactor<"u"?a.rolloffFactor:f.rolloffFactor,panningModel:typeof a.panningModel<"u"?a.panningModel:f.panningModel};var b=c._panner;b||(c._pos||(c._pos=r._pos||[0,0,-.5]),_(c,"spatial"),b=c._panner),b.coneInnerAngle=f.coneInnerAngle,b.coneOuterAngle=f.coneOuterAngle,b.coneOuterGain=f.coneOuterGain,b.distanceModel=f.distanceModel,b.maxDistance=f.maxDistance,b.refDistance=f.refDistance,b.rolloffFactor=f.rolloffFactor,b.panningModel=f.panningModel}return r},Sound.prototype.init=function(r){return function(){var s=this,a=s._parent;s._orientation=a._orientation,s._stereo=a._stereo,s._pos=a._pos,s._pannerAttr=a._pannerAttr,r.call(this),s._stereo?a.stereo(s._stereo):s._pos&&a.pos(s._pos[0],s._pos[1],s._pos[2],s._id)}}(Sound.prototype.init),Sound.prototype.reset=function(r){return function(){var s=this,a=s._parent;return s._orientation=a._orientation,s._stereo=a._stereo,s._pos=a._pos,s._pannerAttr=a._pannerAttr,s._stereo?a.stereo(s._stereo):s._pos?a.pos(s._pos[0],s._pos[1],s._pos[2],s._id):s._panner&&(s._panner.disconnect(0),s._panner=void 0,a._refreshBuffer(s)),r.call(this)}}(Sound.prototype.reset);var _=function(r,s){s=s||"spatial",s==="spatial"?(r._panner=Howler.ctx.createPanner(),r._panner.coneInnerAngle=r._pannerAttr.coneInnerAngle,r._panner.coneOuterAngle=r._pannerAttr.coneOuterAngle,r._panner.coneOuterGain=r._pannerAttr.coneOuterGain,r._panner.distanceModel=r._pannerAttr.distanceModel,r._panner.maxDistance=r._pannerAttr.maxDistance,r._panner.refDistance=r._pannerAttr.refDistance,r._panner.rolloffFactor=r._pannerAttr.rolloffFactor,r._panner.panningModel=r._pannerAttr.panningModel,typeof r._panner.positionX<"u"?(r._panner.positionX.setValueAtTime(r._pos[0],Howler.ctx.currentTime),r._panner.positionY.setValueAtTime(r._pos[1],Howler.ctx.currentTime),r._panner.positionZ.setValueAtTime(r._pos[2],Howler.ctx.currentTime)):r._panner.setPosition(r._pos[0],r._pos[1],r._pos[2]),typeof r._panner.orientationX<"u"?(r._panner.orientationX.setValueAtTime(r._orientation[0],Howler.ctx.currentTime),r._panner.orientationY.setValueAtTime(r._orientation[1],Howler.ctx.currentTime),r._panner.orientationZ.setValueAtTime(r._orientation[2],Howler.ctx.currentTime)):r._panner.setOrientation(r._orientation[0],r._orientation[1],r._orientation[2])):(r._panner=Howler.ctx.createStereoPanner(),r._panner.pan.setValueAtTime(r._stereo,Howler.ctx.currentTime)),r._panner.connect(r._node),r._paused||r._parent.pause(r._id,!0).play(r._id,!0)}})()})(M);const E=new M.Howl({src:["sounds/chaingun-loop.ogg","sounds/chaingun-loop.mp3"],loop:!0}),ie=new M.Howl({src:["sounds/chaingun-end.ogg","sounds/chaingun-end.mp3"],loop:!1}),Q=new M.Howl({src:["sounds/chaingun-out-ammo.ogg","sounds/chaingun-out-ammo.mp3"],loop:!0}),P={burst:{keyframes:[{backgroundPositionX:"calc(var(--size) * 1)"},{backgroundPositionX:"calc(var(--size) * 3)"}],options:{duration:200,easing:"steps(2)",iterations:1/0}},end:{keyframes:[{backgroundPositionX:"calc(var(--size) * 0)"},{backgroundPositionX:"calc(var(--size) * -2)"}],options:{duration:400,easing:"steps(2)",iterations:3}}},R=w=>w.play(),B=w=>w.stop();class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.currentAnimation=null}static get styles(){return`
      :host {
        --weapon: url("images/weapons/chaingun.png");
      }

      .container {
        --size: 230px;
        width: var(--size);
        height: 250px;
        background: var(--weapon);
      }
    `}burst(){const{burst:_}=P;this.currentAnimation=this.container.animate(_.keyframes,_.options),R(E)}unburst(_=!0){if(this.currentAnimation){const{end:r}=P;this.currentAnimation.cancel(),this.currentAnimation=this.container.animate(r.keyframes,r.options)}B(E),_&&R(ie),B(Q)}burstOutAmmo(){this.currentAnimation.cancel(),B(E);const{burst:_,end:r}=P;this.currentAnimation=this.container.animate(r.keyframes,_.options),R(Q)}connectedCallback(){this.render(),this.container=this.shadowRoot.querySelector(".container")}render(){this.shadowRoot.innerHTML=`
    <style>${F.styles}</style>
    <div class="container">
    </div>`}}customElements.define("doom-weapon",F);const se=globalThis.innerWidth,le=globalThis.innerHeight,Z=200,j=["linear","ease-in","ease-out","ease-in-out"],K=["#830202","#770101","#6c0202"];class G extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        z-index: 5;
      }

      .container {
        display: flex;
      }

      .drop {
        width: var(--drop-width);
        height: var(--drop-height);
        background: #770101;
        border-bottom: 4px solid #330202;
        box-sizing: border-box;
        animation: dripping var(--time) var(--timing) forwards;
      }

      @keyframes dripping {
        to { height: ${le}px }
      }
    `}connectedCallback(){this.render(),this.generateBlood(),setTimeout(()=>this.exit(),9e3)}generateBlood(){const _=this.shadowRoot.querySelector(".container"),r=se/Z;for(let s=0;s<Z;s++){const a=document.createElement("div");a.classList.add("drop");const u=~~(Math.random()*25),c=5e3+~~(Math.random()*3e3),g=K[~~(Math.random()*K.length)],h=~~(Math.random()*j.length),f=j[h];a.style.setProperty("--drop-width",`${r}px`),a.style.setProperty("--drop-height",`${u}px`),a.style.setProperty("--time",`${c}ms`),a.style.setProperty("--timing",`${f}`),a.style.setProperty("--color",`${g}`),_.append(a)}}exit(){document.body.style.overflow="auto",this.remove(),document.querySelector("doom-screen").exit()}render(){this.shadowRoot.innerHTML=`
    <style>${G.styles}</style>
    <div class="container">
    </div>`}}customElements.define("doom-blood",G);class $ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      .letter {
        background: url(images/big-numbers.png);
        width: 28px;
        height: 33px;
      }
      .letter-1 { background-position-x: -28px; width: 26px; }
      .letter-2 { background-position-x: -54px; width: 26px; }
      .letter-3 { background-position-x: -84px; width: 27px; }
      .letter-4 { background-position-x: -112px; }
      .letter-5 { background-position-x: -142px; width: 31px; }
      .letter-6 { background-position-x: -174px; }
      .letter-7 { background-position-x: -203px; width: 29px; }
      .letter-8 { background-position-x: -233px; }
      .letter-9 { background-position-x: -263px; }
      .letter-percent { background-position-x: -294px; }
    `}connectedCallback(){this.letter=this.getAttribute("letter"),this.classNameLetter=this.letter.replace("%","percent"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${$.styles}</style>
    <div class="letter letter-${this.classNameLetter}"></div>`}}customElements.define("bitmap-letter",$);class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: flex;
        transform-origin: 100% 0;
        transform: scale(1.75);
        image-rendering: pixelated;
      }
    `}connectedCallback(){this.updateText(this.getAttribute("text"))}updateText(_){this.text=String(_),this.render()}getComponentsByLetter(){return this.text.split("").map(r=>`<bitmap-letter letter="${r}"></bitmap-letter>`).join("")}render(){this.shadowRoot.innerHTML=`
    <style>${C.styles}</style>
    ${this.getComponentsByLetter()}
    `}}customElements.define("bitmap-font",C);const J=new Audio("sounds/damage.ogg");class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }

      .container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
      }
    `}connectedCallback(){this.render()}damage(){const _=this.shadowRoot.querySelector(".container"),r=[{backgroundColor:"transparent"},{backgroundColor:"red"},{backgroundColor:"transparent"}],s={duration:50+~~(Math.random()*200),easing:"ease",fill:"forwards",iterations:1};_.animate(r,s),J.currentTime=0,J.play();const a=5+~~(Math.random()*25),u=new CustomEvent("DAMAGE",{composed:!0,bubbles:!0,detail:{damage:a}});this.dispatchEvent(u)}render(){this.shadowRoot.innerHTML=`
    <style>${q.styles}</style>
    <div class="container">
    </div>`}}customElements.define("health-status",q);const de=[{translate:"0 -30px"},{translate:"0 0"},{translate:"0 -30px"}],ue={duration:600,easing:"linear",iterations:1/0},ce=()=>{document.body.style.overflow="hidden",document.body.style.background="#000"},x=document.querySelector(".page"),fe=()=>x.getBoundingClientRect().width/x.offsetWidth;let k=0,L;const U=["A","W","S","D"],_e=()=>{ce(),L=x.animate(de,ue),L.pause(),document.addEventListener("keydown",w=>{const _=w.key.toUpperCase();U.includes(_)&&(pe(_),L.play())}),document.addEventListener("keyup",w=>{const _=w.key.toUpperCase();U.includes(_)&&L.pause()})},pe=w=>{const _=fe();switch(w){case"ARROWUP":case"W":x.style.scale=Math.min(2,_+.02);break;case"ARROWDOWN":case"S":x.style.scale=Math.max(1,_-.02);break;case"ARROWLEFT":case"A":k=k+10,x.style.transform=`translateX(${k}px)`;break;case"ARROWRIGHT":case"D":k=k-10,x.style.transform=`translateX(${k}px)`;break}},he=globalThis.innerWidth,me=globalThis.innerHeight;class V extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
      }

      canvas {
        position: fixed;
        top: 0;
        left: 0;
      }
    `}connectedCallback(){this.render(),this.canvas=this.shadowRoot.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=he,this.canvas.height=me}shoot(){const _=5+~~(Math.random()*15),r=this.canvas.width/2-_/2,s=this.canvas.height/2-_/2;this.ctx.fillStyle="red",this.ctx.beginPath(),this.ctx.arc(r,s,_,0,2*Math.PI),this.ctx.fill()}render(){this.shadowRoot.innerHTML=`
    <style>${V.styles}</style>
    <canvas></canvas>`}}customElements.define("canvas-screen",V);const z=globalThis.innerWidth,ee=globalThis.innerHeight,te=25+~~(Math.random()*100),ne=100,re=new Audio("music/doom-theme.ogg");class W extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ammo=te,this.health=ne,this.isShooting=!1,this.outAmmo=!1}static get styles(){return`
      :host {
        --screen-width: ${z}px;
        --screen-height: ${ee}px;
      }

      .container {
        width: var(--screen-width);
        height: var(--screen-height);
        background: transparent;
      }

      .hud-container {
        width: 100%;
        height: 128px;
        background: url(images/hud/tile.png);
        background-repeat: repeat-x;
        position: absolute;
        bottom: 0;
      }

      .hud {
        width: 1280px;
        height: 100%;
        margin: auto;
        background: url(images/hud/bar.png);
        display: grid;
        grid-template-columns: 0.8fr 0.95fr 0.65fr 0.6fr 0.95fr 0.2fr 1.2fr;
      }

      .hud > div {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        margin-right: 20px;
      }

      .game {
        width: var(--screen-width);
        height: calc(var(--screen-height) - 128px);
        display: grid;
        justify-content: center;
        align-items: end;
      }

      .hud .arms {
        display: grid;
        grid-template-columns: repeat(3, 43px);
        grid-template-rows: 39px 39px 1fr;
        gap: 0 5px;
        margin: 4px;
        height: 100%;
      }

      .arms .w {
        font-family: EnterCommand;
        font-size: 48px;
        text-shadow: 0 0 4px #fff;
        color: #fff;
        justify-self: center;
      }

      .arms .w.disabled {
        color: #888;
        text-shadow: 0 0 4px #444;
      }

      canvas {
        cursor: none;
      }

      canvas-screen {
        pointer-events: none;
      }

      doom-weapon {
        position: absolute;
        left: calc(50% - 115px);
        top: -250px;
        z-index: 5;
      }
    `}connectedCallback(){this.render();const _=this.shadowRoot.querySelector(".game");this.screen=this.shadowRoot.querySelector("canvas-screen"),_.addEventListener("mousedown",()=>this.burst()),_.addEventListener("mouseup",()=>this.unburst()),document.addEventListener("keydown",({key:r})=>r==="Escape"&&this.kill()),re.play(),this.hitDamage(),this.canvas=this.shadowRoot.querySelector("canvas"),this.canvas.width=z,this.canvas.height=ee,_e()}hitDamage(){this.damageTimer=setInterval(()=>this.generateDamage(),2e3),document.addEventListener("DAMAGE",_=>{const{damage:r}=_.detail;console.log({damage:r,health:this.health}),this.health=Math.max(0,this.health-r),this.updateHealth()})}generateDamage(){~~(Math.random()*6)===0&&this.shadowRoot.querySelector("health-status").damage()}exit(){clearInterval(this.damageTimer),this.remove(),re.pause()}burst(){if(this.ammo>0){const _=this.shadowRoot.querySelector("doom-hero");this.shadowRoot.querySelector("doom-weapon").burst(),_.classList.add("shoot"),this.isShooting=!0,this.timerAmmo=setInterval(()=>this.burnAmmo(),150)}else this.isShooting=!0,this.outAmmo=!1,this.burnAmmo()}burnAmmo(){this.isShooting&&this.ammo>0&&(this.ammo--,this.updateAmmo(),this.screen.shoot()),this.isShooting&&this.ammo===0&&this.outAmmo===!1&&(this.outAmmo=!0,this.shadowRoot.querySelector("doom-weapon").burstOutAmmo())}unburst(){const _=this.shadowRoot.querySelector("doom-hero");this.shadowRoot.querySelector("doom-weapon").unburst(this.ammo>0),_.classList.remove("shoot"),this.isShooting=!1,clearInterval(this.timerAmmo)}updateHealth(){const _=this.shadowRoot.querySelector(".health bitmap-font");if(this.health<75){const r=this.shadowRoot.querySelector("doom-hero"),s=this.health>25?"medium":"low";r.setAttribute("life",s)}this.health===0&&this.kill(),_.updateText(`${this.health}%`)}kill(){this.shadowRoot.querySelector(".health bitmap-font").updateText("0%"),this.shadowRoot.querySelector("doom-hero").setFace("dead");const s=document.createElement("doom-blood");this.shadowRoot.querySelector(".container").insertAdjacentElement("afterend",s)}updateAmmo(){this.shadowRoot.querySelector(".ammo bitmap-font").updateText(this.ammo)}render(){this.shadowRoot.innerHTML=`
    <style>${W.styles}</style>
    <div class="container">
      <div class="game">
        <canvas></canvas>
        <health-status></health-status>
      </div>
      <div class="hud-container">
        <doom-weapon type="chaingun"></doom-weapon>
        <div class="hud">
          <div class="ammo">
            <bitmap-font text="${te}"></bitmap-font>
          </div>
          <div class="health">
            <bitmap-font text="${ne}%"></bitmap-font>
          </div>
          <div class="arms">
            <div class="w w1 disabled">1</div>
            <div class="w w2 disabled">2</div>
            <div class="w w3">3</div>
            <div class="w w4 disabled">4</div>
            <div class="w w5 disabled">5</div>
            <div class="w w6 disabled">6</div>
            <div class="w w7 disabled"></div>
          </div>
          <doom-hero life="high"></doom-hero>
          <div class="armor">
            <bitmap-font text="0%"></bitmap-font>
          </div>
          <div class="items"></div>
          <div class="stats"></div>
        </div>
      </div>
    </div>
    <canvas-screen></canvas-screen>`}}customElements.define("doom-screen",W);document.body.addEventListener("click",()=>{document.querySelector(".page").insertAdjacentHTML("afterend","<doom-screen></doom-screen>")},{once:!0});

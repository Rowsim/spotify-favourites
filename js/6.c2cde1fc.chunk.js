(this["webpackJsonpspotify-favourites"]=this["webpackJsonpspotify-favourites"]||[]).push([[6],{249:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var r=n(52),a=n(0),c=n.n(a),o=n(44),s=n.n(o),i=n(53),u=n(43),l=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=Object(u.b)())){e.next=7;break}return console.log("GET: ".concat("https://api.spotify.com/v1","/me/top/artists?time_range=").concat(t,"&limit=").concat(n)),e.next=5,fetch("".concat("https://api.spotify.com/v1","/me/top/artists?time_range=").concat(t).concat(n?"&limit=".concat(n):""),{method:"GET",headers:{Authorization:"Bearer ".concat(r)}});case 5:return a=e.sent,e.abrupt("return",a.json());case 7:return e.abrupt("return",Promise.reject("Invalid spotify auth token :("));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=(n(249),function(e){var t=e.artist,n=e.selected,r=e.setSelectedArtist,a=e.setCurrentElementPos,o=e.currentElementPos;return c.a.createElement("div",{onClick:function(e){r(t),function(e){var t=e.currentTarget;t.style.opacity="0"===t.style.opacity?"1":"0";var n=t.offsetLeft>o?o+300:o-300;t.parentElement.scrollTo({top:0,left:n,behavior:"smooth"}),a(n)}(e)},className:"spotify-top__selector__item fade-in ".concat(n?"spotify-top__selector__item--selected":"")},c.a.createElement("img",{alt:"artist",src:t.images[0].url}),c.a.createElement("div",{className:"spotify-top__selector__item__name"},t.name))}),f=function(e){var t=e.artist;return c.a.createElement("div",{className:"spotify-top__selected"},c.a.createElement("div",{className:"spotify-top__selected__title"},c.a.createElement("div",{className:"spotify-top__selected__title__name"},t.name," "),c.a.createElement("div",{className:"spotify-top__selected__title__popularity"},c.a.createElement("div",null,t.popularity))),c.a.createElement("div",{className:"spotify-top__selected__details"},t.genres&&t.genres.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"spotify-top__selected__genres"},c.a.createElement("div",{className:"spotify-top__selected__genres__title"},"Genres"),t.genres.map((function(e,t){return c.a.createElement("span",{key:t}," ",e," ")}))))))};t.default=function(e){var t=e.timeRange,n=Object(a.useState)([]),o=Object(r.a)(n,2),s=o[0],i=o[1],u=Object(a.useState)({}),_=Object(r.a)(u,2),m=_[0],d=_[1],v=Object(a.useState)(0),y=Object(r.a)(v,2),h=y[0],E=y[1],b=function(e){var t=document.querySelector(".spotify-top__selector"),n=.95*t.offsetWidth;t.scrollBy({top:0,left:e?-n:n,behavior:"smooth"})};return Object(a.useEffect)((function(){l("".concat(t,"_term")).then((function(e){i(e.items),d(e.items&&e.items[0])}))}),[t]),c.a.createElement("div",{className:"spotify-top fade-in"},c.a.createElement("div",{className:"spotify-top__title"},"Your top artists"),c.a.createElement("div",{className:"spotify-top__scroll-buttons"}),c.a.createElement("div",{className:"spotify-top__selector-container"},c.a.createElement("div",{className:"spotify-top__selector-container__scroll",onClick:function(){return b(!0)}},"<"),c.a.createElement("div",{className:"spotify-top__selector fade-in"},s&&s.map((function(e,t){return c.a.createElement(p,{artist:e,selected:e===m,setSelectedArtist:d,setCurrentElementPos:E,currentElementPos:h,key:t})}))),c.a.createElement("div",{className:"spotify-top__selector-container__scroll",onClick:function(){return b(!1)}},">")),m&&c.a.createElement(f,{artist:m}))}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return _})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return d}));var r,a=n(44),c=n.n(a),o=n(53),s=n(42),i=n(59),u=n(93),l=n(94),p=Object({NODE_ENV:"production",PUBLIC_URL:"/spotify-favourites",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).AUTH_REDIRECT_URI||"http://localhost:3000/callback",f="a3c9a895bbe94102a08574ba4f4adc9e";!function(e){e.AUTH="authorization_code",e.REFRESH="refresh_token"}(r||(r={}));var _=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i({length:48,type:"url-safe"}),localStorage.setItem("verifierCode",t),e.t0=y,e.next=5,u(t);case 5:return e.t1=e.sent,n=(0,e.t0)(e.t1),r=i({length:10,type:"url-safe"}),localStorage.setItem("stateCode",r),e.abrupt("return","https://accounts.spotify.com/authorize?response_type=code&client_id=".concat(f,"&redirect_uri=").concat(p,"&code_challenge_method=S256&code_challenge=").concat(n,"&state=").concat(r,"&scope=").concat("user-top-read"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)("spotifyToken");return e||(d(r.REFRESH)?localStorage.getItem("spotifyRefreshToken"):null)},d=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a){var o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==r.REFRESH){e.next=5;break}return o={grant_type:t,refresh_token:localStorage.getItem("spotifyRefreshToken"),client_id:f},e.abrupt("return",v(o));case 5:if(localStorage.getItem("stateCode")!==n){e.next=10;break}return s={client_id:f,grant_type:t,code:a,redirect_uri:p,code_verifier:localStorage.getItem("verifierCode")},e.next=9,v(s);case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://accounts.spotify.com/api/token",{method:"POST",body:h(t),headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(!(r=e.sent).access_token){e.next=10;break}return Object(s.b)("spotifyToken",r.access_token,r.expires_in),localStorage.setItem("spotifyRefreshToken",r.refresh_token),e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return e.toString(l).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},h=function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}},61:function(e,t){},62:function(e,t){},68:function(e,t){},69:function(e,t){},74:function(e,t){},75:function(e,t){},77:function(e,t){},79:function(e,t){},81:function(e,t){},84:function(e,t){},85:function(e,t){},90:function(e,t){},92:function(e,t){}}]);
//# sourceMappingURL=6.c2cde1fc.chunk.js.map
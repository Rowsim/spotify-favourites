(this["webpackJsonpspotify-favourites"]=this["webpackJsonpspotify-favourites"]||[]).push([[7],{274:function(e,t,n){"use strict";n.r(t);var r=n(40),a=n(0),c=n.n(a),o=n(14),i=n(15);function u(){var e=Object(r.a)(["\n  color: ",";\n  background: ",";\n  border: 1px solid ",";\n  padding: 6px;\n  font-weight: 500;\n  cursor: pointer;\n  font-size: 16px;\n  -moz-transition: all 0.2s ease-in;\n  -o-transition: all 0.2s ease-in;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n  pointer-events: ",";\n\n  &:hover {\n    color: ",";\n    cursor: ",";\n  }\n  &:active {\n    opacity: ",";\n  }\n"]);return u=function(){return e},e}var s=o.c.div(u(),(function(e){return e.selected?e.theme.background:e.theme.primary}),(function(e){return e.selected?e.theme.secondary:e.theme.background}),(function(e){return e.theme.secondary}),(function(e){return e.selected?"none":"auto"}),(function(e){return e.selected?e.theme.primary:e.theme.secondary}),(function(e){return e.selected?"default":"pointer"}),(function(e){return e.selected?"1":"0.6"}));function f(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  max-height: 33px;\n"]);return f=function(){return e},e}var l=function(){var e=Object(a.useContext)(i.a),t=e.favouritesType,n=e.setFavouritesType;return c.a.createElement(p,null,c.a.createElement(s,{selected:"tracks"===t,onClick:function(){return n("tracks")}},"Tracks"),c.a.createElement(s,{selected:"artists"===t,onClick:function(){return n("artists")}},"Artists"))},p=o.c.div(f());function d(){var e=Object(r.a)(["\n  display: flex;\n  justify-content: flex-end;\n  color: ",";\n  max-height: 33px;\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-end;\n    max-height: unset;\n  }\n"]);return d=function(){return e},e}var m=function(){var e=Object(a.useContext)(i.a),t=e.selectedTimeRange,n=e.setSelectedTimeRange,r=function(e){var t=document.querySelector(".spotify-top");t.style.opacity="0.2",n(e),setTimeout((function(){t.style.opacity="1"}),500)};return c.a.createElement(h,null,c.a.createElement(s,{selected:"short"===t,onClick:function(){return r("short")}},"Short"),c.a.createElement(s,{selected:"medium"===t,onClick:function(){return r("medium")}},"Medium"),c.a.createElement(s,{selected:"long"===t,onClick:function(){return r("long")}},"Long"))},h=o.c.div(d(),(function(e){return e.theme.primary})),b=n(61);function v(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 2px;\n  cursor: pointer;\n\n  &:hover {\n    .user-name {\n      color: #fd6500;\n    }\n  }\n\n  img {\n    height: 32px;\n    width: 32px;\n    border-radius: 50%;\n    margin-right: 8px;\n  }\n\n  .user-name {\n    transition: color 0.3s ease-in-out;\n    font-size: 14px;\n    color: white;\n    text-decoration: underline;\n  }\n"]);return v=function(){return e},e}var y=function(){var e=Object(a.useContext)(i.a),t=e.userProfile,n=e.setUserProfile;return Object(a.useEffect)((function(){t.display_name||Object(b.b)().then((function(e){return n(e)}))})),c.a.createElement(c.a.Fragment,null,t.display_name&&c.a.createElement(g,null,c.a.createElement("img",{src:t.images?t.images[0].url:"",alt:"profile"}),c.a.createElement("a",{target:"blank",href:t.external_urls.spotify,className:"user-name"},t.display_name.toLocaleLowerCase())))},g=o.c.div(v());function x(){var e=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n"]);return x=function(){return e},e}var k=o.c.div(x());t.default=function(){return c.a.createElement(k,null,c.a.createElement(l,null),c.a.createElement(y,null),c.a.createElement(m,null))}},40:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return r}))},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return h}));var r,a=n(46),c=n.n(a),o=n(49),i=n(48),u=n(62),s=n(81),f=n(82),l="https://rowsim.github.io/spotify-favourites/callback",p="a3c9a895bbe94102a08574ba4f4adc9e";!function(e){e.AUTH="authorization_code",e.REFRESH="refresh_token"}(r||(r={}));var d=function(){var e=Object(o.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u({length:48,type:"url-safe"}),localStorage.setItem("verifierCode",t),e.t0=v,e.next=5,s(t);case 5:return e.t1=e.sent,n=(0,e.t0)(e.t1),r=u({length:10,type:"url-safe"}),localStorage.setItem("stateCode",r),e.abrupt("return","https://accounts.spotify.com/authorize?response_type=code&client_id=".concat(p,"&redirect_uri=").concat(l,"&code_challenge_method=S256&code_challenge=").concat(n,"&state=").concat(r,"&scope=").concat("user-top-read"));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)("spotifyToken");return e||(h(r.REFRESH)?localStorage.getItem("spotifyRefreshToken"):null)},h=function(){var e=Object(o.a)(c.a.mark((function e(t,n,a){var o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==r.REFRESH){e.next=5;break}return o={grant_type:t,refresh_token:localStorage.getItem("spotifyRefreshToken"),client_id:p},e.abrupt("return",b(o));case 5:if(localStorage.getItem("stateCode")!==n){e.next=10;break}return i={client_id:p,grant_type:t,code:a,redirect_uri:l,code_verifier:localStorage.getItem("verifierCode")},e.next=9,b(i);case 9:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://accounts.spotify.com/api/token",{method:"POST",body:y(t),headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(!(r=e.sent).access_token){e.next=10;break}return Object(i.b)("spotifyToken",r.access_token,r.expires_in),localStorage.setItem("spotifyRefreshToken",r.refresh_token),e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){return e.toString(f).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},y=function(e){return Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")}},61:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l}));var r=n(46),a=n.n(r),c=n(49),o=n(45),i="https://api.spotify.com/v1",u=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=Object(o.b)())){e.next=7;break}return console.log("GET ".concat(i,"/me/top/artists")),e.next=5,fetch("".concat(i,"/me/top/artists?time_range=").concat(t).concat(n?"&limit=".concat(n):""),{method:"GET",headers:{Authorization:"Bearer ".concat(r)}});case 5:return c=e.sent,e.abrupt("return",c.json());case 7:return e.abrupt("return",Promise.reject("Invalid spotify auth token :("));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=Object(o.b)())){e.next=7;break}return console.log("GET ".concat(i,"/me/top/tracks")),e.next=5,fetch("".concat(i,"/me/top/tracks?time_range=").concat(t).concat(n?"&limit=".concat(n):""),{method:"GET",headers:{Authorization:"Bearer ".concat(r)}});case 5:return c=e.sent,e.abrupt("return",c.json());case 7:return e.abrupt("return",Promise.reject("Invalid spotify auth token :("));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=Object(o.b)())){e.next=7;break}return console.log("GET ".concat(i,"/artists/").concat(t,"/top-tracks")),e.next=5,fetch(" ".concat(i,"/artists/").concat(t,"/top-tracks?market=GB"),{method:"GET",headers:{Authorization:"Bearer ".concat(n)}});case 5:return r=e.sent,e.abrupt("return",r.json());case 7:return e.abrupt("return",Promise.reject("Invalid spotify auth token :("));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Object(o.b)())){e.next=7;break}return console.log("GET ".concat(i,"/me")),e.next=5,fetch(" ".concat(i,"/me"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});case 5:return n=e.sent,e.abrupt("return",n.json());case 7:return e.abrupt("return",Promise.reject("Invalid spotify auth token :("));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},63:function(e,t){},64:function(e,t){},66:function(e,t){},67:function(e,t){},70:function(e,t){},71:function(e,t){},72:function(e,t){},73:function(e,t){},74:function(e,t){},76:function(e,t){},78:function(e,t){},79:function(e,t){},80:function(e,t){}}]);
//# sourceMappingURL=7.55cc41de.chunk.js.map
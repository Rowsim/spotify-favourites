(this["webpackJsonpspotify-favourites"]=this["webpackJsonpspotify-favourites"]||[]).push([[8],{270:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(15),i=t(45),o=t(14);function u(){var e=Object(i.a)(["\n  color: ",";\n  background: ",";\n  border: 1px solid ",";\n  padding: 6px;\n  font-weight: 500;\n  cursor: pointer;\n  font-size: 16px;\n  -moz-transition: all 0.2s ease-in;\n  -o-transition: all 0.2s ease-in;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n  pointer-events: ",";\n\n  &:hover {\n    color: ",";\n    cursor: ",";\n  }\n  &:active {\n    opacity: ",";\n  }\n"]);return u=function(){return e},e}var l=o.c.div(u(),(function(e){return e.theme.primary}),(function(e){return e.selected?e.theme.secondary:e.theme.background}),(function(e){return e.theme.secondary}),(function(e){return e.selected?"none":"auto"}),(function(e){return e.selected?e.theme.primary:e.theme.secondary}),(function(e){return e.selected?"default":"pointer"}),(function(e){return e.selected?"1":"0.6"}));function s(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]);return s=function(){return e},e}var f=function(){var e=Object(r.useContext)(c.a),n=e.favouritesType,t=e.setFavouritesType;return a.a.createElement(d,null,a.a.createElement(l,{selected:"tracks"===n,onClick:function(){return t("tracks")}},"Tracks"),a.a.createElement(l,{selected:"artists"===n,onClick:function(){return t("artists")}},"Artists"))},d=o.c.div(s());function m(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: flex-end;\n  color: ",";\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-end;\n  }\n"]);return m=function(){return e},e}var p=function(){var e=Object(r.useContext)(c.a),n=e.selectedTimeRange,t=e.setSelectedTimeRange,i=function(e){var n=document.querySelector(".spotify-top");n.style.opacity="0.2",t(e),setTimeout((function(){n.style.opacity="1"}),500)};return a.a.createElement(v,null,a.a.createElement(l,{selected:"short"===n,onClick:function(){return i("short")}},"Short"),a.a.createElement(l,{selected:"medium"===n,onClick:function(){return i("medium")}},"Medium"),a.a.createElement(l,{selected:"long"===n,onClick:function(){return i("long")}},"Long"))},v=o.c.div(m(),(function(e){return e.theme.primary}));function y(){var e=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return y=function(){return e},e}var b=function(){return a.a.createElement(g,null,a.a.createElement(f,null),a.a.createElement(p,null))},g=o.c.div(y()),h=t(50),E=t(9),k=t(267),j=t(156),x=t.n(j);function O(){var e=Object(i.a)(["\n  canvas {\n    z-index: -1 !important;\n    max-height: 30%;\n  }\n"]);return O=function(){return e},e}var w=function(e){var n=e.children,t=Object(r.useState)(0),c=Object(E.a)(t,2),i=c[0],u=c[1],l=Object(r.useRef)(null),s=Object(r.useContext)(o.a);return Object(r.useEffect)((function(){if(!i)return u(x()({el:l.current,THREE:k,backgroundColor:s.background,color1:s.secondary,color2:s.background,wingSpan:40,speedLimit:6,separation:60,alignment:5,quantity:1.5})),setTimeout((function(){window.dispatchEvent(new Event("resize"))}),200),function(){i&&i.destroy()}}),[s.background,s.secondary,i]),a.a.createElement(T,{ref:l},n)},T=o.c.div(O()),S=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,269))})),C=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,271))}));n.default=function(){var e=Object(r.useContext)(c.a),n=e.hasSpotifyToken,t=e.setHasSpotifyToken;return Object(r.useEffect)((function(){t(null!=Object(h.a)("spotifyToken"))}),[t]),a.a.createElement(w,null,n?a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),a.a.createElement(C,null)):a.a.createElement(S,null))}},50:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}));var r=function(e,n,t){var r={value:n,expiry:(new Date).getTime()+1e3*t};localStorage.setItem(e,JSON.stringify(r))},a=function(e){var n=localStorage.getItem(e);if(!n)return null;var t=JSON.parse(n);return(new Date).getTime()>t.expiry?(localStorage.removeItem(e),null):t.value}}}]);
//# sourceMappingURL=8.01b1ea90.chunk.js.map
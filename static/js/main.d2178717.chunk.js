(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{24:function(t,e,c){},25:function(t,e,c){},32:function(t,e,c){"use strict";c.r(e);var n=c(2),i=c(0),s=c.n(i),o=c(15),r=c.n(o),a=(c(24),c(13)),u=(c(25),c(16)),b=c.n(u),j=function(t){var e=t.timer,c="0".concat(e%60).slice(-2),i="".concat(Math.floor(e/60)),s="0".concat(i%60).slice(-2),o="0".concat(Math.floor(e/3600)).slice(-2);return Object(n.jsxs)("div",{className:"Stopwatch-display",children:[o," : ",s," : ",c]})},l=c(36),h=c(35),d=function(){var t=Object(i.useState)(0),e=Object(a.a)(t,2),c=e[0],s=e[1],o=Object(i.useState)(!1),r=Object(a.a)(o,2),u=r[0],d=r[1],O=Object(i.useState)(""),f=Object(a.a)(O,2),p=f[0],x=f[1];return Object(n.jsx)("div",{className:"Stopwatch",children:Object(n.jsxs)("header",{className:"Stopwatch-header",children:[Object(n.jsx)(j,{timer:c}),Object(n.jsx)("div",{children:Object(n.jsxs)(b.a,{flexDirection:"row",justifyContent:"center",children:[u?Object(n.jsx)("button",{onClick:function(){p.unsubscribe(),s(0),x(""),d(!1)},children:"Stop"}):Object(n.jsx)("button",{onClick:function(){if(d(!0),!p){var t=Object(l.a)(1e3).pipe(Object(h.a)((function(t){return t+1}))).subscribe((function(t){return s(t+c)}));x(t)}},children:"Start"}),Object(n.jsx)("button",{onDoubleClick:function(){p.unsubscribe(),x(""),d(!1)},children:"Wait"}),Object(n.jsx)("button",{onClick:function(){p&&p.unsubscribe();var t=Object(l.a)(1e3).subscribe((function(t){return s(t)}));x(t)},children:"Reset"})]})})]})})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;c(t),n(t),i(t),s(t),o(t)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),O()}},[[32,1,2]]]);
//# sourceMappingURL=main.d2178717.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),l=a.n(r),s=(a(9),a(10),a(1)),o=function(e){var t=e.firstName,a=e.lastName,n=e.phone,r=e.gender;return c.a.createElement("div",{className:"contact"},c.a.createElement("ul",null,c.a.createElement("li",{className:"firstName"},t),c.a.createElement("li",{className:"lastName"},a),c.a.createElement("li",{className:"phone"},n),r&&c.a.createElement("li",{className:"gender"},r)))},m=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0438\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u043a\u0430\u044f",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043c\u043d\u044b\u0439",lastName:"\u0410\u043d\u043e\u043d\u0438\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0438\u043b\u0438\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u044d\u043d",lastName:"\u042d\u0440\u0438\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u044d\u0441",phone:"+380956319521",gender:"male"}],i=function(){var e=Object(n.useState)(m),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),u=i[0],d=i[1],h=Object(n.useState)(!1),f=Object(s.a)(h,2),p=f[0],N=f[1],E=Object(n.useState)(!1),g=Object(s.a)(E,2),v=g[0],b=g[1],k=Object(n.useState)(!1),j=Object(s.a)(k,2),w=j[0],O=j[1];Object(n.useEffect)((function(){r(m.filter((function(e){var t=e.firstName,a=e.lastName,n=e.phone,c=e.gender,r=u.toLowerCase(),l=t&&t.toLowerCase().includes(r)||a&&a.toLowerCase().includes(r)||n&&n.toLowerCase().includes(r);return(!w||void 0===c)&&(!v||"female"===c)&&l&&(!p||"male"===c)})))}),[u,p,v,w]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"contacts-list"},c.a.createElement("div",{className:"inputs"},c.a.createElement("div",{className:"input-text"},c.a.createElement("input",{onChange:function(e){var t=e.target.value;d(t)},placeholder:"Enter..."})),c.a.createElement("div",{className:"input-checkbox"},c.a.createElement("input",{type:"checkbox",onChange:function(e){var t=e.target.checked;N(t)}}),"- male"),c.a.createElement("div",{className:"input-checkbox"},c.a.createElement("input",{type:"checkbox",onChange:function(e){var t=e.target.checked;b(t)}}),"- female"),c.a.createElement("div",{className:"input-checkbox"},c.a.createElement("input",{type:"checkbox",onChange:function(e){var t=e.target.checked;O(t)}}),"- no gender")),c.a.createElement("div",{className:"quantity-contacts"},"found - ",a.length," contacts"),c.a.createElement("div",{className:"contacts"},a.map((function(e,t){return c.a.createElement(o,Object.assign({key:t},e))})))))};var u=function(){return c.a.createElement(i,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.98195929.chunk.js.map
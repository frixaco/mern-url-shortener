(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),u=(a(28),a(29),a(9)),s=a(2),o=a.n(s),i=a(6),m=a(3);function d(){}var p=Object(n.createContext)({token:null,userID:null,login:d,logout:d,isAuthenticated:!1}),E=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(null),c=Object(m.a)(l,2),u=c[0],s=c[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(i.a)(o.a.mark((function e(t){var a,n,l,c,u,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"GET",n=i.length>2&&void 0!==i[2]?i[2]:null,l=i.length>3&&void 0!==i[3]?i[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),l["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:l});case 8:return c=e.sent,e.next=11,c.json();case 11:if(u=e.sent,c.ok){e.next=14;break}throw new Error(u.message||"Something went wrong");case 14:return r(!1),e.abrupt("return",u);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),s(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(n.useCallback)((function(){return s(null)}),[])}},f=function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"}},r.a.createElement("div",{className:"preloader-wrapper active"},r.a.createElement("div",{className:"spinner-layer spinner-red-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"})))))},b=a(7),v=function(e){var t=e.links;return t.length?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u2116"),r.a.createElement("th",null,"Original"),r.a.createElement("th",null,"Shortened"),r.a.createElement("th",null,"Open"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.from),r.a.createElement("td",null,e.to),r.a.createElement("td",null,r.a.createElement(b.b,{to:"/details/".concat(e._id)},"Open")))})))):r.a.createElement("p",{className:"center"},"No links for now")},h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=E(),u=c.loading,s=c.request,d=Object(n.useContext)(p).token,b=Object(n.useCallback)(Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/link","GET",null,{Authorization:"Bearer ".concat(d)});case 3:t=e.sent,l(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[d,s]);return Object(n.useEffect)((function(){b()}),[b]),u?r.a.createElement(f,null):r.a.createElement(r.a.Fragment,null,!u&&r.a.createElement(v,{links:a}))},g=function(e){var t=e.link;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Link"),r.a.createElement("p",null,"Your link:"," ",r.a.createElement("a",{href:t.to,target:"_blank",rel:"noopener noreferrer"},t.to)),r.a.createElement("p",null,"From URL:"," ",r.a.createElement("a",{href:t.from,target:"_blank",rel:"noopener noreferrer"},t.from)),r.a.createElement("p",null,"Number of Clicks: ",r.a.createElement("strong",null,t.clicks)),r.a.createElement("p",null,"Date of creation:"," ",r.a.createElement("strong",null,new Date(t.date).toLocaleDateString())))},k=function(){var e=Object(n.useContext)(p).token,t=E(),a=t.request,l=t.loading,c=Object(n.useState)(null),s=Object(m.a)(c,2),d=s[0],b=s[1],v=Object(u.h)().id,h=Object(n.useCallback)(Object(i.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/link/".concat(v),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,b(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,v,a]);return Object(n.useEffect)((function(){h()}),[h]),l?r.a.createElement(f,null):r.a.createElement(r.a.Fragment,null,!l&&d&&r.a.createElement(g,{link:d}))},O=function(){var e=Object(u.g)(),t=Object(n.useContext)(p),a=E().request,l=Object(n.useState)(""),c=Object(m.a)(l,2),s=c[0],d=c[1];Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var f=function(){var n=Object(i.a)(o.a.mark((function n(r){var l;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==r.key){n.next=10;break}return n.prev=1,n.next=4,a("/api/link/generate","POST",{from:s},{Authorization:"Bearer ".concat(t.token)});case 4:l=n.sent,e.push("/details/".concat(l.link._id)),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"}},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Enter URL",id:"link",type:"text",value:s,onChange:function(e){return d(e.target.value)},onKeyPress:f}),r.a.createElement("label",{htmlFor:"email"},"URL"))))},j=a(13),w=a(12),x=function(){var e=Object(n.useContext)(p),t=Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),a=E(),l=a.loading,c=a.request,u=a.error,s=a.clearError,d=Object(n.useState)({email:"",password:""}),f=Object(m.a)(d,2),b=f[0],v=f[1];Object(n.useEffect)((function(){t(u),s()}),[u,t,s]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var h=function(e){v(Object(w.a)(Object(w.a)({},b),{},Object(j.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("/api/auth/register","POST",Object(w.a)({},b));case 3:a=e.sent,t(a.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var a=Object(i.a)(o.a.mark((function a(){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c("/api/auth/login","POST",Object(w.a)({},b));case 3:n=a.sent,e.login(n.token,n.userID),t(n.message),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(0);case 10:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s7 offset-s3"},r.a.createElement("h1",null,"Shorten your URl"),r.a.createElement("div",{className:"card blue darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Authorization"),r.a.createElement("div",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Enter email",id:"email",type:"text",name:"email",className:"yellow-input",value:b.email,onChange:h}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Enter password",id:"password",type:"password",name:"password",className:"yellow-input",value:b.password,onChange:h}),r.a.createElement("label",{htmlFor:"password"},"Password")))),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{onClick:k,disabled:l,className:"btn yellow darken-4",style:{marginRight:10}},"Sign In"),r.a.createElement("button",{onClick:g,disabled:l,className:"btn grey lighten-4 black-text"},"Register")))))},N=function(){var e=Object(u.g)(),t=Object(n.useContext)(p);return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper blue darken-1",style:{padding:0}},r.a.createElement("span",{className:"brand-logo"},"Shorten URL Links"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(b.c,{to:"/create"},"Create")),r.a.createElement("li",null,r.a.createElement(b.c,{to:"/links"},"Links")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:function(a){a.preventDefault(),t.logout(),e.push("/")}},"Logout")))))};var y=function(){var e=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),c=Object(m.a)(l,2),u=c[0],s=c[1],o=Object(n.useState)(null),i=Object(m.a)(o,2),d=i[0],p=i[1],E=Object(n.useCallback)((function(e,t){r(e),p(t),localStorage.setItem("userData",JSON.stringify({token:e,userID:t}))}),[]),f=Object(n.useCallback)((function(){r(null),p(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&E(e.token,e.userID),s(!0)}),[E]),{login:E,logout:f,token:a,userID:d,ready:u}}(),t=e.token,a=e.login,l=e.logout,c=e.userID,s=e.ready,o=!!t,i=function(e){return e?r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/links",exact:!0},r.a.createElement(h,null)),r.a.createElement(u.b,{path:"/create",exact:!0},r.a.createElement(O,null)),r.a.createElement(u.b,{path:"/details/:id"},r.a.createElement(k,null)),r.a.createElement(u.a,{to:"/create"})):r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(x,null)),r.a.createElement(u.a,{to:"/"}))}(o);return s?r.a.createElement(p.Provider,{value:{token:t,login:a,logout:l,userID:c,isAuthenticated:o}},r.a.createElement(b.a,null,o&&r.a.createElement(N,null),r.a.createElement("div",{className:"container"},i))):r.a.createElement(f,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.878b71ee.chunk.js.map